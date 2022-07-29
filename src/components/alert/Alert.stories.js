import Alert from './Alert.vue'
import { COLORS } from '../../enums/colors'
import { BurgerIcon } from '../../components/svg'

export default {
  component: Alert,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  title: 'Components/Alert',
  decorators: [
    () => ({
      template:
        '<div class="flex items-center gap-8 flex-wrap "><story/></div>',
    }),
  ],
  argTypes: {
    color: {
      options: COLORS,
      control: { type: 'select' },
    },
    title: {
      type: { name: 'string', required: false },
    },
    action: {
      type: { name: 'string', required: false },
    },
    description: {
      type: { name: 'string', required: false },
    },
    loading: {
      type: { name: 'boolean', required: false },
    },
  },
}

const defaultArgs = {
  title: 'Alert Default Title',
}

const Template = (args) => ({
  components: { Alert },
  setup() {
    //👇 The args will now be passed down to the template
    return { args }
  },
  template: `<Alert v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = defaultArgs

export const Icon = (args) => ({
  components: { Alert, BurgerIcon },
  setup() {
    return { args }
  },
  template: `
            <Alert isIcon v-bind="args" >
              <template #icon>
                <BurgerIcon/>
              </template>
            </Alert>
            `,
})
Icon.args = {
  title: 'Alert Icon Title',
}
export const Action = (args) => ({
  components: { Alert, BurgerIcon },
  setup() {
    return { args }
  },
  template: `
            <Alert title="Alert Action Title" action="Action" v-bind="args" />
            <Alert loading title="Alert Action Loading Title" action="Action"  v-bind="args" />
            `,
})

export const Description = (args) => ({
  components: { Alert, BurgerIcon },
  setup() {
    return { args }
  },
  template: `
            <Alert title="Alert Description Title" v-bind="args" />
            <Alert isIcon title="Alert Description Icon Title" v-bind="args" >
                <template #icon>
                    <BurgerIcon/>
                </template>
            </Alert>
            <Alert  title="Alert Description Action Title" action="Action" @click="" v-bind="args" />
            `,
})
Description.args = {
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet perspiciatis, reiciendis eos ullam voluptates inventore deleniti! Distinctio reiciendis facilis voluptates, eaque, eius tempore debitis labore earum similique facere minima molestiae.',
}

export const Colors = (args) => ({
  components: { Alert, BurgerIcon },
  setup() {
    const colors = COLORS
    return { args, colors }
  },
  template: `<div class="space-y-8 w-full">
                <Alert v-for="color in colors" isIcon action="Action" title="Alert Color Title" loading :key="color" :color="color" v-bind="args">
                    <template #icon>
                        <BurgerIcon/>
                    </template>
                </Alert>
            </div>`,
})
Colors.args = {
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet perspiciatis, reiciendis eos ullam voluptates inventore deleniti! Distinctio reiciendis facilis voluptates, eaque, eius tempore debitis labore earum similique facere minima molestiae.',
}
