import Notification from './Notification.vue'

import { registerComponent } from '../../utils/plugins'

export default {
  install(app) {
    registerComponent(app, Notification)
  },
}

export { Notification as Notification }
