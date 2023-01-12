import ONotification from './ONotification.vue'
import { COLORS } from '../../enums/colors'

export default {
  title: 'Components/ONotification',
  component: ONotification,
  decorators: [
    () => ({
      template: `<story/>`,
    }),
  ],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: COLORS,
    },
    title: {
      type: { name: 'string', required: false },
    },
    description: {
      type: { name: 'string', required: false },
    },
    type: {
      control: { type: 'select' },
      options: ['warning', 'error', 'success'],
    },
  },
}

const defaultArgs = {
  title: 'ONotification title',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perspiciatis doloremque veritatis facilis velit! Corrupti ea ullam enim facere, sed, commodi adipisci ex quos itaque culpa inventore sapiente asperiores consequuntur.',
}

const Template = (args) => ({
  components: { ONotification },
  data() {
    return {
      displayONotification: false,
    }
  },
  setup() {
    return { args }
  },
  template: `<ONotification v-bind="args" />`,
})

export const Base = Template.bind({})
Base.args = defaultArgs

export const Types = (args) => ({
  components: { ONotification },
  setup() {
    return { args }
  },
  template: ` <div class="of-space-y-4">
                <ONotification v-bind="args" />
                <ONotification type="success" color="green" v-bind="args" />
                <ONotification title="Solo ONotification title" />
                <ONotification type="error" color="red" title="Solo ONotification title" />
              </div>
            `,
})
Types.args = {
  ...defaultArgs,
}

export const Icon = (args) => ({
  components: { ONotification },
  setup() {
    return { args }
  },
  template: ` <div class="of-space-y-4">
                <ONotification type="success" color="green" v-bind="args" />
                <ONotification type="error" color="red" v-bind="args" />
                <ONotification type="warning" color="orange" v-bind="args" />
              </div>
            `,
})
Icon.args = {
  ...defaultArgs,
}
export const Colors = (args) => ({
  components: { ONotification },
  setup() {
    const colors = COLORS
    return { args, colors }
  },
  template: ` <div class="of-space-y-4">
                <ONotification v-for="color in colors" :key="color" type="success" :color="color" v-bind="args" />
              </div>
            `,
})
Colors.args = {
  ...defaultArgs,
}
