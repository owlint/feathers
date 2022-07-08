import '../style.css'
import '../fontawesome'

import Button from './Button.vue'
// export { default as Button } from './Button.vue'
// export { default as Modal } from './Modal.vue'
// export { default as Popper } from './Popper.vue'
// export { default as Badge } from './Badge.vue'
// export { default as Notification } from './Notification.vue'
// export { default as NotificationList } from './NotificationList.vue'
// export { default as Filters } from './Filters.vue'
// export { default as FilterItem } from './FilterItem.vue'

export default {
  install: (app, options) => {
    app.component('Button', Button)
  },
}
