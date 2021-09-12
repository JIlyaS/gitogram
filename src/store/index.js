import { createStore } from 'vuex'
import trendings from './modules/trendings'
import user from './modules/user'

export default createStore({
 modules: {
   trendings,
   user
 }
})
