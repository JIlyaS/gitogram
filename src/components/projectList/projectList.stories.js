import { projectList } from './'
import { withKnobs, array } from '@storybook/addon-knobs'

export default {
  title: 'projectList',
  components: { projectList },
  decorators: [withKnobs]
}

const label = 'ProjectList'
const defaultValue = [{
        id: '0',
        ownder: {
            login: 'joshua_l',
            avatar_url: 'https://picsum.photos/300/300'
        },
        name: 'Vue.js',
        description: 'JavaScript framework for building interactive web applications ⚡',
        stargazers_count: 156000,
        forks: 4,
        updated_date: 'Wed Sep 23 2020 12:59:15 GMT+0500 (Екатеринбург, стандартное время)',
        comments: [
            {
                id: '0',
                name: 'joshua_l',
                text: "Enable performance measuring in production, at the user's request"
            },
            {
                id: '1',
                name: 'Camille',
                text: "It's Impossible to Rename an Inherited Slot"
            },
            {
                id: '2',
                name: 'Marselle',
                text: 'transition-group with flex parent causes removed items to fly'
            }
        ]
    },
    {
        id: '1',
        ownder: {
            login: 'niranda_m',
            avatar_url: 'https://picsum.photos/300/300'
        },
        name: 'react.js',
        description: 'JavaScript framework for building interactive web applications ⚡',
        stargazers_count: 125000,
        forks: 123000,
        updated_date: 'Wed Sep 23 2020 12:59:15 GMT+0500 (Екатеринбург, стандартное время)',
        comments: [
            {
                id: '0',
                name: 'joshua_l',
                text: "Enable performance measuring in production, at the user's request"
            },
            {
                id: '1',
                name: 'Camille',
                text: "It's Impossible to Rename an Inherited Slot"
            },
            {
                id: '2',
                name: 'Marselle',
                text: 'transition-group with flex parent causes removed items to fly'
            }
        ]
    }
  ]

const trendings = array(label, defaultValue)

export const defaultView = () => ({
  components: {
    projectList
  },
  props: {
    trendings: {
      default: trendings
    }
  },
  template: `
    <project-list :trendings="trendings" />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
