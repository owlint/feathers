import { COLORS } from '../enums/colors'
import Button from './Button.vue'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    color: {
      control: { type: 'select' },
      options: COLORS,
    },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
}

const Template = (args) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: '<Button v-bind="args" />',
})

export const Base = Template.bind({})
Base.args = {
  type: 'primary',
  label: 'Button',
}

export const Types = (args) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template:
    '<div class="space-x-2"><Button label="Button" type="primary" /><Button label="Button" type="secondary" /><Button label="Button" type="tertiary" /></div>',
})

export const Disabled = (args) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template:
    '<div class="space-x-2"><Button disabled label="Button" type="primary" /><Button disabled label="Button" type="secondary" /><Button disabled label="Button" type="tertiary" /></div>',
})

export const Loading = (args) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template:
    '<div class="space-x-2"><Button loading label="Loading button" type="primary" /><Button loading label="Loading button" type="secondary" /><Button loading label="Button" type="tertiary" /></div>',
})

export const Sizes = (args) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template:
    '<div class="space-x-2"><Button label="Button" size="xs" /><Button label="Button" size="sm" /><Button label="Button" size="md"/><Button label="Button" size="lg"/><Button label="Button" size="xl"/></div>',
})

export const Icon = (args) => ({
  components: { Button },
  setup() {
    return { args }
  },
  template: `
  <div class="space-x-2">
    <Button label="Button with icon">
      <template #icon>
        <font-awesome-icon  :icon="['fad', 'burger-cheese']" />
      </template>
    </Button>
    <Button loading label="Button with icon loading">
      <template #icon>
        <font-awesome-icon  :icon="['fad', 'burger-cheese']" />
      </template>
    </Button>
  </div>
  `,
})

export const Colors = (args) => ({
  components: { Button },
  setup() {
    const colors = COLORS
    return { args, colors }
  },
  template: `
    <div class="space-y-4"  v-for="color in colors" :key="color">
      <div class="space-x-2 my-2"><Button :label="color" :color="color" type="primary" /><Button :label="color" :color="color" type="secondary" /><Button :color="color" :label="color" type="tertiary" /></div>
    </div>
  `,
})
