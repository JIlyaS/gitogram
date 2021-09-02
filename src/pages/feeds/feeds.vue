<template>
  <div class="feeds">
    <topline>
      <template #header>
        <logo />
        <header-profile />
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories__item" v-for="story in stories" :key="story.id">
            <story-user-item
              :src="story.avatar"
              :name="story.username"
              @onPress="handlePress(story.id)"
            />
          </li>
        </ul>
      </template>
    </topline>
    <div class="feeds__content">
      <project-list :projects="projects" />
    </div>
  </div>
</template>

<script>
import { topline } from '../../components/topline'
import { storyUserItem } from '../../components/storyUserItem'
import { logo } from '../../components/logo'
import stories from './data.json'
import projects from './projects-data.json'
import { headerProfile } from '../../components/headerProfile'
import { projectList } from '../../components/projectList'
import * as api from '../../api'
export default {
  name: 'feeds',
  components: {
    topline,
    logo,
    storyUserItem,
    headerProfile,
    projectList
  },
  async created () {
    try {
      const { data } = await api.trandings.getTrendings()
      this.projects = data.items
    } catch (error) {
      console.error(error)
    }
  },
  data () {
    return {
      stories,
      projects
    }
  }
}
</script>

<style lang="scss" scoped src="./feeds.scss"></style>
