<template>
  <article class="project-item">
    <project-user :name="username" :src="avatar" :alt="Avatar" />
    <slot name="content" />
    <toggler @toggle="toggle" class="project-item__toggler" />
    <div class="comments" v-if="shown">
      <ul class="comments__list">
        <li class="comments-item" v-for="comment in project.comments" :key="comment.id">
          <comment :text="comment.text" :username="comment.name" />
        </li>
      </ul>
    </div>
    <time class="comments__date" :datetime="projectDate" >{{ projectDate }}</time>
  </article>
</template>

<script>
import { format } from 'date-fns'
import { projectUser } from '../projectUser'
import { toggler } from '../toggler'
import { comment } from '../comment'
export default {
  name: 'projectItem',
  components: {
    projectUser,
    toggler,
    comment
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
    }
  },
  data () {
    return {
      shown: false
    }
  },
  computed: {
    projectDate () {
      return format(new Date(this.date), 'd MMMM')
    }
  },
  methods: {
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style lang="scss" scoped src="./projectItem.scss" />
