<template>
  <div class="project-list">
    <div class="container">
      <ul class="project-list__list">
        <li class="project-list__item" v-for="trending in trendings" :key="trending.id">
          <project-item v-bind="getDataTrending(trending)">
            <template #content>
              <div class="project-content">
                <h2 class="project-content__header">{{ trending.name }}</h2>
                <p class="project-content__paragraph">{{ trending.description }}</p>
                <project-statistics :stars="trending.stargazers_count" :forks="trending.forks" />
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
    trendings: {
      type: Array,
      required: true
    }
  },
  methods: {
    getDataTrending (trending) {
      return {
        username: trending.owner?.login || 'no name',
        avatar: trending.owner?.avatar_url || 'https://picsum.photos/300/300',
        date: trending.updated_at || new Date()
      }
    }
  }
}
</script>

<style lang="scss" scoped src="./projectList.scss" />
