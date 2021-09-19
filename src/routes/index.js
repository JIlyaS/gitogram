import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes'
import * as api from '../api'

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.beforeEach(async (to, from, next) => {
  const authRoute = to.name === 'auth'
  const token = localStorage.getItem('token')
  console.log('🚀 ~ file: index.js ~ line 13 ~ router.beforeEach ~ token', token)
  if (token && authRoute) {
    next({ name: 'repos' })
    return
  }
  if (authRoute) {
    next()
    return
  }
  try {
    const resp = await api.user.getUser()
    if (resp.status === 401) {
      throw new Error()
    }

    if (resp.status === 200) {
      localStorage.setItem('user', JSON.stringify(resp.data))
    }
    next(authRoute ? { name: 'repos' } : null)
  } catch (err) {
    if (err.response.status === 401) {
      next(authRoute ? null : { name: 'auth' })
    }
  }

  next()
})

export default router
