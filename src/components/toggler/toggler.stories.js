import { toggler } from './'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

const methods = {
  onToggle: action('onToggle')
}

export default {
  title: 'toggler',
  components: { toggler },
  decorators: [withKnobs]
}

export const defaultView = () => ({
  components: {
    toggler
  },
  template: `
    <toggler @toggle="onToggle" />
  `,
  methods
})

defaultView.story = {
  name: 'Стандартный вид'
}
