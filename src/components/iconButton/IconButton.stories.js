import IconButton from './IconButton.vue'
import { COLORS } from '../../enums/colors'
import { BurgerIcon } from '../../components/svg'

export default {
  component: IconButton,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  title: 'Components/IconButton',
  decorators: [
    () => ({
      template:
        '<div class="flex items-center gap-2 flex-wrap "><story/></div>',
    }),
  ],
  argTypes: {
    color: {
      options: COLORS,
      control: { type: 'select' },
    },
    label: {
      type: { name: 'string', required: false },
    },
    disabled: {
      type: { name: 'boolean', required: false },
    },
    tile: {
      type: { name: 'boolean', required: false },
    },
    loading: {
      type: { name: 'boolean', required: false },
    },
  },
}

const defaultArgs = {
  label: 'IconButton Default',
}

const Template = (args) => ({
  components: { IconButton, BurgerIcon },
  setup() {
    //👇 The args will now be passed down to the template
    return { args }
  },
  template: `<IconButton v-bind="args"> 
                <BurgerIcon/>
            </IconButton>`,
})

export const Default = Template.bind({})
Default.args = defaultArgs

export const Disabled = (args) => ({
  components: { IconButton, BurgerIcon },
  setup() {
    return { args }
  },
  template: `
            <IconButton v-bind="args"> 
                <BurgerIcon/>
            </IconButton>
            <IconButton disabled v-bind="args"> 
                <BurgerIcon/>
            </IconButton>
            `,
})
Disabled.args = defaultArgs

export const Tile = (args) => ({
  components: { IconButton, BurgerIcon },
  setup() {
    return { args }
  },
  template: `
            <IconButton v-bind="args"> 
                <BurgerIcon/>
            </IconButton>
            <IconButton tile v-bind="args"> 
                <BurgerIcon/>
            </IconButton>
            `,
})
Tile.args = defaultArgs

export const Loading = (args) => ({
  components: { IconButton, BurgerIcon },
  setup() {
    return { args }
  },
  template: `
            <IconButton v-bind="args"> 
                <BurgerIcon/>
            </IconButton>
            <IconButton loading v-bind="args"> 
                <BurgerIcon/>
            </IconButton>
            `,
})
Loading.args = defaultArgs

export const Colors = (args) => ({
  components: { IconButton, BurgerIcon },
  setup() {
    const colors = COLORS
    return { args, colors }
  },
  template: `<div class="gap-4 flex flex-wrap">
                <IconButton v-for="color in colors" :color="color" :key="color" v-bind="args"> 
                    <BurgerIcon/>
                </IconButton>
                <IconButton v-for="color in colors" loading :color="color" :key="color" v-bind="args"> 
                    <BurgerIcon/>
                </IconButton>
                <IconButton v-for="color in colors" disabled :color="color" :key="color" v-bind="args"> 
                    <BurgerIcon/>
                </IconButton>
            </div>`,
})
Colors.args = defaultArgs
