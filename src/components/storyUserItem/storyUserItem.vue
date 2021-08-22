<template>
  <button class="story-user-item" @click="$emit('onPress')">
    <div class="story-user-item__avatar">
      <img :src="avatar" class="story-user-item__img" alt="username avatar" />
    </div>
    <div class="story-user-item__username"> {{ username }} </div>
  </button>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped src="./storyUserItem.scss" />
