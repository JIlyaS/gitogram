<template>
  <button :class="['slider-button', {'slider-button--right': right}]" @click="$emit('press')">
    <div class="icon slider-button__icon">
      <icon name="arrow" />
    </div>
  </button>
</template>

<script>
import { icon } from '../../icons'
export default {
  components: {
    icon
  },
  props: {
    right: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped src="./sliderButton.scss" />
