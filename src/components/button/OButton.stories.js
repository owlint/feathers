import { COLORS } from '../../enums/colors'
import { BurgerIcon, EyeIcon } from '../svg'
import OButton from './OButton.vue'

export default {
  title: 'Components/OButton',
  component: OButton,
  tags: ['autodocs'],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: COLORS,
    },
    onClick: {},
    size: {
      control: { type: 'select' },
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
    type: {
      control: { type: 'select' },
      options: ['primary', 'secondary', 'tertiary'],
    },
  },
}

const Template = (args) => ({
  components: { OButton },
  setup() {
    return { args }
  },
  template: '<OButton v-bind="args" />',
})

export const Base = Template.bind({})
Base.args = {
  type: 'primary',
  label: 'OButton',
}

export const Types = (args) => ({
  components: { OButton },
  setup() {
    return { args }
  },
  template: `
    <div class="of-flex of-gap-2 of-flex-wrap of-items-center">
      <OButton label="Button" type="primary" />
      <OButton label="Button" type="secondary" />
      <OButton label="Button" type="tertiary" />
    </div>
  `,
})

export const Disabled = (args) => ({
  components: { OButton },
  setup() {
    return { args }
  },
  template: `
    <div class="of-flex of-gap-2 of-flex-wrap of-items-center">
      <OButton disabled label="Button" type="primary" />
      <OButton disabled label="Button" type="secondary" />
      <OButton disabled label="Button" type="tertiary" />
    </div>
  `,
})

export const Loading = (args) => ({
  components: { OButton },
  setup() {
    return { args }
  },
  template: `
    <div class="of-flex of-gap-2 of-flex-wrap of-items-center">
      <OButton loading label="Loading button" type ="primary" />
      <OButton loading label="Loading button" type= "secondary" />
      <OButton loading label="Loading Button" type= "tertiary" />
    </div>
  `,
})

export const Sizes = (args) => ({
  components: { OButton },
  setup() {
    return { args }
  },
  template: `
    <div class="of-flex of-gap-2 of-flex-wrap of-items-center">
      <OButton label="Button" size="xs" />
      <OButton label="Button" size="sm" />
      <OButton label="Button" size="md"/>
      <OButton label="Button" size="lg"/>
      <OButton label="Button" size="xl"/>
    </div>
  `,
})

export const Icon = (args) => ({
  components: { OButton, BurgerIcon, EyeIcon },
  setup() {
    return { args }
  },
  template: `
  <div class="of-flex of-gap-2 of-flex-wrap of-items-center">
    <OButton label="Button with icon on the left">
      <template #iconLeft>
        <BurgerIcon/>
      </template>
    </OButton>

    <OButton label="Button with icon on both sides">
      <template #iconLeft>
        <BurgerIcon/>
      </template>
      <template #iconRight>
        <EyeIcon/>
      </template>
    </OButton>
    
    <OButton label="Button with icon on the right">
      <template #iconRight>
        <BurgerIcon/>
      </template>
    </OButton>

    <OButton>
      <template #iconRight>
        <BurgerIcon/>
      </template>
    </OButton>

    <OButton>
      <template #iconRight>
        <EyeIcon/>
      </template>
    </OButton>
  </div>
  `,
})

export const Colors = (args) => ({
  components: { OButton },
  setup() {
    const colors = COLORS
    return { args, colors }
  },
  template: `
    <div class="of-flex of-gap-2 of-flex-wrap of-items-center"  v-for="color in colors" :key="color">
      <div class="of-flex of-gap-2 of-flex-wrap of-items-center of-my-2">
        <OButton :label="color" :color="color" type="primary" />
        <OButton :label="color" :color="color" type="secondary" />
        <OButton :label="color" :color="color" type="tertiary" />
      </div>
    </div>
  `,
})
