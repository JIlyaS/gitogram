<template>
  <div class="stories">
    <div class="stories__wrapper">
      <header class="stories__header">
        <div class="container stories__container">
          <router-link to="/">
            <logo white />
          </router-link>
          <button class="stories__close" type="button" @click="$router.push('/')">
            <icon name="cross" />
          </button>
        </div>
      </header>
      <div class="stories__content">
        <stories-slider />
      </div>
    </div>
  </div>
</template>

<script>
import { logo } from '../../components/logo'
import { icon } from '../../icons'
import { storiesSlider } from '../../components/storiesSlider'
export default {
  name: 'stories',
  components: {
    logo,
    icon,
    storiesSlider
  },
  async created () {
  },
  data () {
  }
}
</script>

<style lang="scss" scoped src="./stories.scss"></style>
