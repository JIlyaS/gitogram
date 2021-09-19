import { makeRequest } from '../requests'

export const starRepo = ({ owner, repo }) => {
  return makeRequest({
    url: `https://api.github.com/user/starred/${owner}/${repo}`,
    method: 'put'
  })
}

export const unStarRepo = ({ owner, repo }) => {
  return makeRequest({
    url: `https://api.github.com/user/starred/${owner}/${repo}`,
    method: 'delete'
  })
}
