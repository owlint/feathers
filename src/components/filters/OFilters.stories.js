import OFilters from './OFilters.vue'
import { COLORS } from '../../enums/colors'

export default {
  component: OFilters,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  title: 'Components/OFilters',
  decorators: [() => ({ template: '<div class="of-flex"><story/></div>' })],
  argTypes: {
    items: {
      type: { name: 'object', required: true },
    },
    label: {
      type: { name: 'string', required: false },
    },
    modelValue: {
      type: { name: 'array', required: true },
    },
  },
}

const defaultArgs = {
  items: {
    type: 'state',
    data: [
      {
        type: 'green-burgir',
        value: 'green-burgir',
        color: 'green',
      },
      {
        type: 'red-burgir',
        value: 'red-burgir',
        color: 'red',
      },
      {
        type: 'indigo-burgir',
        value: 'indigo-burgir',
        color: 'indigo',
      },
    ],
  },
  label: 'Filter',
  modelValue: [],
}

const Template = (args) => ({
  components: { OFilters },
  setup() {
    return { args }
  },
  template: `<OFilters v-bind="args"/>`,
})

export const Default = Template.bind({})
Default.args = defaultArgs
