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
      { name: 'slate-800', value: '#1e293b' },
      { name: 'slate-900', value: '#0f172a' },
    ],
    default: 'white',
  },
}

export const globalTypes = {
  backgrounds: {
    values: [
      { name: 'white', value: '#ffffff' },
      { name: 'slate-100', value: '#f1f5f9' },
      { name: 'slate-800', value: '#1e293b' },
      { name: 'slate-900', value: '#0f172a' },
    ],
    default: 'white',
  },
}

export const decorators = [
  (story, context) => {
    const background = context.globals.backgrounds?.value

    const dark = background === '#1e293b' || background === '#0f172a'

    return {
      template: `<div class="${dark ? 'dark' : ''}"><story/></div>`,
    }
  },
]
