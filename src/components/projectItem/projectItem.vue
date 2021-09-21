<template>
  <article class="project-item">
    <project-user :name="username" :src="avatar" :alt="Avatar" />
    <slot name="content" />
    <toggler @toggle="toggle" class="project-item__toggler" />
      <div v-if="loading">
        <placeholder isText />
      </div>
      <div class="comments" v-else-if="!loading && shown">
        <ul class="comments__list">
          <li class="comments-item" v-for="issue in issues" :key="issue.id">
            <comment :text="issue.title" :username="issue?.user?.login" />
          </li>
        </ul>
      </div>
    <time class="comments__date" :datetime="projectDate" >{{ projectDate }}</time>
  </article>
</template>

<script>
import { mapActions, mapState, mapGetters } from 'vuex'
import { format } from 'date-fns'
import * as api from '../../api'
import { projectUser } from '../projectUser'
import { toggler } from '../toggler'
import { comment } from '../comment'
import { placeholder } from '../placeholder'
export default {
  name: 'projectItem',
  components: {
    projectUser,
    toggler,
    comment,
    placeholder
  },
  props: {
    username: {
      type: String,
      required: true
    },
    avatar: {
      type: String,
      required: true
    },
    date: {
      type: Date,
      required: true
    },
    id: {
      type: Number,
      required: true
    }
  },
  data () {
    return {
      shown: false,
      loading: false,
      issues: [],
      loadedIssues: false
    }
  },
  computed: {
    ...mapState({
      loadingIssues: state => state.trendings.loadingIssues,
      issues: state => state.trendings.issues
    }),
    ...mapGetters('trendings', ['getRepoById']),
    projectDate () {
      return format(new Date(this.date), 'd MMMM')
    }
  },
  methods: {
    ...mapActions({
      fetchIssues: 'trendings/fetchIssues'
    }),
    async toggle (isOpened) {
      if (isOpened && !this.loadedIssues) {
        await this.loadIssues()
      }
      this.shown = isOpened
    },

    async loadIssues () {
      const { name: repo, owner } = this.getRepoById(this.id)
      this.loading = true
      try {
        const { data } = await api.trendings.getIssues({ owner: owner.login, repo })
        this.issues = data
        this.loadedIssues = true
      } catch (err) {
        console.error(err)
        throw err
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style lang="scss" scoped src="./projectItem.scss" />
