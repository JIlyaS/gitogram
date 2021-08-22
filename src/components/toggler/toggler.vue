<template>
  <button :class="['toggler', {active: isOpened}]" @click="toggle">
    <span class="toggler__text">
      {{ isOpened ? 'Hide' : 'View'}} issues
    </span>
    <span class="icon toggler__arrow">
      <icon name="triangle" />
    </span>
  </button>
</template>

<script>
import { icon } from '../../icons'

export default {
  name: 'toggler',
  components: {
    icon
  },
  data () {
    return {
      isOpened: false
    }
  },
  methods: {
    toggle () {
      this.isOpened = !this.isOpened
      this.$emit('onToggle', this.isOpened)
    }
  }
}
</script>

<style lang="scss" scoped src="./toggler.scss"></style>
