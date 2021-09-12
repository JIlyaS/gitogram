<template>
  <div :class="['story-post-item', {'story-post-item--active': active}]">
    <div class="story-post-item__container">
      <div class="story-post-item__header">
        <div class="story-post-item__progress">
          <c-progress :active="active" @finish="$emit('onProgressFinish')" />
        </div>
        <project-user :name="data.username" :src="data.avatar" :alt="data.username" small />
      </div>
      <div class="story-post-item__content">
        <div class="story-post-item__loader" v-if="loading">
          <spinner />
        </div>
        <div class="story-post-item__content-wrap" v-else>
          <div class="story-post-item__content-text" v-if="data.content?.length" v-html="data.content"></div>
          <placeholder :paragraphs="2" v-else />
        </div>
      </div>
      <div class="story-post-item__footer">
        <c-button class="button--follow">
          Follow
        </c-button>
      </div>
    </div>
    <template v-if="active">
      <slider-button
        v-if="btnsShow.includes('prev')"
        class="story-post-item__btn-left"
        @click="$emit('onPrevSlide')"
      />
      <slider-button
        v-if="btnsShow.includes('next')"
        class="story-post-item__btn-right"
        @click="$emit('onNextSlide')"
        right
      />
    </template>
  </div>
</template>

<script>
import { sliderButton } from '../sliderButton'
import { progress } from '../progress'
import { projectUser } from '../projectUser'
import { button } from '../button'
import { spinner } from '../spinner'
import { placeholder } from '../placeholder'
export default {
  name: 'storyPostItem',
  components: {
    sliderButton,
    cProgress: progress,
    projectUser,
    cButton: button,
    spinner,
    placeholder
  },
  emits: ['onPrevSlide', 'onNextSlide', 'onProgressFinish'],
  props: {
    active: {
      type: Boolean,
      default: () => false
    },
    loading: Boolean,
    data: {
      type: Object,
      required: true,
      default: () => ({})
    },
    btnsShow: {
      type: Array,
      default: () => (['next', 'prev']),
      validator (value) {
        return value.every(item => item === 'next' || item === 'prev')
      }
    }
  },
  methods: {}
}
</script>

<style lang="scss" scoped src="./storyPostItem.scss" />
