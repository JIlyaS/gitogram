import { projectStatistics } from './'
import { withKnobs, number } from '@storybook/addon-knobs'

export default {
  title: 'projectStatistics',
  components: { projectStatistics },
  decorators: [withKnobs]
}

export const defaultView = () => ({
  components: {
    projectStatistics
  },
  props: {
    stars: {
      default: number('Stars', '156')
    },
    forks: {
      default: number('Forks', '4')
    }
  },
  template: `
    <project-statistics :stars="stars" :forks="forks" />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
