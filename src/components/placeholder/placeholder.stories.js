import { placeholder } from './'

export default {
  title: 'placeholder',
  components: { placeholder }
}

export const defaultView = () => ({
  components: {
    placeholder
  },
  template: `
    <placeholder />
  `
})

defaultView.story = {
  name: 'Стандартный вид'
}

export const doubleParagraphView = () => ({
  components: {
    placeholder
  },
  template: `
    <placeholder :paragraphs="2" />
  `
})

doubleParagraphView.story = {
  name: 'Заглушка с двумя параграфами'
}
