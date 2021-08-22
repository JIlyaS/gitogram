<template>
  <div class="header-profile">
    <div class="icon header-profile__home">
      <icon name="home" />
    </div>
    <div class="header-profile__user">
      <img src="../../assets/user-photo@2x.png"  class="header-profile__user-img" width="37" height="37" alt="Профиль" />
    </div>
    <div class="icon header-profile__logout">
      <icon name="logout" />
    </div>
  </div>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'headerProfile',
  components: {
    icon
  }
  // props: {
  //   avatar: {
  //     type: String,
  //     required: true
  //   },
  //   username: {
  //     type: String,
  //     required: true
  //   }
  // }
}
</script>

<style lang="scss" scoped src="./headerProfile.scss" />
