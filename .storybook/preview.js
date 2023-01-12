import '../src/style.css'

import { app } from '@storybook/vue3'

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

    if (dark) {
      document.querySelector('html').classList.add('of-dark')
    } else {
      document.querySelector('html').classList.remove('of-dark')
    }

    return {
      template: `<story/>`,
    }
  },
]
