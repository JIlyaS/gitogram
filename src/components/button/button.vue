<template>
  <button
    :class="['button', 'button--theme-green', {'hover-text': withHoverText}]"
    :data-hover-text="hoverText"
    v-bind="$args"
  >
    <span class="button__text">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'button',
  props: {
    hoverText: {
      type: String
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
