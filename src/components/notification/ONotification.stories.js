import ONotification from './ONotification.vue'
import { COLORS } from '../../enums/colors'
import { BurgerIcon } from '../svg'

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

export const Exit = (args) => ({
  components: { ONotification, BurgerIcon },
  setup() {
    return { args }
  },
  template: ` <div class="of-space-y-4">
                <ONotification color="green" title='With description' :description='args.description' >
       
                </ONotification>
                <ONotification color="green" title='Without description' >
      
                </ONotification>

                <ONotification canExit color="green" title='With description with exit button' :description='args.description' >

                </ONotification>
                <ONotification canExit color="green" title='Without description with exit button' >

                </ONotification>
              </div>
            `,
})
Exit.args = {
  ...defaultArgs,
}

export const Icon = (args) => ({
  components: { ONotification, BurgerIcon },
  setup() {
    return { args }
  },
  template: ` <div class="of-space-y-4">
                <ONotification isIcon color="green" title='With description' :description='args.description' >
                <template #icon>
                  <BurgerIcon/>
                </template>
                </ONotification>
                <ONotification isIcon color="green" title='Without description' >
                <template #icon>
                  <BurgerIcon/>
                </template>
                </ONotification>

                <ONotification isIcon canExit color="green" title='With description with exit button' :description='args.description' >
                <template #icon>
                  <BurgerIcon/>
                </template>
                </ONotification>
                <ONotification isIcon canExit color="green" title='Without description with exit button' >
                <template #icon>
                  <BurgerIcon/>
                </template>
                </ONotification>
              </div>
            `,
})
Icon.args = {
  ...defaultArgs,
}
export const Colors = (args) => ({
  components: { ONotification, BurgerIcon },
  setup() {
    const colors = COLORS
    return { args, colors }
  },
  template: ` <div class="of-space-y-4">
                <ONotification isIcon canExit v-for="color in colors" :key="color" :color="color" v-bind="args">
                <template #icon>
                  <BurgerIcon/>
                </template>
                </ONotification>
              </div>
            `,
})
Colors.args = {
  ...defaultArgs,
}
