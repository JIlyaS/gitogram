<template>
  <div :class={active} class="progress">
    <div ref="indicator" class="progress__indicator"></div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: false
    }
  },
  emits: ['finish'],
  methods: {
    emitOnFinish () {
      this.$emit('finish')
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.active = true
    })

    this.$refs.indicator.addEventListener('transitionend', this.emitOnFinish)
  },
  beforeUnmount () {
    this.$refs.indicator.removeEventListener('transitionend', this.emitOnFinish)
  }
}
</script>

<style lang="scss" scoped src="./progress.scss" />
