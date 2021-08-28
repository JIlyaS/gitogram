<template>
  <button class="story-user-item" @click="$emit('onPress')">
    <div :class="['story-user-item__avatar', {'story-user-item__avatar--active': active}]">
      <img :src="src" class="story-user-item__img" :alt="'Avatar ' + name" />
    </div>
    <div class="story-user-item__username"> {{ name }} </div>
  </button>
</template>

<script>
export default {
  props: {
    src: {
      type: String,
      required: true
    },
    name: {
      type: String,
      required: true
    },
    active: {
      type: Boolean
    }
  }
}
</script>

<style lang="scss" scoped src="./storyUserItem.scss" />
