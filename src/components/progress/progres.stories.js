import { progress } from './'
import { action } from '@storybook/addon-actions'
import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'progress',
  components: { progress },
  decorators: [withKnobs]
}

const methods = {
  onFinish: action('onFinish')
}

export const defaultView = () => ({
  components: {
    cProgress: progress
  },
  methods,
  template: `
    <c-progress @finish="onFinish" />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
