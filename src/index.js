import * as components from './components'

import { setVueInstance, registerPlugin } from './utils/config'

const Feathers = {
  install(app) {
    setVueInstance(app)
    // Components
    for (const componentKey in components) {
      registerPlugin(app, components[componentKey])
    }
  },
}

export default Feathers

export * from './components'
