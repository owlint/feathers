import Modal from './Modal.vue'

import { registerComponent } from '../../utils/plugins'

export default {
  install(app) {
    registerComponent(app, Modal)
  },
}

export { Modal as Modal }
