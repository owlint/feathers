import Popper from './Popper.vue'

import { registerComponent } from '../../utils/plugins'

export default {
  install(app) {
    registerComponent(app, Popper)
  },
}

export { Popper as Popper }
