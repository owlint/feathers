import OModal from './OModal.vue'
import OButton from '../button/OButton.vue'
import { COLORS } from '../../enums/colors'
import { SIZES } from '../../enums/sizes'
import { BurgerIcon } from '../svg'
export default {
  title: 'Components/OModal',
  component: OModal,
  decorators: [
    () => ({
      template: `<div class="flex gap-2 items-center justify-center"><story/></div> `,
    }),
  ],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: COLORS,
    },
    size: {
      control: { type: 'select' },
      options: SIZES,
    },
    hideIcon: {
      type: { name: 'boolean', required: false },
    },
    title: {
      type: { name: 'string', required: false },
    },
    description: {
      type: { name: 'string', required: false },
    },
  },
}

const defaultArgs = {
  title: 'OModal title',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perspiciatis doloremque veritatis facilis velit! Corrupti ea ullam enim facere, sed, commodi adipisci ex quos itaque culpa inventore sapiente asperiores consequuntur.',
}

const Template = (args) => ({
  components: { OModal, OButton },
  data() {
    return {
      displayOModal: false,
    }
  },
  setup() {
    return { args }
  },
  template: `<OButton @click="displayOModal = true" label="Open Dialog"/> 
            <OModal @close="displayOModal = false" :display-OModal="displayOModal" v-bind="args" >
              <template #footer>
                <OButton @click="displayOModal = false" label="Close Dialog"/> 
                <OButton  @click="displayOModal = false" type="tertiary" label="Close"/> 
              </template>
            </OModal>`,
})

export const Base = Template.bind({})
Base.args = defaultArgs

export const Icon = (args) => ({
  components: { OModal, OButton, BurgerIcon },
  data() {
    return {
      displayOModalIcon: false,
      displayOModal: false,
    }
  },
  setup() {
    return { args }
  },
  template: `<OButton @click="displayOModalIcon = true" label="Dialog Icon" color="fuchsia" /> 
            <OModal @close="displayOModalIcon = false" :display-OModal="displayOModalIcon" v-bind="args" >
              <template #icon>
                <BurgerIcon/>
              </template>
              <template #footer>
                <OButton @click="displayOModalIcon = false" color="fuchsia" label="Close Dialog Icon"/> 
                <OButton  @click="displayOModalIcon = false" color="fuchsia" type="tertiary" label="Close"/> 
              </template>
            </OModal>
            <OButton @click="displayOModal = true" label="Dialog No Icon" color="fuchsia" /> 
            <OModal @close="displayOModal = false" :display-OModal="displayOModal" v-bind="args" title="Dialog Without Icon" hide-icon   >
              <template #footer>
                <OButton @click="displayOModal = false" color="fuchsia" label="Close Dialog No Icon"/> 
                <OButton  @click="displayOModal = false" color="fuchsia" type="tertiary" label="Close"/> 
              </template>
            </OModal>
            `,
})
Icon.args = {
  ...defaultArgs,
  title: 'OModal With Icon',
  color: 'fuchsia',
}

