import { COLORS } from '../enums/colors'
import ColorPicker from './ColorPicker.vue'

export default {
  title: 'Components/ColorPicker',
  component: ColorPicker,
  argTypes: {
    modelValue: {
      type: { name: 'string', required: true },
    },
  },
}

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: '<ColorPicker v-bind="args" />',
})

export const Base = Template.bind({})
Base.args = {}
