import Input from './Input.vue'
import { BurgerIcon } from '../../components/svg/'
import { COLORS } from '../../enums/colors'

export default {
  component: Input,
  title: 'Components/Input',
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
  id: 'storybook-input',
  label: 'Label',
  placeholder: 'Placeholder',
  modelValue: '',
}

const Template = (args) => ({
  components: { Input },
  setup() {
    return { args }
  },
  template: `<Input v-bind="args" />`,
})

export const Default = Template.bind({})
Default.args = defaultArgs

export const Icon = (args) => ({
  components: { Input, BurgerIcon },
  setup() {
    return { args }
  },
  template: `
    <Input v-bind="args" >
        <template #icon>
          <BurgerIcon/>
        </template>
    </Input>
  `,
})
Icon.args = {
  ...defaultArgs,
  id: 'storybook-input-icon',
  modelValue: '',
  isIcon: true,
}

export const Loading = (args) => ({
  components: { Input, BurgerIcon },
  setup() {
    return { args }
  },
  template: `
  <div class="space-y-4">
    <Input label="No loading" placeholder="No Loading" id="id-no-loading-storybook" v-bind="args"/>
    <Input loading label="Loading" placeholder="Loading" id="id-loading-storybook" v-bind="args"/>
    <Input isIcon loading label="Loading w/ Icon" placeholder="Loading Icon" id="id-loading-icon-storybook" v-bind="args">
      <template #icon>
        <BurgerIcon/>
      </template>
    </Input>
  </div>
  `,
})
Loading.args = {
  modelValue: '',
}

export const Colors = (args) => ({
  components: { Input, BurgerIcon },
  setup() {
    const colors = COLORS
    return { args, colors }
  },
  template: `
    <Input isIcon v-for="color in colors" :key="color" :color="color" :label="color" :id="color" v-bind="args" >
    <template #icon>
          <BurgerIcon/>
        </template>
    </Input>
  `,
})
Colors.args = {
  type: 'text',
  placeholder: 'Placeholder',
  modelValue: '',
}

export const Type = (args) => ({
  components: { Input },
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
    <Input type="text" label="Text" v-model="text" id="id-text-storybook"/>
    <Input type="number" label="Number" v-model="number" id="id-number-storybook"/>
    <Input type="email" label="Email" v-model="email" id="id-email-storybook"/>
    <Input type="password" label="Password" v-model="password" id="id-password-storybook"/>
    <Input type="submit" v-model="submit" id="id-submit-storybook"/>
    <Input type="button" v-model="button" id="id-button-storybook"/>
  </div>
  `,
})
