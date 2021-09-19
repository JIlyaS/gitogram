<template>
  <button
    :class="['button', {'button--green': theme === 'green'}, {'button--grey': theme === 'grey' || loading || disabled}, {'hover-text': withHoverText}]"
    :data-hover-text="hoverText"
    v-bind="$args"
    :disabled="disabled"
  >
    <span class="button__loading" v-if="loading">
      <spinner class="spinner--btn" />
    </span>
    <span class="button__text" v-else>
      <slot></slot>
    </span>
  </button>
</template>

<script>
// import { icon } from '../../icons'
import { spinner } from '../spinner'
export default {
  name: 'button',
  components: {
    // icon,
    spinner
  },
  props: {
    hoverText: {
      type: String
    },
    theme: {
      type: String,
      required: true
    },
    loading: {
      type: Boolean,
      default: () => false
    },
    disabled: {
      type: Boolean,
      default: () => false
    }
  },
  computed: {
    withHoverText () {
      return this.hoverText?.length
    }
  }
}
</script>

<style lang="scss" scoped src="./button.scss"></style>
