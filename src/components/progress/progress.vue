<template>
  <div :class="['progress', {'progress--active': active}]">
    <div ref="indicator" class="progress__indicator"></div>
  </div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: () => false
    }
  },
  emits: ['finish'],
  methods: {
    emitOnFinish () {
      this.$emit('finish')
    }
  },
  mounted () {
    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
  }
}
</script>

<style lang="scss" scoped src="./progress.scss" />
