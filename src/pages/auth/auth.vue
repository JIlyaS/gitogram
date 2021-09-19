<template>
  <div class="auth">
    <div class="auth__wrapper">
      <logo class="auth__logo" />
      <p class="auth__text">
        More than just one repository. This is our digital world.
      </p>
      <c-button theme="green" class="auth__btn" @click="onAuth">
        <span>Authorize with github</span>
        <span class="auth__github-icon">
          <icon name="github" />
        </span>
      </c-button>
      <div class="auth__img-wrap">
        <img class="auth__img" src="../../assets/macbook.png" width="800" height="470" alt="Macbook image" />
      </div>
    </div>
    <footer class="auth__footer">
      <div class="auth__footer-text">© Gitogram from Loftschool</div>
    </footer>
  </div>
</template>

<script>
import {
  // mapState,
  mapActions
  // mapGetters
} from 'vuex'
import { icon } from '../../icons'
import { button } from '../../components/button'
import { logo } from '../../components/logo'

import env from '../../../env'

export default {
  name: 'auth',
  components: {
    logo,
    cButton: button,
    icon
  },
  methods: {
    ...mapActions({
      authUserByCode: 'auth/authUserByCode'
    }),
    async onAuth () {
      const githubAuthApi = 'https://github.com/login/oauth/authorize'
      const params = new URLSearchParams()
      params.append('client_id', env.clientId)
      params.append('scope', 'repo:status read:user')

      window.location.href = `${githubAuthApi}?${params}`
    }
  },
  async created () {
    const code = new URLSearchParams(window.location.search).get('code')

    if (code) {
      try {
        const token = await this.authUserByCode({ clientId: env.clientId, code, clientSecret: env.clientSecret })
        localStorage.setItem('token', token)
        this.$router.replace({ name: 'repos' })
      } catch (err) {
        console.error(err)
      }
    }
  }
}
</script>

<style lang="scss" scoped src="./auth.scss"></style>
