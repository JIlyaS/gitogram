import { projectUser } from './'
import { withKnobs, text, boolean } from '@storybook/addon-knobs'

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
    },
    small: {
      default: boolean('Small', false)
    }
  },
  template: `
    <project-user :name="name" :src="src" :alt="alt" />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}

export const smallView = () => ({
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
    },
    small: {
      default: boolean('Small', false)
    }
  },
  template: `
    <project-user :name="name" :src="src" :alt="alt" small />
  `
})

smallView.story = {
  name: 'Уменьшенный размер иконки и текста'
}
