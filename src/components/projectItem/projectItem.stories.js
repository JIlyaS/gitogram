import { projectItem } from './'
import { projectStatistics } from '../projectStatistics'
import { withKnobs, object } from '@storybook/addon-knobs'

import '../projectList/projectList.scss'

export default {
  title: 'projectItem',
  components: { projectItem, projectStatistics },
  decorators: [withKnobs]
}

const label = 'Project'
const defaultValue = {
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
}
const groupId = '0'

const project = object(label, defaultValue, groupId)

export const defaultView = () => ({
  components: {
    projectItem,
    projectStatistics
  },
  props: {
    project: {
      default: project
    }
  },
  template: `
    <project-item :project="project">
      <template #content>
        <div class="project-content">
          <h2 class="project-content__header">{{ project.projectName }}</h2>
          <p class="project-content__paragraph">{{ project.description }}</p>
          <project-statistics :stars="project.stars" :forks="project.forks" />
        </div>
      </template>
    </project-item>
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
