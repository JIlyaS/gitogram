import { makeRequest } from '../requests'

export const getAccessTokenByPersonalCode = ({ clientId, code, clientSecret }) => {
  return makeRequest({
    url: 'https://webdev-api.loftschool.com/github',
    method: 'post',
    data: {
      clientId, code, clientSecret
    }
  })
}
