<template>
  <div class="placeholder">
    <div class="placeholder__img"></div>
    <div v-for="paragraph in paragraphs" :key="paragraph++">
      <div class="placeholder__text"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'placeholder',
  props: {
    paragraphs: {
      type: Number,
      default: () => 1
    }
  }
}
</script>

<style lang="scss" scoped src="./placeholder.scss" />
