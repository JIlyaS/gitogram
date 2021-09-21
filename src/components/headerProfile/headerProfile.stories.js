import { headerProfile } from './'
import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'headerProfile',
  components: { headerProfile },
  decorators: [withKnobs]
}

export const defaultView = () => ({
  components: {
    headerProfile
  },
  template: `
    <header-profile />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
