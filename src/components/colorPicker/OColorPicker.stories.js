import OColorPicker from './OColorPicker.vue'

export default {
  title: 'Components/OColorPicker',
  component: OColorPicker,
  decorators: [
    () => ({
      template: '<div class="of-flex of-h-64 "><story/></div>',
    }),
  ],
}

const Template = () => ({
  components: { OColorPicker },
  data() {
    return {
      color: 'slate',
    }
  },
  template: '<OColorPicker v-model="color" />',
})

export const Base = Template.bind({})
