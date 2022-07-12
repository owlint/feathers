import ColorPicker from './ColorPicker.vue'

export default {
  title: 'Components/ColorPicker',
  component: ColorPicker,
  decorators: [
    () => ({
      template: '<div class="flex h-64 "><story/></div>',
    }),
  ],
}

const Template = () => ({
  components: { ColorPicker },
  data() {
    return {
      color: 'slate',
    }
  },
  template: '<ColorPicker v-model="color" />',
})

export const Base = Template.bind({})
