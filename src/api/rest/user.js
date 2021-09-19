import { makeRequest } from '../requests'

export const getUser = () => {
  return makeRequest({
    url: 'https://api.github.com/user'
  })
}

export const getUserRepos = () => {
  return makeRequest({
    url: 'https://api.github.com/user/repos'
  })
}
