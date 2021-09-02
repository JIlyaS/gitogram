<template>
  <div class="story-popup">
    <slider-button class="story-popup__btn-left" @press="handleLeftBtnClick" />
    <div class="story-popup__container">
      <div class="story-popup__header">
        <div class="story-popup__progress">
          <c-progress />
        </div>
        <project-user name="React.reposit" src="https://picsum.photos/300/300" alt="Avatar" small />
      </div>
      <div class="story-popup__content">
        <div class="story-popup__img-block">
          <img class="story-popup__img" src="../../assets/popup-img.jpg" width="294" height="204" alt="Картинка" />
        </div>
        <div class="story-popup__text-block">
          <p class="story-popup__paragraph">
            The easiest way to get .NET 6 Preview 4 is to
            install the maui-check dotnet tool from CLI
            and follow the instructions.
          </p>
          <p class="story-popup__paragraph">
            For running on Mac you'll currently use your
            favorite text editor and terminal to edit and
            run apps. We expect Visual Studio for Mac .NET
            6 support to begin arriving mid-year.
          </p>
          <p class="story-popup__paragraph">
            In Preview 4 we enable push/pop navigation with
            NavigationPage. We added a concrete implementation
            of IWindow, and completed porting ContentPage from
            Xamarin.Forms
          </p>
          <p class="story-popup__paragraph">
            For running on Mac you'll currently use your favorite
            text editor and terminal to edit and run apps. We expect
            Visual Studio for Mac .NET 6 support to begin arriving
            mid-year.
          </p>
        </div>
      </div>
      <div class="story-popup__footer">
        <c-button class="button--follow">
          Follow
        </c-button>
      </div>
    </div>
    <slider-button class="story-popup__btn-right" @press="handleRightBtnClick" right />
  </div>
</template>

<script>
import { sliderButton } from '../sliderButton'
import { progress } from '../progress'
import { projectUser } from '../projectUser'
import { button } from '../button'
export default {
  name: 'storyPopup',
  components: {
    sliderButton,
    cProgress: progress,
    projectUser,
    cButton: button
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

<style lang="scss" scoped src="./storyPopup.scss" />
