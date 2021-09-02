import { storyPopup } from './'
import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'storyPopup',
  components: { storyPopup },
  decorators: [withKnobs]
}

export const defaultView = () => ({
  components: {
    storyPopup
  },
  template: `
    <story-popup />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
