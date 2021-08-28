import { projectUser } from './'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'projectUser',
  components: { projectUser },
  decorators: [withKnobs]
}

export const defaultView = () => ({
  components: {
    projectUser
  },
  props: {
    name: {
      default: text('Name', 'joshua_l')
    },
    src: {
      default: text('Src', 'https://picsum.photos/300/300')
    },
    alt: {
      default: text('Alt', 'Avatar')
    }
  },
  template: `
    <project-user :name="name" :src="src" :alt="alt" />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
