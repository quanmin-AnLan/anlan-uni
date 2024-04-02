import { createRouter } from '@gowiny/uni-router'
import RouteIns from './routeInit'
import PAGE_DATA from '@/pages.json'

const router = createRouter({
  pageData: PAGE_DATA
})

router.beforeEach((to, from) => {
  RouteIns.run(to)
})

export default router