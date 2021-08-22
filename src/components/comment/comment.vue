<template>
  <div class="comment">
    <span class="comment__username">{{ username }}</span>
    <p class="comment__paragraph">
      {{ text }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'comment',
  props: {
    username: {
      type: String,
      required: true
    },
    text: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped src="./comment.scss"></style>
