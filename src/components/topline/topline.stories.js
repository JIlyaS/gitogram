import { topline } from './'
import { storyUserItem } from '../storyUserItem'
import { logo } from '../logo'
import stories from '../../pages/repos/data.json'
import projects from '../../pages/repos/projects-data.json'
import { headerProfile } from '../headerProfile'
import { projectList } from '../projectList'
import { withKnobs } from '@storybook/addon-knobs'

import '../logo/logo.scss'
import '../headerProfile/headerProfile.scss'
import '../storyUserItem/storyUserItem.scss'
import '../../pages/repos/repos.scss'

export default {
  title: 'topline',
  components: { topline },
  decorators: [withKnobs]
}

export const defaultView = () => ({
  components: {
    topline,
    logo,
    storyUserItem,
    headerProfile,
    projectList
  },
  data () {
    return {
      stories,
      projects
    }
  },
  template: `
    <topline>
      <template #header>
          <logo />
          <header-profile />
        </template>
        <template #content>
          <ul class="stories-user">
            <li class="stories-user__item" v-for="story in stories" :key="story.id">
              <story-user-item
                :src="story.avatar"
                :name="story.username"
                @onPress="handlePress(story.id)"
              />
            </li>
          </ul>
        </template>
    </topline>
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}
