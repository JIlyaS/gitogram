import { withKnobs, object } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'
import { storyPostItem } from '.'
import { sliderButton } from '../sliderButton'
import { progress } from '../progress'
import { projectUser } from '../projectUser'
import { button } from '../button'
import { spinner } from '../spinner'
import { placeholder } from '../placeholder'

const methods = {
  onPrevSlide: action('onPrevSlide'),
  onNextSlide: action('onNextSlide'),
  onProgressFinish: action('onProgressFinish')
}

export default {
  title: 'storyPostItem',
  components: {
    storyPostItem,
    sliderButton,
    progress,
    projectUser,
    button,
    spinner,
    placeholder
   },
  decorators: [withKnobs]
}

const label = 'Data'
const defaultValue = {
        username: 'joshua_l',
        avatar: 'https://picsum.photos/300/300',
        content: '<div id="readme" class="md" data-path="README.md"><article class="markdown-body entry-content container-lg" itemprop="text"><h1><a id="user-content-bible-reader" class="anchor" aria-hidden="true" href="#bible-reader"><svg class="octicon octicon-link" viewBox="0 0 16 16" version="1.1" width="16" height="16" aria-hidden="true"><path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path></svg></a>bible-reader</h1><p>This project creates a WhatsApp Robot that reads the Holy Bible.</p></div>'
}
const groupId = '0'

const notContentValue = {
        username: 'joshua_l',
        avatar: 'https://picsum.photos/300/300'
}

const data = object(label, defaultValue, groupId)

const dataNotContent = object(label, notContentValue, groupId)

export const defaultView = () => ({
  components: {
    storyPostItem
  },
  methods,
  props: {
    data: {
      default: data
    }
  },
  template: `
    <story-post-item :btnsShow="['prev', 'next']" :data="data" @onPrevSlide="onPrevSlide" @onNextSlide="onNextSlide" @onProgressFinish="onProgressFinish" />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}

export const activeView = () => ({
  components: {
    storyPostItem
  },
  props: {
    data: {
      default: data
    }
  },
  methods,
  template: `
    <story-post-item active :btnsShow="['prev', 'next']" :data="data" @onPrevSlide="onPrevSlide" @onNextSlide="onNextSlide" @onProgressFinish="onProgressFinish" />
  `
})

activeView.story = {
  name: 'Карточка в активном состоянии'
}

export const loadingView = () => ({
  components: {
    storyPostItem
  },
  props: {
    data: {
      default: data
    }
  },
  methods,
  template: `
    <story-post-item :loading="true" active :btnsShow="['prev', 'next']" :data="data" @onPrevSlide="onPrevSlide" @onNextSlide="onNextSlide" @onProgressFinish="onProgressFinish" />
  `
})

loadingView.story = {
  name: 'Карточка в состоянии загрузки данных'
}

export const notBtnView = () => ({
  components: {
    storyPostItem
  },
  props: {
    data: {
      default: data
    }
  },
  methods,
  template: `
    <story-post-item active :btnsShow="[]" :data="data" @onPrevSlide="onPrevSlide" @onNextSlide="onNextSlide" @onProgressFinish="onProgressFinish" />
  `
})

notBtnView.story = {
  name: 'Карточка без кнопок'
}

export const notContentView = () => ({
  components: {
    storyPostItem
  },
  props: {
    data: {
      default: dataNotContent
    }
  },
  methods,
  template: `
    <story-post-item active :btnsShow="[]" :btnsShow="['prev', 'next']" :data="dataNotContent" @onPrevSlide="onPrevSlide" @onNextSlide="onNextSlide" @onProgressFinish="onProgressFinish" />
  `
})

notContentView.story = {
  name: 'Карточка без данных'
}
