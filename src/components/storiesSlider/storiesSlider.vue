<template>
  <div class="stories-slider">
    <div class="stories-slider__container">
      <ul class="stories-slider__list" ref="slider">
        <li
          class="stories-slider__item"
          v-for="(trending, ndx) in trendings"
          :key="trending.id"
          ref="item"
        >
          <story-post-item
            :data="getStoryData(trending)"
            :active="slideNdx === ndx && !loading"
            :btnsShow="activeBtns"
            :loading="slideNdx === ndx && loading"
            @onNextSlide="handleSlide(ndx + 1)"
            @onPrevSlide="handleSlide(ndx - 1)"
            @onProgressFinish="progressFinish(ndx)"
            @onFollow="starRepo"
            @onUnFollow="unStarRepo"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { storyPostItem } from '../storyPostItem'
export default {
  name: 'storiesSlider',
  components: {
    storyPostItem
  },
  props: {
    initialSlide: {
      type: Number
    }
  },
  data () {
    return {
      slideNdx: 0,
      sliderPosition: 0,
      loading: false,
      btnsShown: true
    }
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.trendings
    }),
    activeBtns () {
      if (!this.btnsShown) return []
      if (this.slideNdx === 0) return ['next']
      if (this.slideNdx === this.trendings.length - 1) return ['prev']
      return ['next', 'prev']
    }
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings',
      fetchReadme: 'trendings/fetchReadme',
      starRepo: 'trendings/starRepo',
      unStarRepo: 'trendings/unStarRepo'
    }),
    async fetchReadmeForActiveSlide () {
      const { id, owner, name } = this.trendings[this.slideNdx]
      await this.fetchReadme({ id, owner: owner.login, repo: name })
    },
    getStoryData (trending) {
      return {
        id: trending.id,
        avatar: trending.owner?.avatar_url,
        username: trending.owner?.login,
        content: trending.readme,
        following: trending.following
      }
    },
    moveSlider (slideNdx) {
      const { slider, item } = this.$refs
      const slideWidth = parseInt(
        getComputedStyle(item).getPropertyValue('width'), 10
      )
      this.slideNdx = slideNdx
      this.slidePosition = -(slideWidth * slideNdx * 1.15)
      slider.style.transform = `translateX(${this.slidePosition}px)`
    },
    progressFinish (ndx) {
      if (this.slideNdx === this.trendings.length - 1) return
      this.handleSlide(ndx + 1)
    },
    async loadReadme () {
      this.loading = true
      this.btnsShown = false
      try {
        await this.fetchReadmeForActiveSlide()
        // eslint-disable-next-line no-useless-catch
      } catch (e) {
        console.error(e)
        throw e
      } finally {
        this.loading = false
        this.btnsShown = true
      }
    },
    async handleSlide (slideNdx) {
      this.moveSlider(slideNdx)
      await this.loadReadme()
    }
  },
  async mounted () {
    if (this.initialSlide) {
      const ndx = this.trendings.findIndex((item) => item.id === this.initialSlide)
      await this.handleSlide(ndx)
    }
    await this.fetchTrendings()
    await this.loadReadme()
  }
}
</script>

<style lang="scss" scoped src="./storiesSlider.scss" />
