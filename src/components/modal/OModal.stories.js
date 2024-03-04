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
      template: `<div class="of-flex of-gap-2 of-items-center of-justify-center"><story/></div> `,
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
      displayModal: false,
    }
  },
  setup() {
    return { args }
  },
  template: `<OButton @click="displayModal = true" label="Open Dialog"/> 
            <OModal @close="displayModal = false" :display-modal="displayModal" v-bind="args" >
              <template #footer>
                <OButton @click="displayModal = false" label="Close Dialog"/> 
                <OButton  @click="displayModal = false" type="tertiary" label="Close"/> 
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
      displayModal: false,
    }
  },
  setup() {
    return { args }
  },
  template: `<OButton @click="displayOModalIcon = true" label="Dialog Icon" color="fuchsia" /> 
            <OModal @close="displayOModalIcon = false" :display-modal="displayOModalIcon" v-bind="args" >
              <template #icon>
                <BurgerIcon/>
              </template>
              <template #footer>
                <OButton @click="displayOModalIcon = false" color="fuchsia" label="Close Dialog Icon"/> 
                <OButton  @click="displayOModalIcon = false" color="fuchsia" type="tertiary" label="Close"/> 
              </template>
            </OModal>
            <OButton @click="displayModal = true" label="Dialog No Icon" color="fuchsia" /> 
            <OModal @close="displayModal = false" :display-modal="displayModal" v-bind="args" title="Dialog Without Icon" hide-icon   >
              <template #footer>
                <OButton @click="displayModal = false" color="fuchsia" label="Close Dialog No Icon"/> 
                <OButton  @click="displayModal = false" color="fuchsia" type="tertiary" label="Close"/> 
              </template>
            </OModal>
            `,
})
Icon.args = {
  ...defaultArgs,
  title: 'OModal With Icon',
  color: 'fuchsia',
}

export const Content = (args) => ({
  components: { OModal, OButton, BurgerIcon },
  data() {
    return {
      displayModalContent: false,
      displayModal: false,
    }
  },
  setup() {
    return { args }
  },
  template: `<OButton @click="displayModal = true" label="Open Dialog"/> 
            <OModal @close="displayModal = false" :display-modal="displayModal"  v-bind="args" title="OModal default">
              <template #footer>
                <OButton @click="displayModal = false" label="Close Dialog"/> 
                <OButton  @click="displayModal = false" type="tertiary" label="Close"/> 
              </template>
            </OModal>
            <OButton @click="displayModalContent = true" label="Open Dialog Content"/> 
            <OModal @close="displayModalContent = false" :display-modal="displayModalContent" v-bind="args" content>
            </OModal>
            `,
})
Content.args = {
  ...defaultArgs,
  title: 'OModal With Content',
  color: 'indigo',
}

export const Sizes = (args) => ({
  components: { OModal, OButton },
  data() {
    return {
      displayModal: false,
      displayOModalXs: false,
      displayOModalXl: false,
      displayOModal7xl: false,
    }
  },
  setup() {
    return { args }
  },
  template: `<OButton @click="displayModal = true" label="Dialog"/> 
            <OModal @close="displayModal = false" :display-modal="displayModal" v-bind="args" >
              <template #footer>
                <OButton @click="displayModal = false" label="Close Dialog"/> 
                <OButton  @click="displayModal = false" type="tertiary" label="Close"/> 
              </template>
            </OModal>
            <OButton @click="displayOModalXs = true" label="Dialog xs" /> 
            <OModal @close="displayOModalXs = false" :display-modal="displayOModalXs" size="xs" v-bind="args"  >
              <template #footer>
                <OButton @click="displayOModalXs = false" label="Close Dialog"/> 
                <OButton  @click="displayOModalXs = false" type="tertiary" label="Close"/> 
              </template>
            </OModal>
            <OButton @click="displayOModalXl = true" label="Dialog xl" /> 
            <OModal @close="displayOModalXl = false" :display-modal="displayOModalXl" size="xl" v-bind="args"  >
              <template #footer>
                <OButton @click="displayOModalXl = false" label="Close Dialog "/> 
                <OButton  @click="displayOModalXl = false" type="tertiary" label="Close"/> 
              </template>
            </OModal>
            <OButton @click="displayOModal7xl = true" label="Dialog 7xl" /> 
            <OModal @close="displayOModal7xl = false" :display-modal="displayOModal7xl" size="7xl" v-bind="args"  >
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

export const ColorsIcon = (args) => ({
  components: { OModal, OButton },
  data() {
    return {
      displayModal: {
        slate: false,
        gray: false,
        zinc: false,
        neutral: false,
        stone: false,
        red: false,
        orange: false,
        amber: false,
        yellow: false,
        lime: false,
        green: false,
        emerald: false,
        teal: false,
        cyan: false,
        sky: false,
        blue: false,
        indigo: false,
        violet: false,
        purple: false,
        fuchsia: false,
        pink: false,
        rose: false,
      },
    }
  },
  setup() {
    const colors = COLORS
    return { args, colors }
  },
  template: `
            <div class="of-flex of-gap-2 of-flex-wrap of-items-center">
            <div class=""  v-for="color in colors" :key="color">
                      <OButton @click="displayModal[color] = true" :color='color'>
                      Dialog {{color}}
                      </OButton>
                      <OModal @close="displayModal[color] = false" :color='color' :display-modal="displayModal[color]" v-bind="args" >
                        <template #footer>
                          <OButton @click="displayModal[color] = false" :color='color' label="Close Dialog"/> 
                          <OButton  @click="displayModal[color] = false" :color='color' type="tertiary" label="Close"/> 
                        </template>
                      </OModal>
                  </div>
            </div>`,
})
ColorsIcon.args = {
  ...defaultArgs,
}
