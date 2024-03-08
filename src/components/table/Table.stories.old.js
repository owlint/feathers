import OTable from './OTable.vue'
import OButton from '../button/OButton.vue'
export default {
  title: 'Components/OTable',
  component: OTable,
  decorators: [
    () => ({
      template: '<story/>',
    }),
  ],
  argsType: {
    loading: {
      type: { name: 'boolean', required: false },
      options: [true, false],
      control: { type: 'inline-radio' },
    },
    transparent: {
      type: { name: 'boolean', required: false },
      options: [true, false],
      control: { type: 'inline-radio' },
    },
  },
}

const defaultArgs = {
  loading: false,
  transparent: false,
}

const Template = (args) => ({
  components: { OTable, OButton },
  setup() {
    return { args }
  },
  template: `
    <OTable  v-bind="args">
        <template #header>
            <th scope="col" class="of-py-3.5">
                <span class="of-sr-only">Réseau Social</span>
            </th>
            <th scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">Name</th>
            <th scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">Identifiant</th>
            <th scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">Email</th>
            <th scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">
                <span class="of-sr-only">Details</span>
            </th>
        </template>
        <template #skeleton>
            <tr v-for="i in 5" :key="i" class="of-animate-pulse">
                <td class="of-py-3.5">
                    <div class="of-flex of-justify-end of-items-center">
                        <div class="of-bg-slate-100 dark:of-bg-slate-900 of-w-6 of-h-6 of-rounded-full " />
                    </div>
                </td>
                <td class="of-px-3 of-py-3.5 of-space-y-2">
                    <div class="of-bg-slate-100 dark:of-bg-slate-900 of-w-24 of-h-4 of-rounded-full" />
                </td>
                <td class="of-px-3 of-py-3.5">
                    <div class="of-bg-slate-100 dark:of-bg-slate-900 of-w-28 of-h-4 of-rounded-full"></div>
                </td>
                <td class="of-px-3 of-py-3.5">
                    <div class="of-bg-slate-100 dark:of-bg-slate-900 of-w-28 of-h-4 of-rounded-full"></div>
                </td>
                <td class="of-px-3 of-py-3.5">
                    <div class="of-bg-slate-100 dark:of-bg-slate-900 of-w-12 of-h-4 of-rounded-full"></div>
                </td>
            </tr>
        </template>
        <template #body>
            <tr v-for="i in 5" :key="i">
                <td class="of-whitespace-nowrap of-py-3.5">
                    <div class="of-flex of-justify-end of-items-center">
                        <div class="of-w-6 of-h-6 of-rounded-full of-bg-indigo-200 dark:of-bg-slate-700" />
                    </div>
                </td>
                <td class="of-whitespace-nowrap of-px-3 of-py-3.5 of-text-sm">
                    <span class="of-font-medium capitalize">Nom</span>
                </td>
                <td class="of-whitespace-nowrap of-px-3 of-py-3.5 of-text-sm">
                    id-diujzhbezpofnze1JOI1234
                </td>
                <td class="of-whitespace-nowrap of-px-3 of-py-3.5 of-text-sm">
                    email@owlint.fr
                </td>
                <td
                    class="of-whitespace-nowrap of-py-4 of-pl-3 of-pr-4 of-text-right of-text-sm of-font-medium sm:of-pr-6"
                >
                <OButton type="tertiary" label="Voir" />
                </td>
            </tr>
        </template>
    </OTable>
    `,
})

export const Default = Template.bind({})
Default.args = defaultArgs

export const Loading = (args) => ({
  components: { OTable, OButton },
  setup() {
    return { args }
  },
  template: `
    <OTable :loading="true" >
        <template #header>
            <th scope="col" class="of-py-3.5">
                <span class="of-sr-only">Réseau Social</span>
            </th>
            <th scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">Name</th>
            <th scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">Identifiant</th>
            <th scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">Email</th>
            <th scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">
                <span class="of-sr-only">Details</span>
            </th>
        </template>
        <template #skeleton>
            <tr v-for="i in 5" :key="i" class="of-animate-pulse">
                <td class="of-py-3.5">
                    <div class="of-flex of-justify-end of-items-center">
                        <div class="of-bg-slate-100 dark:of-bg-slate-900 of-w-6 of-h-6 of-rounded-full " />
                    </div>
                </td>
                <td class="of-px-3 of-py-3.5 of-space-y-2">
                    <div class="of-bg-slate-100 dark:of-bg-slate-900 of-w-24 of-h-4 of-rounded-full" />
                </td>
                <td class="of-px-3 of-py-3.5">
                    <div class="of-bg-slate-100 dark:of-bg-slate-900 of-w-28 of-h-4 of-rounded-full"></div>
                </td>
                <td class="of-px-3 of-py-3.5">
                    <div class="of-bg-slate-100 dark:of-bg-slate-900 of-w-28 of-h-4 of-rounded-full"></div>
                </td>
                <td class="of-px-3 of-py-3.5">
                    <div class="of-bg-slate-100 dark:of-bg-slate-900 of-w-12 of-h-4 of-rounded-full"></div>
                </td>
            </tr>
        </template>
    </OTable>
    `,
})

export const Transparent = (args) => ({
  components: { OTable, OButton },
  setup() {
    return { args }
  },
  template: `
    <OTable transparent >
        <template #header>
            <th scope="col" class="of-py-3.5">
                <span class="of-sr-only">Réseau Social</span>
            </th>
            <th scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">Name</th>
            <th scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">Identifiant</th>
            <th scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">Email</th>
            <th scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">
                <span class="of-sr-only">Details</span>
            </th>
        </template>
        <template #body>
            <tr v-for="i in 5" :key="i">
                <td class="of-whitespace-nowrap of-py-3.5">
                    <div class="of-flex of-justify-end of-items-center">
                        <div class="of-w-6 of-h-6 of-rounded-full of-bg-indigo-200 dark:of-bg-slate-600" />
                    </div>
                </td>
                <td class="of-whitespace-nowrap of-px-3 of-py-3.5 of-text-sm">
                    <span class="of-font-medium capitalize">Nom</span>
                </td>
                <td class="of-whitespace-nowrap of-px-3 of-py-3.5 of-text-sm">
                    id-diujzhbezpofnze1JOI1234
                </td>
                <td class="of-whitespace-nowrap of-px-3 of-py-3.5 of-text-sm">
                    email@owlint.fr
                </td>
                <td
                    class="of-whitespace-nowrap of-py-4 of-pl-3 of-pr-4 of-text-right of-text-sm of-font-medium sm:of-pr-6"
                >
                <OButton type="tertiary" label="Voir" />
                </td>
            </tr>
        </template>
    </OTable>
    `,
})
