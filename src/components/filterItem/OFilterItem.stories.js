import OFilterItem from './OFilterItem.vue'
import { COLORS } from '../../enums/colors'
import { BurgerIcon } from '../svg'

export default {
  component: OFilterItem,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  title: 'Components/OFilterItem',
  decorators: [() => ({ template: '<div class="of-flex"><story/></div>' })],
  argTypes: {
    color: {
      options: COLORS,
      control: { type: 'select' },
    },
    value: {
      type: { name: 'string', required: true },
    },
    name: {
      type: { name: 'string', required: true },
    },
    id: {
      type: { name: 'string', required: true },
    },
    modelValue: {
      type: { name: 'array', required: true },
    },
    tile: {
      type: { name: 'boolean', required: false },
    },
  },
}
const defaultArgs = {
  value: 'Burgir',
  name: 'Burgir',
  id: 'storybook-id',
  modelValue: [],
}

const Template = (args) => ({
  components: { OFilterItem, BurgerIcon },
  setup() {
    return { args }
  },
  template: `<OFilterItem v-bind="args" >
            <BurgerIcon/>
        </OFilterItem>`,
})

export const Default = Template.bind({})
Default.args = defaultArgs

export const Types = (args) => ({
  components: { OFilterItem, BurgerIcon },
  setup() {
    return { args }
  },
  template: `<div class="of-flex of-gap-4 of-flex-wrap">
              <OFilterItem v-bind="args" >
                <BurgerIcon/>
              </OFilterItem>
              <OFilterItem v-bind="args" >
                <div class=" of-flex of-items-center of-gap-2">
                  <BurgerIcon/>
                  <span class="of-text-xs">With Text</span>
                </div>
              </OFilterItem>
              <OFilterItem tile v-bind="args" >
                <div class=" of-flex of-items-center of-gap-2">
                  <BurgerIcon/>
                  <span class="of-text-xs">Tile</span>
                </div>
              </OFilterItem>
              <OFilterItem v-bind="args" :modelValue="['Burgir']">
                <div class=" of-flex of-items-center of-gap-2">
                  <BurgerIcon/>
                  <span class="of-text-xs">Active</span>
                </div>
              </OFilterItem>
            </div>`,
})
Types.args = defaultArgs

export const Colors = (args) => ({
  components: { OFilterItem, BurgerIcon },
  setup() {
    const colors = COLORS
    return { args, colors }
  },
  template: `<div class="of-space-y-4">
              <div v-for="color in colors" :key="color" class="of-flex of-gap-4">
                <OFilterItem  :color="color" v-bind="args">
                  <BurgerIcon/>
                </OFilterItem>
                <OFilterItem  :color="color" v-bind="args" :modelValue="['Burgir']">
                  <BurgerIcon/>
                </OFilterItem>
              </div>
            </div>`,
})
Colors.args = defaultArgs
