import Badge from './Badge.vue'
import { COLORS } from '../../enums/colors'
import { SIZES } from '../../enums/sizes'
import { BurgerIcon } from '../../components/svg/'

export default {
  component: Badge,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  title: 'Components/Badge',
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
  components: { Badge },
  setup() {
    //👇 The args will now be passed down to the template
    return { args }
  },
  template: `<Badge v-bind="args" > ${args.text} </Badge>`,
})

export const Default = Template.bind({})
Default.args = defaultArgs

export const Tile = (args) => ({
  components: { Badge },
  setup() {
    return { args }
  },
  template: `
    <Badge > Badge Default </Badge>
    <Badge tile > Badge Tile </Badge>
  `,
})
export const Icon = (args) => ({
  components: { Badge, BurgerIcon },
  setup() {
    return { args }
  },
  template: `
    <Badge> Badge Default </Badge>
    <Badge> 
      <BurgerIcon/>

      <span> Burger </span>
    </Badge>
  `,
})

export const Sizes = (args) => ({
  components: { Badge },
  setup() {
    return { args }
  },
  template: `<Badge v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']" :key="size" :size="size" >
                Badge {{size}}
            </Badge>`,
})
export const Colors = (args) => ({
  components: { Badge },
  setup() {
    const colors = COLORS
    return { args, colors }
  },
  template: `<Badge v-for="color in colors" :key="color" :color="color" >
                Badge {{color}}
            </Badge>`,
})
