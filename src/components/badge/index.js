import Badge from './Badge.vue'

import { registerComponent } from '../../utils/plugins'

export default {
  install(app) {
    registerComponent(app, Badge)
  },
}

export { Badge as Badge }
