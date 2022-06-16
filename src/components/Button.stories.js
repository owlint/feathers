import Button from './Button.vue'

// More on default export: https://storybook.js.org/docs/vue/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/vue/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
}

// More on component templates: https://storybook.js.org/docs/vue/writing-stories/introduction#using-args
const Template = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Button },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: '<Button v-bind="args" />',
})

export const Base = Template.bind({})
// More on args: https://storybook.js.org/docs/vue/writing-stories/args
Base.args = {
  type: 'primary',
  label: 'Button',
}

export const Types = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Button },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<div class="space-x-2"><Button label="Button" type="primary" /><Button label="Button" type="secondary" /><Button label="Button" type="tertiary" /></div>',
})

export const Disabled = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Button },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<div class="space-x-2"><Button disabled label="Button" type="primary" /><Button disabled label="Button" type="secondary" /><Button disabled label="Button" type="tertiary" /></div>',
})

export const Loading = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Button },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<div class="space-x-2"><Button loading label="Loading button" type="primary" /><Button loading label="Loading button" type="secondary" /><Button loading label="Button" type="tertiary" /></div>',
})

export const Sizes = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Button },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template:
    '<div class="space-x-2"><Button label="Button" size="xs" /><Button label="Button" size="sm" /><Button label="Button" size="md"/><Button label="Button" size="lg"/><Button label="Button" size="xl"/></div>',
})

export const Icon = (args) => ({
  // Components used in your story `template` are defined in the `components` object
  components: { Button },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    return { args }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
  <div class="space-x-2">
    <Button label="Button with icon">
      <template #icon>
        <font-awesome-icon :icon="['fad', 'burger-cheese']" />
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
  // Components used in your story `template` are defined in the `components` object
  components: { Button },
  // The story's `args` need to be mapped into the template through the `setup()` method
  setup() {
    const colors = [
      'slate',
      'gray',
      'zinc',
      'neutral',
      'stone',
      'red',
      'orange',
      'amber',
      'yellow',
      'lime',
      'green',
      'emerald',
      'teal',
      'cyan',
      'sky',
      'blue',
      'indigo',
      'violet',
      'purple',
      'fuchsia',
      'pink',
      'rose',
    ]
    return { args, colors }
  },
  // And then the `args` are bound to your component with `v-bind="args"`
  template: `
    <div class="space-y-4"  v-for="color in colors" :key="color">
      <div class="space-x-2 my-2"><Button :label="color" :color="color" type="primary" /><Button :label="color" :color="color" type="secondary" /><Button :color="color" :label="color" type="tertiary" /></div>
    </div>
  `,
})
