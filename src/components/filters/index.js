import Filters from './Filters.vue'

import { registerComponent } from '../../utils/plugins'

export default {
  install(app) {
    registerComponent(app, Filters)
  },
}

export { Filters as Filters }
