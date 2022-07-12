export const registerPlugin = (app, plugin) => {
  app.use(plugin)
}

export const registerComponent = (app, component) => {
  app.component(component.name, component)
}
