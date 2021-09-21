import * as api from '../../api'

export default {
  namespaced: true,
  state: {},
  actions: {
    getAuthCode () {
      api.auth.sendUserToAuthPage()
    },

    async authUserByCode (state, { code, clientSecret, clientId }) {
      const { data } = await api.auth.getAccessTokenByPersonalCode({ code, clientSecret, clientId })
      return data.token
    },

    async logout () {
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      window.location.reload()
    }
  }
}
