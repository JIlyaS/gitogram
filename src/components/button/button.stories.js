import { button } from './'
import { withKnobs } from '@storybook/addon-knobs'

export default {
  title: 'button',
  components: { button },
  decorators: [withKnobs]
  // argTypes: {
  //   hoverText: {
  //     control: { type: 'text' }
  //   }
  // }
}

// const template = (args) => ({
//   components: {
//     cButton: button
//   },
//   data () {
//     return { args }
//   },
//   template: `
//     <c-button v-bind="args" class="button--follow">Follow</c-button>
//   `
// })

// export const Default = template.bind({})

// Default.args = {
//   hoverText: 'Unfollow'
// }

export const defaultView = () => ({
  components: {
    cButton: button
  },
  template: `
    <c-button v-bind="args" class="button--follow">Follow</c-button>
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
