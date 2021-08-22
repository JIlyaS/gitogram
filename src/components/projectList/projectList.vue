<template>
  <div class="project-list">
    <div class="container">
      <ul class="project-list__list">
        <li class="project-list__item" v-for="project in projects" :key="project.id">
          <project-item :project="project">
            <template #content>
              <div class="project-content">
                <h2 class="project-content__header">{{ project.projectName }}</h2>
                <p class="project-content__paragraph">{{ project.description }}</p>
                <project-statistics :stars="project.stars" :forks="project.forks" />
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
  }
}
</script>

<style lang="scss" scoped src="./projectList.scss" />
