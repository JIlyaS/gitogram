import { toggler } from './'

export default {
  title: 'toggler',
  components: { toggler }
}

export const defaultView = () => ({
  components: {
    toggler
  },
  template: `
    <avatar />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
