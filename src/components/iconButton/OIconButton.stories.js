import OIconButton from './OIconButton.vue'
import { BurgerIcon } from '../svg/'
import { COLORS } from '../../enums/colors'
import { SIZES } from '../../enums/sizes'
// import { BurgerIcon } from '../svg'

export default {
  component: OIconButton,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  title: 'Components/OIconButton',
  decorators: [
    () => ({
      template:
        '<div class="of-flex of-items-center of-gap-4 of-flex-wrap "><story/></div>',
    }),
  ],
  argTypes: {
    color: {
      options: COLORS,
      control: { type: 'select' },
    },
    size: {
      options: SIZES,
      control: { type: 'select' },
    },
    tile: {
      type: { name: 'boolean', required: false },
      options: [true, false],
      control: { type: 'inline-radio' },
    },
    loading: {
      type: { name: 'boolean', required: false },
      options: [true, false],
      control: { type: 'inline-radio' },
    },
    disabled: {
      type: { name: 'boolean', required: false },
      options: [true, false],
      control: { type: 'inline-radio' },
    },
    label: {
      type: { name: 'string', required: false },
    },
  },
}

const defaultArgs = {}

const Template = (args) => ({
  components: { OIconButton },
  setup() {
    //👇 The args will now be passed down to the template
    return { args }
  },
  template: `<OIconButton v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = defaultArgs

export const Tile = (args) => ({
  components: { OIconButton },
  setup() {
    return { args }
  },
  template: `
    <OIconButton />
    <OIconButton tile />
  `,
})
export const Icon = (args) => ({
  components: { OIconButton, BurgerIcon },
  setup() {
    return { args }
  },
  template: `
    <OIconButton/>
    <OIconButton>
      <BurgerIcon/>
    </OIconButton>
  `,
})
export const Disabled = (args) => ({
  components: { OIconButton },
  setup() {
    return { args }
  },
  template: `
    <OIconButton/>
    <OIconButton disabled />
    <OIconButton disabled loading/>
  `,
})
export const Loading = (args) => ({
  components: { OIconButton },
  setup() {
    return { args }
  },
  template: `
    <OIconButton/>
    <OIconButton  loading/>
  `,
})

export const Sizes = (args) => ({
  components: { OIconButton },
  setup() {
    const sizes = SIZES

    return { args, sizes }
  },
  template: `<OIconButton v-for="size in sizes" :key="size" :size="size" />`,
})

export const Colors = (args) => ({
  components: { OIconButton },
  setup() {
    const colors = COLORS
    return { args, colors }
  },
  template: `<OIconButton v-for="color in colors" :key="color" :color="color" />`,
})
