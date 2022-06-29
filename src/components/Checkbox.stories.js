import Checkbox from './Checkbox.vue'
import { COLORS } from '../enums/colors'

export default {
  component: Checkbox,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  title: 'Components/CheckboxFilter',
  decorators: [() => ({ template: '<div class="flex"><story/></div>' })],
  argTypes: {
    color: {
      options: COLORS,
      control: { type: 'select' },
    },
    value: {
      type: { name: 'string', required: true },
    },
    name: {
      type: { name: 'string', required: true },
    },
    id: {
      type: { name: 'string', required: true },
    },
    modelValue: {
      type: { name: 'array', required: true },
    },
    tooltipValue: {
      type: { name: 'string', required: true },
    },
  },
}
const defaultArgs = {
  color: 'indigo',
  value: 'default',
  name: 'name',
  id: 'storybook-id',
  modelValue: [],
  tooltipValue: 'Burgir',
}

const Template = (args) => ({
  components: { Checkbox },
  setup() {
    return { args }
  },
  template: `<Checkbox v-bind="args" >
            <font-awesome-icon
                class="rounded-full p-1"
                :icon="['fad', 'burger-cheese']"
            />
        </Checkbox>`,
})

export const Default = Template.bind({})
Default.args = defaultArgs
