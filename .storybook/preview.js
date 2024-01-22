import '../src/style.css'

/** @type { import('@storybook/vue3').Preview } */
const preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
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
  },
  globalTypes: {
    backgrounds: {
      values: [
        { name: 'white', value: '#ffffff' },
        { name: 'slate-100', value: '#f1f5f9' },
        { name: 'slate-800', value: '#1e293b' },
        { name: 'slate-900', value: '#0f172a' },
      ],
      default: 'white',
    },
  },
  decorators: [
    (story, context) => {
      const background = context.globals.backgrounds?.value

      const dark = ['#1e293b', '#0f172a'].includes(background)

      if (dark) {
        document.querySelector('html').classList.add('of-dark')
      } else {
        document.querySelector('html').classList.remove('of-dark')
      }

      return {
        template: `<story/>`,
      }
    },
  ],
}

export const decorators = [
  (story, context) => {
    const background = context.globals.backgrounds?.value

    const dark = ['#1e293b', '#0f172a'].includes(background)

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

export default preview
