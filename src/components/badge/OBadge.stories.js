import OBadge from './OBadge.vue'
import { COLORS } from '../../enums/colors'
import { SIZES } from '../../enums/sizes'
import { BurgerIcon, EyeIcon, CrossIcon } from '../svg'

export default {
  component: OBadge,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  title: 'Components/OBadge',
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
  },
}

const Template = (args) => ({
  components: { OBadge },
  setup() {
    //👇 The args will now be passed down to the template
    return { args }
  },
  template: `<OBadge v-bind="args" >`,
})

export const Base = Template.bind({})
Base.args = {
  label: 'OBadge',
}

export const Tile = (args) => ({
  components: { OBadge },
  setup() {
    return { args }
  },
  template: `
    <OBadge label="Badge Default"></OBadge>
    <OBadge tile label="Badge Tile"></OBadge>
    <OBadge label="Badge Default" is-clickable @action="action"></OBadge>
    <OBadge tile label="Badge Tile" is-clickable @action="action"></OBadge>
    
  `,
})
export const Icon = (args) => ({
  components: { OBadge, BurgerIcon, EyeIcon, CrossIcon },
  setup() {
    const action = () => {
      console.log('oui')
    }
    return { args, action }
  },
  template: `
    <OBadge label="Badge Default"></OBadge>
    
    <OBadge label="Burger on the left">
      <template #iconLeft>
        <BurgerIcon/>
      </template>
    </OBadge>
    <OBadge label="Eye on the right">
      <template #iconRight>
        <EyeIcon/>
      </template>
    </OBadge>

     <OBadge label="Badge with icons on both sides">
      <template #iconLeft>
        <BurgerIcon/>
      </template>
      <template #iconRight>
        <EyeIcon/>
      </template>
    </OBadge>

     <OBadge label="Burger on the left" is-clickable @action="action">
      <template #iconLeft>
        <BurgerIcon/>
      </template>
    </OBadge>
    <OBadge label="Eye on the right" is-clickable @action="action">
      <template #iconRight>
        <EyeIcon/>
      </template>
    </OBadge>

     <OBadge label="Badge with icons on both sides" is-clickable @action="action">
      <template #iconLeft>
        <BurgerIcon/>
      </template>
      <template #iconRight>
        <EyeIcon/>
      </template>
    </OBadge>
    
  `,
})

export const Sizes = (args) => ({
  components: { OBadge },
  setup() {
    return { args }
  },
  template: `<div class="of-flex of-gap-2 of-items-center" >
                <OBadge v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']" :key="size" :size="size">
                  Badge {{size}}
                </OBadge>
            </div>
            <div class="of-flex of-gap-2 of-items-center" >
            <OBadge v-for="size in ['xs', 'sm', 'md', 'lg', 'xl']" :key="size" :size="size" is-clickable @action="action">
                Badge {{size}}
            </OBadge>
            </div>
            `,
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
