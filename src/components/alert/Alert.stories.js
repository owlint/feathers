import OAlert from './OAlert.vue'
import { COLORS } from '../../enums/colors'
import { BurgerIcon } from '../../components/svg'

export default {
  component: OAlert,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  title: 'Components/OAlert',
  decorators: [
    () => ({
      template:
        '<div class="of-flex of-items-center of-gap-8 of-flex-wrap "><story/></div>',
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
  components: { OAlert },
  setup() {
    //👇 The args will now be passed down to the template
    return { args }
  },
  template: `<OAlert v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = defaultArgs

export const Icon = (args) => ({
  components: { OAlert, BurgerIcon },
  setup() {
    return { args }
  },
  template: `
            <OAlert isIcon v-bind="args" >
              <template #icon>
                <BurgerIcon/>
              </template>
            </OAlert>
            `,
})
Icon.args = {
  title: 'Alert Icon Title',
}
export const Action = (args) => ({
  components: { OAlert, BurgerIcon },
  setup() {
    return { args }
  },
  template: `
            <OAlert title="Alert Action Title" action="Action" v-bind="args" />
            <OAlert loading title="Alert Action Loading Title" action="Action"  v-bind="args" />
            `,
})

export const Description = (args) => ({
  components: { OAlert, BurgerIcon },
  setup() {
    return { args }
  },
  template: `
            <OAlert title="Alert Description Title" v-bind="args" />
            <OAlert isIcon title="Alert Description Icon Title" v-bind="args" >
                <template #icon>
                    <BurgerIcon/>
                </template>
            </OAlert>
            <OAlert  title="Alert Description Action Title" action="Action" @click="" v-bind="args" />
            <OAlert  title="Alert Custom Description Action Title" action="Action" @click="" :description="true">
              <template #description>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet perspiciatis,
              reiciendis eos ullam voluptates inventore deleniti! Distinctio reiciendis facilis voluptates,
              eaque, eius tempore debitis labore earum similique facere minima molestiae. (to customize with anything)</template>
            </OAlert>
            `,
})
Description.args = {
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet perspiciatis, reiciendis eos ullam voluptates inventore deleniti! Distinctio reiciendis facilis voluptates, eaque, eius tempore debitis labore earum similique facere minima molestiae.',
}

export const Colors = (args) => ({
  components: { OAlert, BurgerIcon },
  setup() {
    const colors = COLORS
    return { args, colors }
  },
  template: `<div class="of-space-y-8 of-w-full">
                <OAlert color="red" isIcon action="Action" title="Error Alert" loading v-bind="args">
                <template #icon>
                        <BurgerIcon/>
                    </template>
                </OAlert>
                <OAlert color="orange" isIcon action="Action" title="Warning Alert" loading v-bind="args">
                <template #icon>
                        <BurgerIcon/>
                    </template>
                </OAlert>
                <OAlert color="green" isIcon action="Action" title="Success Alert" loading v-bind="args">
                <template #icon>
                        <BurgerIcon/>
                    </template>
                </OAlert>
                <OAlert color="indigo" isIcon action="Action" title="Info_Owlint Alert" loading v-bind="args">
                <template #icon>
                        <BurgerIcon/>
                    </template>
                </OAlert>
                <OAlert color="purple" isIcon action="Action" title="Info_Pandora Alert" loading v-bind="args">
                <template #icon>
                        <BurgerIcon/>
                    </template>
                </OAlert>
                <OAlert color="rose" isIcon action="Action" title="Nicouleur Alert" loading v-bind="args">
                <template #icon>
                        <BurgerIcon/>
                    </template>
                </OAlert>
            </div>`,
})
Colors.args = {
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet perspiciatis, reiciendis eos ullam voluptates inventore deleniti! Distinctio reiciendis facilis voluptates, eaque, eius tempore debitis labore earum similique facere minima molestiae.',
}
