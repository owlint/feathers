import FilterItem from './FilterItem.vue'
import { COLORS } from '../../enums/colors'

export default {
  component: FilterItem,
  //👇 Our exports that end in "Data" are not stories.
  excludeStories: /.*Data$/,
  title: 'Components/FilterItem',
  decorators: [() => ({ template: '<div class="flex"><story/></div>' })],
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
  components: { FilterItem },
  setup() {
    return { args }
  },
  template: `<FilterItem v-bind="args" >
            <font-awesome-icon
                :icon="['fad', 'burger-cheese']"
            />
        </FilterItem>`,
})

export const Default = Template.bind({})
Default.args = defaultArgs

export const Types = (args) => ({
  components: { FilterItem },
  setup() {
    return { args }
  },
  template: `<div class="flex gap-4 flex-wrap">
              <FilterItem v-bind="args" >
                  <font-awesome-icon
                      :icon="['fad', 'burger-cheese']"
                  />
              </FilterItem>
              <FilterItem v-bind="args" >
                <div class=" flex items-center gap-2">
                  <font-awesome-icon
                      :icon="['fad', 'burger-cheese']"
                  />
                  <span class="text-xs">With Text</span>
                </div>
              </FilterItem>
              <FilterItem tile v-bind="args" >
                <div class=" flex items-center gap-2">
                  <font-awesome-icon
                      :icon="['fad', 'burger-cheese']"
                  />
                  <span class="text-xs">Tile</span>
                </div>
              </FilterItem>
              <FilterItem v-bind="args" :modelValue="['Burgir']">
                <div class=" flex items-center gap-2">
                  <font-awesome-icon
                      :icon="['fad', 'burger-cheese']"
                  />
                  <span class="text-xs">Active</span>
                </div>
              </FilterItem>
            </div>`,
})
Types.args = defaultArgs

export const Colors = (args) => ({
  components: { FilterItem },
  setup() {
    const colors = COLORS
    return { args, colors }
  },
  template: `<div class="space-y-4">
              <div v-for="color in colors" :key="color" class="flex gap-4">
                <FilterItem  :color="color" v-bind="args">
                  <font-awesome-icon
                    :icon="['fad', 'burger-cheese']"
                  />
                </FilterItem>
                <FilterItem  :color="color" v-bind="args" :modelValue="['Burgir']">
                  <font-awesome-icon
                    :icon="['fad', 'burger-cheese']"
                  />
                </FilterItem>
              </div>
            </div>`,
})
Colors.args = defaultArgs
