import FilterItem from './FilterItem.vue'

import { registerComponent } from '../../utils/plugins'

export default {
  install(app) {
    registerComponent(app, FilterItem)
  },
}

export { FilterItem as FilterItem }
