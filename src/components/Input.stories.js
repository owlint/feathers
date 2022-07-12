import Input from './Input.vue'
import { COLORS } from '../enums/colors'

export default {
  component: Input,
  title: 'Components/Input',
  argTypes: {
    id: {
      type: { name: 'string', required: true },
    },
    modelValue: {
      type: { name: 'string', required: true },
    },
    label: {
      type: { name: 'string', required: false },
    },
    placeholder: {
      type: { name: 'string', required: false },
    },
    isIcon: {
      type: { name: 'boolean', required: false },
    },
    type: {
      type: { name: 'string', required: true },
      options: ['text', 'submit', 'button', 'number', 'email', 'password'],
      control: { type: 'select' },
    },
  },
}

// const defaultArgs = {
//   id: 'storybook-input',
//   type: 'text',
//   label: 'Label',
//   placeholder: 'Placeholder',
//   modelValue: '',
// }

const Template = (args) => ({
  components: { Input },
  setup() {
    return { args }
  },
  template: `<Input v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = {
  id: 'storybook-input',
  // type: 'text',
  label: 'Label',
  placeholder: 'Placeholder',
  modelValue: '',
}

export const Icon = (args) => ({
  components: { Input },
  setup() {
    return { args }
  },
  template: `
    <Input v-bind="args" >
        <template #icon>
          <font-awesome-icon  :icon="['fad', 'burger-cheese']" />
        </template>
    </Input>
  `,
})
Icon.args = {
  id: 'storybook-input-icon',
  type: 'text',
  label: 'Label',
  placeholder: 'Placeholder',
  modelValue: '',
  isIcon: true,
}

export const Colors = (args) => ({
  components: { Input },
  setup() {
    const colors = COLORS
    return { args, colors }
  },
  template: `
    <Input v-for="color in colors" :key="color" :color="color" :label="color" :id="color" v-bind="args" >
    </Input>
  `,
})
Colors.args = {
  type: 'text',
  placeholder: 'Placeholder',
  modelValue: '',
}
