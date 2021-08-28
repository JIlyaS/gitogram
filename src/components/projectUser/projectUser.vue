<template>
  <div class="project-user">
    <img class="project-user__avatar" :src="src" width="44" height="44" :alt="alt" />
    <span class="project-user__name">{{ name }}</span>
  </div>
</template>

<script>
export default {
  name: 'projectUser',
  props: {
    name: {
      type: String,
      required: true
    },
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped src="./projectUser.scss" />
