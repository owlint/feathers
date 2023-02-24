import OColorPicker from './OColorPicker.vue'

export default {
  title: 'Components/OColorPicker',
  component: OColorPicker,
  decorators: [
    () => ({
      template:
        '<div class="of-flex of-items-center of-justify-center of-h-72"><story/></div>',
    }),
  ],
  argTypes: {
    placement: {
      options: ['bottom-right', 'bottom-left', 'top-left', 'top-right'],
      control: { type: 'select' },
    },
  },
}

const defaultArgs = {
  placement: 'bottom-left',
}

const Template = (args) => ({
  components: { OColorPicker },
  data() {
    return {
      color: 'slate',
    }
  },
  setup() {
    return { args }
  },
  template: '<OColorPicker v-model="color" v-bind="args" />',
})

export const Base = Template.bind({})
Base.args = defaultArgs

export const Placement = () => ({
  components: { OColorPicker },
  data() {
    return {
      color: 'slate',
    }
  },
  template: `
  <div class="of-flex of-items-center of-justify-center of-gap-8 of-w-full">
  <OColorPicker v-model="color" />
  <OColorPicker v-model="color" placement="bottom-right" />
  <OColorPicker v-model="color" placement="top-left" />
  <OColorPicker v-model="color" placement="top-right" />
  </div>
  `,
})
