<template>
  <div class="repos">
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
    <div class="repos__content">
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
  name: 'repos',
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
  },
  methods: {
    handlePress () {
      this.$router.push('/stories')
    }
  }
}
</script>

<style lang="scss" scoped src="./repos.scss"></style>
