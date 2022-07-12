import Modal from './Modal.vue'
import Button from '../button/Button.vue'
import { COLORS } from '../../enums/colors'
import { SIZES } from '../../enums/sizes'

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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                  class="w-6 h-6"
                >
                  <path
                    class="fa-primary"
                    d="M481.9 270.1C490.9 279.1 496 291.3 496 304C496 316.7 490.9 328.9 481.9 337.9C472.9 346.9 460.7 352 448 352H64C51.27 352 39.06 346.9 30.06 337.9C21.06 328.9 16 316.7 16 304C16 291.3 21.06 279.1 30.06 270.1C39.06 261.1 51.27 256 64 256H224L320 320L416 256H448C460.7 256 472.9 261.1 481.9 270.1z"
                    fill="currentColor"
                  />
                  <path
                    class="fa-secondary opacity-40"
                    d="M50.39 220.8C45.93 218.6 42.03 215.5 38.97 211.6C35.91 207.7 33.79 203.2 32.75 198.4C31.71 193.5 31.8 188.5 32.99 183.7C54.98 97.02 146.5 32 256 32C365.5 32 457 97.02 479 183.7C480.2 188.5 480.3 193.5 479.2 198.4C478.2 203.2 476.1 207.7 473 211.6C469.1 215.5 466.1 218.6 461.6 220.8C457.2 222.9 452.3 224 447.3 224H64.67C59.73 224 54.84 222.9 50.39 220.8zM372.7 116.7C369.7 119.7 368 123.8 368 128C368 131.2 368.9 134.3 370.7 136.9C372.5 139.5 374.1 141.6 377.9 142.8C380.8 143.1 384 144.3 387.1 143.7C390.2 143.1 393.1 141.6 395.3 139.3C397.6 137.1 399.1 134.2 399.7 131.1C400.3 128 399.1 124.8 398.8 121.9C397.6 118.1 395.5 116.5 392.9 114.7C390.3 112.9 387.2 111.1 384 111.1C379.8 111.1 375.7 113.7 372.7 116.7V116.7zM244.7 84.69C241.7 87.69 240 91.76 240 96C240 99.16 240.9 102.3 242.7 104.9C244.5 107.5 246.1 109.6 249.9 110.8C252.8 111.1 256 112.3 259.1 111.7C262.2 111.1 265.1 109.6 267.3 107.3C269.6 105.1 271.1 102.2 271.7 99.12C272.3 96.02 271.1 92.8 270.8 89.88C269.6 86.95 267.5 84.45 264.9 82.7C262.3 80.94 259.2 79.1 256 79.1C251.8 79.1 247.7 81.69 244.7 84.69V84.69zM116.7 116.7C113.7 119.7 112 123.8 112 128C112 131.2 112.9 134.3 114.7 136.9C116.5 139.5 118.1 141.6 121.9 142.8C124.8 143.1 128 144.3 131.1 143.7C134.2 143.1 137.1 141.6 139.3 139.3C141.6 137.1 143.1 134.2 143.7 131.1C144.3 128 143.1 124.8 142.8 121.9C141.6 118.1 139.5 116.5 136.9 114.7C134.3 112.9 131.2 111.1 128 111.1C123.8 111.1 119.7 113.7 116.7 116.7L116.7 116.7zM475.3 388.7C478.3 391.7 480 395.8 480 400V416C480 432.1 473.3 449.3 461.3 461.3C449.3 473.3 432.1 480 416 480H96C79.03 480 62.75 473.3 50.75 461.3C38.74 449.3 32 432.1 32 416V400C32 395.8 33.69 391.7 36.69 388.7C39.69 385.7 43.76 384 48 384H464C468.2 384 472.3 385.7 475.3 388.7zM320 320L224 256H416L320 320z"
                    fill="currentColor"
                  />
                </svg>
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
