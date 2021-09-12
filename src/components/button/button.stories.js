import { button } from './'
import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'button',
  components: { button },
  decorators: [withKnobs]
}

export const defaultView = () => ({
  components: {
    cButton: button
  },
  template: `
    <c-button v-bind="args" class="button--follow">Follow</c-button>
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
