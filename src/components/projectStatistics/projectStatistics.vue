<template>
  <div class="project-statistics">
    <button class="project-statistics__stars-btn" type="button">
      <div class="icon project-statistics__star">
        <icon name="star" />
      </div>
      <span class="project-statistics__star-text">Star</span>
    </button>
    <div class="project-statistics__stars-value">156k</div>
    <button class="project-statistics__fork-btn" type="button">
      <div class="icon project-statistics__fork">
        <icon name="fork" />
      </div>
      <span class="project-statistics__fork-text">Fork</span>
    </button>
    <div class="project-statistics__fork-value">{{ forks }}</div>
  </div>
</template>

<script>
import { icon } from '../../icons'
export default {
  name: 'projectStatistics',
  components: {
    icon
  },
  props: {
    stars: {
      type: Number,
      required: true
    },
    forks: {
      type: Number,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped src="./projectStatistics.scss" />
