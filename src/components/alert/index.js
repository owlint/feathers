import Alert from './Alert.vue'

import { registerComponent } from '../../utils/plugins'

export default {
  install(app) {
    registerComponent(app, Alert)
  },
}

export { Alert as Alert }
