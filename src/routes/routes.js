import { repos } from '../pages/repos'
import { user } from '../pages/user'
import { stories } from '../pages/stories'
import { notFound } from '../pages/notFound'

export default [
  {
    path: '/',
    component: repos
  },
  {
    path: '/user',
    component: user
  },
  {
    path: '/stories',
    component: stories
  },
  {
    path: '/:pathMatch(.*)*',
    component: notFound
  }
]
