<template>
  <div class="project-list">
    <div class="container">
      <ul class="project-list__list">
        <li class="project-list__item" v-for="project in projects" :key="project.id">
          <project-item v-bind="getDataProject(project)">
            <template #content>
              <div class="project-content">
                <h2 class="project-content__header">{{ project.name }}</h2>
                <p class="project-content__paragraph">{{ project.description }}</p>
                <project-statistics :stars="project.stargazers_count" :forks="project.forks" />
              </div>
            </template>
          </project-item>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { projectItem } from '../projectItem'
import { projectStatistics } from '../projectStatistics'
export default {
  name: 'projectList',
  components: {
    projectItem,
    projectStatistics
  },
  props: {
    projects: {
      type: Array,
      required: true
    }
  },
  methods: {
    getDataProject (project) {
      return {
        username: project.owner?.login || 'no name',
        avatar: project.owner?.avatar_url || 'https://picsum.photos/300/300',
        date: project.updated_at || new Date()
      }
    }
  }
}
</script>

<style lang="scss" scoped src="./projectList.scss" />
