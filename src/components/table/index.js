import Table from './Table.vue'

import { registerComponent } from '../../utils/plugins'

export default {
  install(app) {
    registerComponent(app, Table)
  },
}

export { Table as Table }
