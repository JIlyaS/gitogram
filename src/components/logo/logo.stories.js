import { logo } from './'
import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'logo',
  components: { logo },
  decorators: [withKnobs]
}

export const defaultView = () => ({
  components: {
    logo
  },
  template: `
    <logo />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
