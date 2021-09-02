import { comment } from './'
import { withKnobs, text } from '@storybook/addon-knobs'

export default {
  title: 'comment',
  components: { comment },
  decorators: [withKnobs]
}

export const defaultView = () => ({
  components: {
    comment
  },
  props: {
    username: {
      default: text('Username', 'joshua_l')
    },
    text: {
      default: text('Text', 'Enable performance measuring in production, at the user\'s request')
    }
  },
  template: `
    <comment :username="username" :text="text" />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
