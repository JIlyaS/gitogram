<template>
  <div class="placeholder">
    <div class="placeholder__img" v-if="!isText"></div>
    <div v-for="paragraph in paragraphs" :key="paragraph++">
      <div class="placeholder__text" v-if="!isText"></div>
      <div class="placeholder__content" v-else></div>
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
    },
    isText: {
      type: Boolean,
      default: () => false
    }
  }
}
</script>

<style lang="scss" scoped src="./placeholder.scss" />
