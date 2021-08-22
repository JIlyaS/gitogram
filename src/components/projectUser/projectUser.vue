<template>
  <div class="project-user">
    <img class="project-user__avatar" :src="avatar" width="44" height="44" alt="Avatar" />
    <span class="project-user__name">{{ username }}</span>
  </div>
</template>

<script>
export default {
  name: 'projectUser',
  props: {
    username: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped src="./projectUser.scss" />
