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
        user: {
            name: 'joshua_l',
            avatar: 'https://picsum.photos/300/300'
        },
        projectName: 'Vue.js',
        description: 'JavaScript framework for building interactive web applications ⚡',
        stars: 156000,
        forks: 4,
        date: 'Wed Sep 23 2020 12:59:15 GMT+0500 (Екатеринбург, стандартное время)',
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
    }]

const projects = array(label, defaultValue)

export const defaultView = () => ({
  components: {
    projectList
  },
  props: {
    projects: {
      default: projects
    }
  },
  template: `
    <project-list :projects="projects" />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
