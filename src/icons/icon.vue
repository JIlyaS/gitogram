<template>
  <component :is="name" />
</template>

<script>
import * as icons from './variants'
export default {
  name: 'Icon',
  components: { ...icons },
  props: {
    name: {
      type: String,
      require: true,
      validator (value) {
        console.log('🚀 ~ file: icon.vue ~ line 15 ~ validator ~ value', value)
        console.log('🚀 ~ file: icon.vue ~ line 17 ~ validator ~ icons', icons)
        return Object.keys(icons).includes(value)
      }
    }
  }
}
</script>
