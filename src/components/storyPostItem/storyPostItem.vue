<template>
  <div class="story-post-item">
    <slider-button class="story-post-item__btn-left" @press="handleLeftBtnClick" />
    <div class="story-post-item__container">
      <div class="story-post-item__header">
        <div class="story-post-item__progress">
          <c-progress active />
        </div>
        <project-user name="React.reposit" src="https://picsum.photos/300/300" alt="Avatar" small />
      </div>
      <div class="story-post-item__content">
        <div class="story-post-item__loader" v-if="loading">
          <spinner />
        </div>
        <div class="story-post-item__content-text" v-if="data.content?.length" v-html="data.content"></div>
        <!-- <div class="story-post-item__img-block">
          <img class="story-post-item__img" src="../../assets/popup-img.jpg" width="294" height="204" alt="Картинка" />
        </div>
        <div class="story-post-item__text-block">
          <p class="story-post-item__paragraph">
            The easiest way to get .NET 6 Preview 4 is to
            install the maui-check dotnet tool from CLI
            and follow the instructions.
          </p>
          <p class="story-post-item__paragraph">
            For running on Mac you'll currently use your
            favorite text editor and terminal to edit and
            run apps. We expect Visual Studio for Mac .NET
            6 support to begin arriving mid-year.
          </p>
          <p class="story-post-item__paragraph">
            In Preview 4 we enable push/pop navigation with
            NavigationPage. We added a concrete implementation
            of IWindow, and completed porting ContentPage from
            Xamarin.Forms
          </p>
          <p class="story-post-item__paragraph">
            For running on Mac you'll currently use your favorite
            text editor and terminal to edit and run apps. We expect
            Visual Studio for Mac .NET 6 support to begin arriving
            mid-year.
          </p>
        </div> -->
      </div>
      <div class="story-post-item__footer">
        <c-button class="button--follow">
          Follow
        </c-button>
      </div>
    </div>
    <slider-button class="story-post-item__btn-right" @press="handleRightBtnClick" right />
  </div>
</template>

<script>
import { sliderButton } from '../sliderButton'
import { progress } from '../progress'
import { projectUser } from '../projectUser'
import { button } from '../button'
import { spinner } from '../spinner'
export default {
  name: 'storyPostItem',
  components: {
    sliderButton,
    cProgress: progress,
    projectUser,
    cButton: button,
    spinner
  },
  props: {
    active: Boolean,
    loading: Boolean,
    data: {
      type: Object,
      required: true,
      default: () => ({})
    }
  },
  methods: {
    handleRightBtnClick () {
      console.log('right')
    },

    handleLeftBtnClick () {
      console.log('left')
    }
  }
}
</script>

<style lang="scss" scoped src="./storyPostItem.scss" />
