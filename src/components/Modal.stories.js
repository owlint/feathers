import Modal from './Modal.vue'
import Button from './Button.vue'
import { COLORS } from '../enums/colors'
import { SIZES } from '../enums/sizes'

export default {
  title: 'Components/Modal',
  component: Modal,
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
  title: 'Modal title',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perspiciatis doloremque veritatis facilis velit! Corrupti ea ullam enim facere, sed, commodi adipisci ex quos itaque culpa inventore sapiente asperiores consequuntur.',
}

const Template = (args) => ({
  components: { Modal, Button },
  data() {
    return {
      displayModal: false,
    }
  },
  setup() {
    return { args }
  },
  template: `<Button @click="displayModal = true" label="Open Dialog"/> 
            <Modal @close="displayModal = false" :display-modal="displayModal" v-bind="args" >
              <template #footer>
                <Button @click="displayModal = false" label="Close Dialog"/> 
                <Button  @click="displayModal = false" type="tertiary" label="Close"/> 
              </template>
            </Modal>`,
})

export const Base = Template.bind({})
Base.args = defaultArgs

export const Icon = (args) => ({
  components: { Modal, Button },
  data() {
    return {
      displayModalIcon: false,
      displayModal: false,
    }
  },
  setup() {
    return { args }
  },
  template: `<Button @click="displayModalIcon = true" label="Dialog Icon" color="fuchsia" /> 
            <Modal @close="displayModalIcon = false" :display-modal="displayModalIcon" v-bind="args" >
              <template #icon>
                <font-awesome-icon  :icon="['fad', 'burger-cheese']" />
              </template>
              <template #footer>
                <Button @click="displayModalIcon = false" color="fuchsia" label="Close Dialog Icon"/> 
                <Button  @click="displayModalIcon = false" color="fuchsia" type="tertiary" label="Close"/> 
              </template>
            </Modal>
            <Button @click="displayModal = true" label="Dialog No Icon" color="fuchsia" /> 
            <Modal @close="displayModal = false" :display-modal="displayModal" v-bind="args" title="Dialog Without Icon" hide-icon   >
              <template #footer>
                <Button @click="displayModal = false" color="fuchsia" label="Close Dialog No Icon"/> 
                <Button  @click="displayModal = false" color="fuchsia" type="tertiary" label="Close"/> 
              </template>
            </Modal>
            `,
})
Icon.args = {
  ...defaultArgs,
  title: 'Modal With Icon',
  color: 'fuchsia',
}

export const ColorsIcon = (args) => ({
  components: { Modal, Button },
  data() {
    return {
      displayModal: false,
      displayModalGreen: false,
      displayModalRed: false,
      displayModalOrange: false,
    }
  },
  setup() {
    return { args }
  },
  template: `<Button @click="displayModal = true" label="Dialog"/> 
            <Modal @close="displayModal = false" :display-modal="displayModal" v-bind="args" >
              <template #footer>
                <Button @click="displayModal = false"  label="Close Dialog"/> 
                <Button  @click="displayModal = false"  type="tertiary" label="Close"/> 
              </template>
            </Modal>
            <Button @click="displayModalGreen = true" label="Dialog Green" color="green" /> 
            <Modal @close="displayModalGreen = false" color="green" :display-modal="displayModalGreen" v-bind="args"  >
              <template #footer>
                <Button @click="displayModalGreen = false" color="green" label="Close Dialog"/> 
                <Button  @click="displayModalGreen = false" color="green" type="tertiary" label="Close"/> 
              </template>
            </Modal>
            <Button @click="displayModalRed = true" label="Dialog Red" color="red" /> 
            <Modal @close="displayModalRed = false" color="red" :display-modal="displayModalRed" v-bind="args"  >
              <template #footer>
                <Button @click="displayModalRed = false" color="red" label="Close Dialog "/> 
                <Button  @click="displayModalRed = false" color="red" type="tertiary" label="Close"/> 
              </template>
            </Modal>
            <Button @click="displayModalOrange = true" label="Dialog Orange" color="orange" /> 
            <Modal @close="displayModalOrange = false" color="orange" :display-modal="displayModalOrange" v-bind="args"  >
              <template #footer>
                <Button @click="displayModalOrange = false" color="orange" label="Close Dialog No Icon"/> 
                <Button  @click="displayModalOrange = false" color="orange" type="tertiary" label="Close"/> 
              </template>
            </Modal>
            `,
})
ColorsIcon.args = {
  ...defaultArgs,
}

export const Sizes = (args) => ({
  components: { Modal, Button },
  data() {
    return {
      displayModal: false,
      displayModalXs: false,
      displayModalXl: false,
      displayModal7xl: false,
    }
  },
  setup() {
    return { args }
  },
  template: `<Button @click="displayModal = true" label="Dialog"/> 
            <Modal @close="displayModal = false" :display-modal="displayModal" v-bind="args" >
              <template #footer>
                <Button @click="displayModal = false" label="Close Dialog"/> 
                <Button  @click="displayModal = false" type="tertiary" label="Close"/> 
              </template>
            </Modal>
            <Button @click="displayModalXs = true" label="Dialog xs" /> 
            <Modal @close="displayModalXs = false" :display-modal="displayModalXs" size="xs" v-bind="args"  >
              <template #footer>
                <Button @click="displayModalXs = false" label="Close Dialog"/> 
                <Button  @click="displayModalXs = false" type="tertiary" label="Close"/> 
              </template>
            </Modal>
            <Button @click="displayModalXl = true" label="Dialog xl" /> 
            <Modal @close="displayModalXl = false" :display-modal="displayModalXl" size="xl" v-bind="args"  >
              <template #footer>
                <Button @click="displayModalXl = false" label="Close Dialog "/> 
                <Button  @click="displayModalXl = false" type="tertiary" label="Close"/> 
              </template>
            </Modal>
            <Button @click="displayModal7xl = true" label="Dialog 7xl" /> 
            <Modal @close="displayModal7xl = false" :display-modal="displayModal7xl" size="7xl" v-bind="args"  >
              <template #footer>
                <Button @click="displayModal7xl = false" label="Close Dialog No Icon"/> 
                <Button  @click="displayModal7xl = false" type="tertiary" label="Close"/> 
              </template>
            </Modal>
            `,
})
Sizes.args = {
  ...defaultArgs,
}
export const Dark = (args) => ({
  components: { Modal, Button },
  data() {
    return {
      displayModal: false,
    }
  },
  setup() {
    return { args }
  },
  template: `<div class="dark">
              <Button @click="displayModal = true" label="Dialog Dark Mode"/> 
              <Modal class="dark" @close="displayModal = false" :display-modal="displayModal" v-bind="args" >
                <template #footer>
                  <Button @click="displayModal = false" label="Close Dialog"/> 
                  <Button  @click="displayModal = false" type="tertiary" label="Close"/> 
                </template>
              </Modal>
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
