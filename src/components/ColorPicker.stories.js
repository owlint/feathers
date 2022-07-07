import { COLORS } from '../enums/colors'
import ColorPicker from './ColorPicker.vue'

export default {
  title: 'Components/ColorPicker',
  component: ColorPicker,
  decorators: [
    () => ({
      template: '<div class="flex h-64 "><story/></div>',
    }),
  ],
  argTypes: {
    modelValue: {
      type: { name: 'string', required: true },
    },
  },
}

const Template = (args) => ({
  components: { ColorPicker },
  setup() {
    return { args }
  },
  template: '<ColorPicker v-bind="args" />',
})

export const Base = Template.bind({})
Base.args = {
  modelValue: 'blue',
}
