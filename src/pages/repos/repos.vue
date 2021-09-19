<template>
  <div class="repos">
    <topline>
      <template #header>
        <logo />
        <header-profile :avatar="avatar" :username="username" />
      </template>
      <template #content>
        <ul class="stories-user">
          <li class="stories-user__item" v-for="trending in trendings" :key="trending.id">
            <story-user-item
              :src="trending.owner.avatar_url"
              :name="trending.owner.login"
              @onPress="handlePress(trending.id)"
            />
          </li>
        </ul>
      </template>
    </topline>
    <div class="repos__content">
      <project-list :trendings="trendings" />
    </div>
  </div>
</template>

<script>
import {
  mapState,
  mapActions,
  mapGetters
} from 'vuex'
import { topline } from '../../components/topline'
import { storyUserItem } from '../../components/storyUserItem'
import { logo } from '../../components/logo'
import { headerProfile } from '../../components/headerProfile'
import { projectList } from '../../components/projectList'

export default {
  name: 'repos',
  components: {
    topline,
    logo,
    storyUserItem,
    headerProfile,
    projectList
  },
  data () {
    return {
      avatar: JSON.parse(localStorage.getItem('user')).avatar_url,
      username: JSON.parse(localStorage.getItem('user')).login
    }
  },
  async created () {
    this.fetchTrendings()
  },
  computed: {
    ...mapState({
      trendings: state => state.trendings.trendings
    }),
    ...mapGetters(['getUnsterredOnly'])
  },
  methods: {
    ...mapActions({
      fetchTrendings: 'trendings/fetchTrendings'
    }),
    handlePress (id) {
      this.$router.push({ name: 'stories', params: { initialSlide: id } })
    }
  }
}
</script>

<style lang="scss" scoped src="./repos.scss"></style>
