export let VueInstance

export const setVueInstance = (Vue) => {
  VueInstance = Vue
}
export const registerPlugin = (app, plugin) => {
  app.use(plugin)
}

export const Plugin = {
  install(Vue, options = {}) {
    setVueInstance(Vue)
  },
}
