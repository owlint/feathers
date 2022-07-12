import ColorPicker from './ColorPicker.vue'

import { registerComponent } from '../../utils/plugins'

export default {
  install(app) {
    registerComponent(app, ColorPicker)
  },
}

export { ColorPicker as ColorPicker }
