import OInput from './OInput.vue'
import { BurgerIcon } from '../svg'
import { COLORS } from '../../enums/colors'

export default {
  component: OInput,
  title: 'Components/OInput',
  argTypes: {
    id: {
      type: { name: 'string', required: true },
    },
    modelValue: {
      type: { name: 'string', required: true },
    },
    label: {
      type: { name: 'string', required: false },
    },
    placeholder: {
      type: { name: 'string', required: false },
    },
    isIcon: {
      type: { name: 'boolean', required: false },
    },
    type: {
      type: { name: 'string', required: true },
      options: ['text', 'submit', 'button', 'number', 'email', 'password'],
      control: { type: 'select' },
    },
    color: {
      type: { name: 'string', required: false },
      control: { type: 'select' },
      options: COLORS,
    },
  },
}

const defaultArgs = {
  id: 'storybook-OInput',
  label: 'Label',
  placeholder: 'Placeholder',
  modelValue: '',
}

const Template = (args) => ({
  components: { OInput },
  setup() {
    return { args }
  },
  template: `<OInput v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = defaultArgs

export const Icon = (args) => ({
  components: { OInput, BurgerIcon },
  setup() {
    return { args }
  },
  template: `
    <OInput v-bind="args" >
        <template #icon>
          <BurgerIcon/>
        </template>
    </OInput>
  `,
})
Icon.args = {
  ...defaultArgs,
  id: 'storybook-OInput-icon',
  modelValue: '',
  isIcon: true,
}

export const Loading = (args) => ({
  components: { OInput, BurgerIcon },
  setup() {
    return { args }
  },
  template: `
  <div class="space-y-4">
    <OInput label="No loading" placeholder="No Loading" id="id-no-loading-storybook" v-bind="args"/>
    <OInput loading label="Loading" placeholder="Loading" id="id-loading-storybook" v-bind="args"/>
    <OInput isIcon loading label="Loading w/ Icon" placeholder="Loading Icon" id="id-loading-icon-storybook" v-bind="args">
      <template #icon>
        <BurgerIcon/>
      </template>
    </OInput>
  </div>
  `,
})
Loading.args = {
  modelValue: '',
}

export const Colors = (args) => ({
  components: { OInput, BurgerIcon },
  setup() {
    const colors = COLORS
    return { args, colors }
  },
  template: `
    <OInput isIcon v-for="color in colors" :key="color" :color="color" :label="color" :id="color" v-bind="args" >
    <template #icon>
          <BurgerIcon/>
        </template>
    </OInput>
  `,
})
Colors.args = {
  type: 'text',
  placeholder: 'Placeholder',
  modelValue: '',
}

export const Type = (args) => ({
  components: { OInput },
  data() {
    return {
      button: 'Button',
      submit: 'Submit',
      text: 'some text',
      number: 10,
      email: 'email@owlint.fr',
      password: 'password1234',
    }
  },
  setup() {
    return { args }
  },
  template: `
  <div class="space-y-4">
    <OInput type="text" label="Text" v-model="text" id="id-text-storybook"/>
    <OInput type="number" label="Number" v-model="number" id="id-number-storybook"/>
    <OInput type="email" label="Email" v-model="email" id="id-email-storybook"/>
    <OInput type="password" label="Password" v-model="password" id="id-password-storybook"/>
    <OInput type="submit" v-model="submit" id="id-submit-storybook"/>
    <OInput type="button" v-model="button" id="id-button-storybook"/>
  </div>
  `,
})
