<template>
  <div class="header-profile">
    <button class="icon header-profile__home">
      <icon name="home" />
    </button>
    <button class="header-profile__user">
      <img :src="avatar"  class="header-profile__user-img" width="37" height="37" :alt="username" />
    </button>
    <button class="icon header-profile__logout" @click="logout">
      <icon name="logout" />
    </button>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { icon } from '../../icons'

export default {
  name: 'headerProfile',
  components: {
    icon
  },
  props: {
    avatar: {
      type: String,
      default: () => '../../assets/user-photo@2x.png'
    },
    username: {
      type: String,
      default: () => 'Profile'
    }
  },
  methods: {
    ...mapActions({
      logout: 'auth/logout'
    })
  }
}
</script>

<style lang="scss" scoped src="./headerProfile.scss" />
