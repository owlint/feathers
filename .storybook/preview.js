import '../src/style.css'
import '../src/fontawesome'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { app } from '@storybook/vue3'

app.component('font-awesome-icon', FontAwesomeIcon)

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    values: [
      { name: 'white', value: '#ffffff' },
      { name: 'slate-100', value: '#f1f5f9' },
      { name: 'nosferatu-800', value: '#373a4d' },
      { name: 'nosferatu-900', value: '#282a36' },
    ],
    default: 'white',
  },
}

export const globalTypes = {
  backgrounds: {
    values: [
      { name: 'white', value: '#ffffff' },
      { name: 'slate-100', value: '#f1f5f9' },
      { name: 'nosferatu-800', value: '#373a4d' },
      { name: 'nosferatu-900', value: '#282a36' },
    ],
    default: 'white',
  },
}

export const decorators = [
  (story, context) => {
    const background = context.globals.backgrounds?.value

    const dark = background === '#373a4d' || background === '#282a36'

    return {
      template: `<div class="${dark ? 'dark' : ''}"><story/></div>`,
    }
  },
]
