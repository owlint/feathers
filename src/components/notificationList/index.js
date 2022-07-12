import NotificationList from './NotificationList.vue'

import { registerComponent } from '../../utils/plugins'

export default {
  install(app) {
    registerComponent(app, NotificationList)
  },
}

export { NotificationList as NotificationList }
