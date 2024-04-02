import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import { localStorage } from 'mp-storage'
import app from './modules/app'

const store = new Vuex.Store({
  modules: {
    app
  },
  plugins: [
    createPersistedState({
      storage: localStorage
    })
  ]
})

export default store
