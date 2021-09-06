<template>
  <div class="stories-slider">
    <div class="stories-slider__conteiner">
      <story-post-item />
    </div>
  </div>
</template>

<script>
import { storyPostItem } from '../storyPostItem'
export default {
  name: 'storiesSlider',
  components: {
    storyPostItem
  },
  methods: {}
}
</script>

<style lang="scss" scoped src="./storiesSlider.scss" />
