import Popper from './Popper.vue'
import Button from './Button.vue'
export default {
  component: Popper,
  excludeStories: /.*Data$/,
  title: 'Components/Popper',
  decorators: [
    () => ({
      template: `<div class="flex items-center justify-center my-8" > <story /></div> `,
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
  components: { Popper, Button },
  setup() {
    return { args }
  },
  template: `<Popper v-bind="args" > 
            <Button label="${args.text}"  color="indigo"/>
            <template #tooltip> ${args.tooltip} </template>
        </Popper>`,
})

export const Base = Template.bind({})
Base.args = defaultArgs

export const Types = (args) => ({
  components: { Popper, Button },
  setup() {
    return { args }
  },
  template: `<div class="flex items-center gap-2">
                <Popper > 
                    <Button label="Default Tooltip"  color="indigo"/>
                    <template #tooltip> Tooltip </template>
                </Popper>
                <Popper :arrow="false"> 
                    <Button label="Tooltip Without arrow"  color="indigo"/>
                    <template #tooltip> Tooltip </template>
                </Popper>
                <Popper :hover="false"> 
                    <Button label="Tooltip Cant hover"  color="indigo"/>
                    <template #tooltip> Tooltip </template>
                </Popper>
                <Popper placement="bottom"> 
                    <Button label="Tooltip Placement" color="indigo"/>
                    <template #tooltip> Tooltip </template>
                </Popper>
                <Popper class="bg-pink-400 dark:bg-buffy-600 text-white dark:text-slate-900" > 
                    <Button label="Tooltip Custom"  color="pink"/>
                    <template #tooltip> Tooltip </template>
                </Popper>
            </div>`,
})

export const Placements = (args) => ({
  components: { Popper, Button },
  setup() {
    return { args }
  },
  template: `<div class="flex items-center gap-2">
                <Popper > 
                    <Button label="Default Placement"  color="indigo"/>
                    <template #tooltip> Tooltip Top </template>
                </Popper>
                <Popper placement="bottom"> 
                    <Button label="Placement Bottom"  color="indigo"/>
                    <template #tooltip> Tooltip Bottom </template>
                </Popper>
                <Popper placement="left"> 
                    <Button label="Placement Left"  color="indigo"/>
                    <template #tooltip> Tooltip Left </template>
                </Popper>
                <Popper placement="right"> 
                    <Button label="Placement Right"  color="indigo"/>
                    <template #tooltip> Tooltip Right </template>
                </Popper>
            </div>`,
})
