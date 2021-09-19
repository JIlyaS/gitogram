import { createStore } from 'vuex'
import trendings from './modules/trendings'
import user from './modules/user'
import auth from './modules/auth'

export default createStore({
  getters: {
    getUnsterredOnly (state) {
      return state.trendings.data.filter((trendingsRepo) => {
        return !state.starred.data.some((starredRepo) => {
          return trendingsRepo.id === starredRepo.id
        })
      })
    }
  },
  modules: {
    trendings,
    user,
    auth
  }
})
