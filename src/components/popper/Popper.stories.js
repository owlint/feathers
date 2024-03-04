import OPopper from './OPopper.vue'
import OButton from '../button/OButton.vue'
import { COLORS } from '../../enums/colors'

export default {
  component: OPopper,
  excludeStories: /.*Data$/,
  title: 'Components/OPopper',
  decorators: [
    () => ({
      template: `<div class="of-flex of-items-center of-justify-center of-my-8" > <story /></div> `,
    }),
  ],
  argTypes: {
    text: {
      type: { name: 'string', required: true },
    },
    tooltip: {
      type: { name: 'string', required: true },
    },
    arrow: {
      type: { name: 'boolean' },
    },
    hover: {
      type: { name: 'boolean' },
    },
    placement: {
      control: { type: 'select' },
      options: ['top', 'bottom', 'left', 'right'],
    },
  },
}
const defaultArgs = {
  text: 'Hover me !',
  tooltip: 'Tooltip',
}

const Template = (args) => ({
  components: { OPopper, OButton },
  setup() {
    return { args }
  },
  template: `<OPopper v-bind="args" > 
            <OButton label="${args.text}"  color="indigo"/>
            <template #tooltip> ${args.tooltip} </template>
        </OPopper>`,
})

export const Base = Template.bind({})
Base.args = defaultArgs

export const Types = (args) => ({
  components: { OPopper, OButton },
  setup() {
    return { args }
  },
  template: `<div class="of-flex of-items-center of-gap-2">
                <OPopper > 
                    <OButton label="Default Tooltip"  color="indigo"/>
                    <template #tooltip> Tooltip </template>
                </OPopper>
                <OPopper :arrow="false"> 
                    <OButton label="Tooltip Without arrow"  color="indigo"/>
                    <template #tooltip> Tooltip </template>
                </OPopper>
                <OPopper :hover="false"> 
                    <OButton label="Tooltip Cant hover"  color="indigo"/>
                    <template #tooltip> Tooltip </template>
                </OPopper>
                <OPopper placement="bottom"> 
                    <OButton label="Tooltip Placement" color="indigo"/>
                    <template #tooltip> Tooltip </template>
                </OPopper>
            </div>`,
})

export const Placements = (args) => ({
  components: { OPopper, OButton },
  setup() {
    return { args }
  },
  template: `<div class="of-flex of-items-center of-gap-2">
                <OPopper > 
                    <OButton label="Default Placement"  color="indigo"/>
                    <template #tooltip> Tooltip Top </template>
                </OPopper>
                <OPopper placement="bottom"> 
                    <OButton label="Placement Bottom"  color="indigo"/>
                    <template #tooltip> Tooltip Bottom </template>
                </OPopper>
                <OPopper placement="left"> 
                    <OButton label="Placement Left"  color="indigo"/>
                    <template #tooltip> Tooltip Left </template>
                </OPopper>
                <OPopper placement="right"> 
                    <OButton label="Placement Right"  color="indigo"/>
                    <template #tooltip> Tooltip Right </template>
                </OPopper>
            </div>`,
})

export const Colors = (args) => ({
  components: { OPopper, OButton },
  setup() {
    const colors = COLORS
    return { args, colors }
  },
  template: `<div class="of-space-y-8 of-w-full">
                <OPopper v-for="(color, index) in colors" :color="color" v-bind="args">
                  <OButton :color="color">
                    Tooltip {{color}}
                  </OButton>
                  <template #tooltip> Tooltip {{color}} </template>
                </OPopper>
            </div>`,
})