export const ColorsIcon = (args) => ({
  components: { OModal, OButton },
  data() {
    return {
      displayOModal: false,
      displayOModalGreen: false,
      displayOModalRed: false,
      displayOModalOrange: false,
    }
  },
  setup() {
    return { args }
  },
  template: `<OButton @click="displayOModal = true" label="Dialog"/> 
            <OModal @close="displayOModal = false" :display-OModal="displayOModal" v-bind="args" >
              <template #footer>
                <OButton @click="displayOModal = false"  label="Close Dialog"/> 
                <OButton  @click="displayOModal = false"  type="tertiary" label="Close"/> 
              </template>
            </OModal>
            <OButton @click="displayOModalGreen = true" label="Dialog Green" color="green" /> 
            <OModal @close="displayOModalGreen = false" color="green" :display-OModal="displayOModalGreen" v-bind="args"  >
              <template #footer>
                <OButton @click="displayOModalGreen = false" color="green" label="Close Dialog"/> 
                <OButton  @click="displayOModalGreen = false" color="green" type="tertiary" label="Close"/> 
              </template>
            </OModal>
            <OButton @click="displayOModalRed = true" label="Dialog Red" color="red" /> 
            <OModal @close="displayOModalRed = false" color="red" :display-OModal="displayOModalRed" v-bind="args"  >
              <template #footer>
                <OButton @click="displayOModalRed = false" color="red" label="Close Dialog "/> 
                <OButton  @click="displayOModalRed = false" color="red" type="tertiary" label="Close"/> 
              </template>
            </OModal>
            <OButton @click="displayOModalOrange = true" label="Dialog Orange" color="orange" /> 
            <OModal @close="displayOModalOrange = false" color="orange" :display-OModal="displayOModalOrange" v-bind="args"  >
              <template #footer>
                <OButton @click="displayOModalOrange = false" color="orange" label="Close Dialog No Icon"/> 
                <OButton  @click="displayOModalOrange = false" color="orange" type="tertiary" label="Close"/> 
              </template>
            </OModal>
            `,
})
ColorsIcon.args = {
  ...defaultArgs,
}

export const Sizes = (args) => ({
  components: { OModal, OButton },
  data() {
    return {
      displayOModal: false,
      displayOModalXs: false,
      displayOModalXl: false,
      displayOModal7xl: false,
    }
  },
  setup() {
    return { args }
  },
  template: `<OButton @click="displayOModal = true" label="Dialog"/> 
            <OModal @close="displayOModal = false" :display-OModal="displayOModal" v-bind="args" >
              <template #footer>
                <OButton @click="displayOModal = false" label="Close Dialog"/> 
                <OButton  @click="displayOModal = false" type="tertiary" label="Close"/> 
              </template>
            </OModal>
            <OButton @click="displayOModalXs = true" label="Dialog xs" /> 
            <OModal @close="displayOModalXs = false" :display-OModal="displayOModalXs" size="xs" v-bind="args"  >
              <template #footer>
                <OButton @click="displayOModalXs = false" label="Close Dialog"/> 
                <OButton  @click="displayOModalXs = false" type="tertiary" label="Close"/> 
              </template>
            </OModal>
            <OButton @click="displayOModalXl = true" label="Dialog xl" /> 
            <OModal @close="displayOModalXl = false" :display-OModal="displayOModalXl" size="xl" v-bind="args"  >
              <template #footer>
                <OButton @click="displayOModalXl = false" label="Close Dialog "/> 
                <OButton  @click="displayOModalXl = false" type="tertiary" label="Close"/> 
              </template>
            </OModal>
            <OButton @click="displayOModal7xl = true" label="Dialog 7xl" /> 
            <OModal @close="displayOModal7xl = false" :display-OModal="displayOModal7xl" size="7xl" v-bind="args"  >
              <template #footer>
                <OButton @click="displayOModal7xl = false" label="Close Dialog No Icon"/> 
                <OButton  @click="displayOModal7xl = false" type="tertiary" label="Close"/> 
              </template>
            </OModal>
            `,
})
Sizes.args = {
  ...defaultArgs,
}
export const Dark = (args) => ({
  components: { OModal, OButton },
  data() {
    return {
      displayOModal: false,
    }
  },
  setup() {
    return { args }
  },
  template: `<div class="dark">
              <OButton @click="displayOModal = true" label="Dialog Dark Mode"/> 
              <OModal class="dark" @close="displayOModal = false" :display-OModal="displayOModal" v-bind="args" >
                <template #footer>
                  <OButton @click="displayOModal = false" label="Close Dialog"/> 
                  <OButton  @click="displayOModal = false" type="tertiary" label="Close"/> 
                </template>
              </OModal>
            </div>
            `,
})
Dark.args = {
  ...defaultArgs,
}
Dark.parameters = {
  backgrounds: {
    values: [{ name: 'nosferatu-900', value: '#373a4d' }],
    default: 'nosferatu-900',
  },
}
