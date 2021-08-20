<template>
  <div class="feeds">
    <topline>
      <template #header>
        <div class="icon">
          <icon name="home" />
        </div>
      </template>
      <template #content>
        <ul class="stories">
          <li class="stories__item" v-for="story in stories" :key="story.id">
            <story-user-item
              :avatar="story.avatar"
              :username="story.username"
              @onPress="handlePress(story.id)"
            />
          </li>
        </ul>
      </template>
    </topline>
    <div class="feeds__content">
      <toggler @onToggle="toggle" />
      <div class="comments" v-if="shown">
        <ul class="comments__list">
         <li class="comments-item" v-for="n in 5" :key="n">
           <comment text="Some text" username="John Doe" />
         </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { topline } from '../../components/topline'
import { toggler } from '../../components/toggler'
import { icon } from '../../icons'
import { storyUserItem } from '../../components/storyUserItem'
import { comment } from '../../components/comment'
import stories from './data.json'
export default {
  name: 'feeds',
  components: {
    topline,
    icon,
    toggler,
    comment,
    storyUserItem
  },
  data () {
    return {
      stories,
      shown: false
    }
  },
  methods: {
    handlePress () {

    },
    toggle (isOpened) {
      this.shown = isOpened
    }
  }
}
</script>

<style lang="scss" scoped>
  .icon {
    width: 50px;
    height: 26px;
    color: red;
  }
</style>
