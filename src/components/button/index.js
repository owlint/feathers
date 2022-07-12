import Button from './Button.vue'

import { registerComponent } from '../../utils/plugins'

export default {
  install(app) {
    registerComponent(app, Button)
  },
}

export { Button as Button }
