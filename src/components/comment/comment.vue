<template>
  <div class="comment">
    <p>
      <span class="comment__username">{{ username }}</span>
    </p>
  </div>
</template>

<script>
export default {
  name: 'comment',
  props: {
    username: {
      type: String
    }
  }
}
</script>

<style lang="scss" scoped src="./comment.scss"></style>
