import { repos } from '../pages/repos'
import { user } from '../pages/user'
import { stories } from '../pages/stories'
import { auth } from '../pages/auth'
import { notFound } from '../pages/notFound'

export default [
  {
    name: 'repos',
    path: '/',
    component: repos
  },
  {
    name: 'user',
    path: '/user',
    component: user
  },
  {
    name: 'stories',
    path: '/stories',
    component: stories
  },
  {
    name: 'auth',
    path: '/auth',
    component: auth
  },
  {
    name: '404',
    path: '/:pathMatch(.*)*',
    component: notFound
  }
]
