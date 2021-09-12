<template>
  <div :class="['logo', { 'logo--white': white }]">
    <icon name="logo" />
  </div>
</template>

<script>
import { icon } from '../../icons'
export default {
  name: 'logo',
  props: {
    white: {
      type: Boolean
    }
  },
  components: {
    icon
  }
}
</script>

<style lang="scss" scoped src="./logo.scss" />
