let apis = {}

const ctx = import.meta.glob('../api/**/*.js', { eager: true })

for (const path in ctx) {
  if (/.*Api*/.test(path)) {
    const api = ctx[path].default
    apis = Object.assign({}, apis, api)
  }
}

export default apis
