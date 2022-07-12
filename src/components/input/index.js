import Input from './Input.vue'

import { registerComponent } from '../../utils/plugins'

export default {
  install(app) {
    registerComponent(app, Input)
  },
}

export { Input as Input }
