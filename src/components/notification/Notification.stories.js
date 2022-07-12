import Notification from './Notification.vue'
import { COLORS } from '../../enums/colors'

export default {
  title: 'Components/Notification',
  component: Notification,
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
  title: 'Notification title',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perspiciatis doloremque veritatis facilis velit! Corrupti ea ullam enim facere, sed, commodi adipisci ex quos itaque culpa inventore sapiente asperiores consequuntur.',
}

const Template = (args) => ({
  components: { Notification },
  data() {
    return {
      displayNotification: false,
    }
  },
  setup() {
    return { args }
  },
  template: `<Notification v-bind="args" />`,
})

export const Base = Template.bind({})
Base.args = defaultArgs

export const Types = (args) => ({
  components: { Notification },
  setup() {
    return { args }
  },
  template: ` <div class="space-y-4">
                <Notification v-bind="args" />
                <Notification type="success" color="green" v-bind="args" />
                <Notification title="Solo Notification title" />
                <Notification type="error" color="red" title="Solo Notification title" />
              </div>
            `,
})
Types.args = {
  ...defaultArgs,
}

export const Icon = (args) => ({
  components: { Notification },
  setup() {
    return { args }
  },
  template: ` <div class="space-y-4">
                <Notification type="success" color="green" v-bind="args" />
                <Notification type="error" color="red" v-bind="args" />
                <Notification type="warning" color="orange" v-bind="args" />
              </div>
            `,
})
Icon.args = {
  ...defaultArgs,
}
export const Colors = (args) => ({
  components: { Notification },
  setup() {
    const colors = COLORS
    return { args, colors }
  },
  template: ` <div class="space-y-4">
                <Notification v-for="color in colors" :key="color" type="success" :color="color" v-bind="args" />
              </div>
            `,
})
Colors.args = {
  ...defaultArgs,
}
