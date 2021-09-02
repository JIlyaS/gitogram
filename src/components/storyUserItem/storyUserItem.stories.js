import { storyUserItem } from './'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'storyUserItem',
  components: { storyUserItem },
  decorators: [withKnobs]
}

export const defaultView = () => ({
  components: {
    storyUserItem
  },
  props: {
    name: {
      default: text('Name', 'joshua_l')
    },
    src: {
      default: text('Src', 'https://picsum.photos/300/300')
    }
  },
  template: `
    <story-user-item :name="name" :src="src" />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}

export const activeView = () => ({
  components: {
    storyUserItem
  },
  template: `
    <story-user-item name="joshua_l" src="https://picsum.photos/300/300" active />
  `
})

activeView.story = {
  name: 'Без границы у аватара'
}
