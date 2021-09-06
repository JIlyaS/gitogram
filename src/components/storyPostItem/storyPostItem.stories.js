import { storyPostItem } from '.'
import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'storyPostItem',
  components: { storyPostItem },
  decorators: [withKnobs]
}

export const defaultView = () => ({
  components: {
    storyPostItem
  },
  template: `
    <story-post-item />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
