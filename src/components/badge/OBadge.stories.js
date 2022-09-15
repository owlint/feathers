import OBadge from './OBadge.vue'
import { COLORS } from '../../enums/colors'
import { SIZES } from '../../enums/sizes'
import { BurgerIcon } from '../svg'

export default {
  component: OBadge,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  title: 'Components/OBadge',
  decorators: [
    () => ({
      template:
        '<div class="flex items-center gap-4 flex-wrap "><story/></div>',
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
    text: {
      type: { name: 'string', required: true },
      description: 'Contenu du composant',
    },
  },
}

const defaultArgs = {
  text: 'Badge',
}

const Template = (args) => ({
  components: { OBadge },
  setup() {
    //👇 The args will now be passed down to the template
    return { args }
  },
  template: `<OBadge v-bind="args" > ${args.text} </OBadge>`,
})

export const Default = Template.bind({})
Default.args = defaultArgs

export const Tile = (args) => ({
  components: { OBadge },
  setup() {
    return { args }
  },
  template: `
    <OBadge > Badge Default </OBadge>
    <OBadge tile > Badge Tile </OBadge>
  `,
})
export const Icon = (args) => ({
  components: { OBadge, BurgerIcon },
  setup() {
    return { args }
  },
  template: `
    <OBadge> Badge Default </OBadge>
    <OBadge> 
      <BurgerIcon/>

      <span> Burger </span>
    </OBadge>
  `,
})

export const Sizes = (args) => ({
  components: { OBadge },
  setup() {
    return { args }
  },
  template: `<OBadge v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']" :key="size" :size="size" >
                Badge {{size}}
            </OBadge>`,
})
export const Colors = (args) => ({
  components: { OBadge },
  setup() {
    const colors = COLORS
    return { args, colors }
  },
  template: `<OBadge v-for="color in colors" :key="color" :color="color" >
                Badge {{color}}
            </OBadge>`,
})
