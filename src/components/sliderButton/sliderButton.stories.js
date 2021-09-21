import { sliderButton } from './'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

export default {
  title: 'sliderButton',
  components: { sliderButton },
  decorators: [withKnobs]
}

const methods = {
  onPress: action('onPress')
}

export const defaultView = () => ({
  components: {
    sliderButton
  },
  props: {
    right: {
      default: boolean('Right', false)
    }
  },
  template: `
    <slider-button @press="onPress" />
  `,
  methods
})

defaultView.story = {
  name: 'Стандартный вид'
}

export const activeView = () => ({
  components: {
    sliderButton
  },
  props: {
    right: {
      default: boolean('Right', false)
    }
  },
  template: `
    <slider-button @press="onPress" right />
  `,
  methods
})

activeView.story = {
  name: 'Кнопка со стрелкой вправо'
}
