import Filters from './Filters.vue'
import { COLORS } from '../enums/colors'

export default {
  component: Filters,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  title: 'Components/Filters',
  decorators: [() => ({ template: '<div class="flex"><story/></div>' })],
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
        icon: 'burger-cheese',
        type: 'green-burgir',
        value: 'green-burgir',
        color: 'green',
      },
      {
        icon: 'burger-cheese',
        type: 'red-burgir',
        value: 'red-burgir',
        color: 'red',
      },
      {
        icon: 'burger-cheese',
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
  components: { Filters },
  setup() {
    return { args }
  },
  template: `<Filters v-bind="args"/>`,
})

export const Default = Template.bind({})
Default.args = defaultArgs
