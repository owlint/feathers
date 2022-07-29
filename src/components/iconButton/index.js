import IconButton from './IconButton.vue'

import { registerComponent } from '../../utils/plugins'

export default {
  install(app) {
    registerComponent(app, IconButton)
  },
}

export { IconButton as IconButton }
