import Table from './Table.vue'
import Button from '../button/Button.vue'
export default {
  title: 'Components/Table',
  component: Table,
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
  components: { Table, Button },
  setup() {
    return { args }
  },
  template: `
    <Table  v-bind="args">
        <template #header>
            <th scope="col" class="py-3.5">
                <span class="sr-only">Réseau Social</span>
            </th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">Name</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">Identifiant</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">Email</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">
                <span class="sr-only">Details</span>
            </th>
        </template>
        <template #skeleton>
            <tr v-for="i in 5" :key="i" class="animate-pulse">
                <td class="py-3.5">
                    <div class="flex justify-end items-center">
                        <div class="bg-slate-100 dark:bg-nosferatu-900 w-6 h-6 rounded-full " />
                    </div>
                </td>
                <td class="px-3 py-3.5 space-y-2">
                    <div class="bg-slate-100 dark:bg-nosferatu-900 w-24 h-4 rounded-full" />
                </td>
                <td class="px-3 py-3.5">
                    <div class="bg-slate-100 dark:bg-nosferatu-900 w-28 h-4 rounded-full"></div>
                </td>
                <td class="px-3 py-3.5">
                    <div class="bg-slate-100 dark:bg-nosferatu-900 w-28 h-4 rounded-full"></div>
                </td>
                <td class="px-3 py-3.5">
                    <div class="bg-slate-100 dark:bg-nosferatu-900 w-12 h-4 rounded-full"></div>
                </td>
            </tr>
        </template>
        <template #body>
            <tr v-for="i in 5" :key="i">
                <td class="whitespace-nowrap py-3.5">
                    <div class="flex justify-end items-center">
                        <div class="w-6 h-6 rounded-full bg-indigo-200 dark:bg-dracula-200" />
                    </div>
                </td>
                <td class="whitespace-nowrap px-3 py-3.5 text-sm">
                    <span class="font-medium capitalize">Nom</span>
                </td>
                <td class="whitespace-nowrap px-3 py-3.5 text-sm">
                    id-diujzhbezpofnze1JOI1234
                </td>
                <td class="whitespace-nowrap px-3 py-3.5 text-sm">
                    email@owlint.fr
                </td>
                <td
                    class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                >
                <Button type="tertiary" label="Voir" />
                </td>
            </tr>
        </template>
    </Table>
    `,
})

export const Default = Template.bind({})
Default.args = defaultArgs

export const Loading = (args) => ({
  components: { Table, Button },
  setup() {
    return { args }
  },
  template: `
    <Table :loading="true" >
        <template #header>
            <th scope="col" class="py-3.5">
                <span class="sr-only">Réseau Social</span>
            </th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">Name</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">Identifiant</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">Email</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">
                <span class="sr-only">Details</span>
            </th>
        </template>
        <template #skeleton>
            <tr v-for="i in 5" :key="i" class="animate-pulse">
                <td class="py-3.5">
                    <div class="flex justify-end items-center">
                        <div class="bg-slate-100 dark:bg-nosferatu-900 w-6 h-6 rounded-full " />
                    </div>
                </td>
                <td class="px-3 py-3.5 space-y-2">
                    <div class="bg-slate-100 dark:bg-nosferatu-900 w-24 h-4 rounded-full" />
                </td>
                <td class="px-3 py-3.5">
                    <div class="bg-slate-100 dark:bg-nosferatu-900 w-28 h-4 rounded-full"></div>
                </td>
                <td class="px-3 py-3.5">
                    <div class="bg-slate-100 dark:bg-nosferatu-900 w-28 h-4 rounded-full"></div>
                </td>
                <td class="px-3 py-3.5">
                    <div class="bg-slate-100 dark:bg-nosferatu-900 w-12 h-4 rounded-full"></div>
                </td>
            </tr>
        </template>
    </Table>
    `,
})

export const Transparent = (args) => ({
  components: { Table, Button },
  setup() {
    return { args }
  },
  template: `
    <Table transparent >
        <template #header>
            <th scope="col" class="py-3.5">
                <span class="sr-only">Réseau Social</span>
            </th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">Name</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">Identifiant</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">Email</th>
            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold">
                <span class="sr-only">Details</span>
            </th>
        </template>
        <template #body>
            <tr v-for="i in 5" :key="i">
                <td class="whitespace-nowrap py-3.5">
                    <div class="flex justify-end items-center">
                        <div class="w-6 h-6 rounded-full bg-indigo-200 dark:bg-dracula-200" />
                    </div>
                </td>
                <td class="whitespace-nowrap px-3 py-3.5 text-sm">
                    <span class="font-medium capitalize">Nom</span>
                </td>
                <td class="whitespace-nowrap px-3 py-3.5 text-sm">
                    id-diujzhbezpofnze1JOI1234
                </td>
                <td class="whitespace-nowrap px-3 py-3.5 text-sm">
                    email@owlint.fr
                </td>
                <td
                    class="whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-6"
                >
                <Button type="tertiary" label="Voir" />
                </td>
            </tr>
        </template>
    </Table>
    `,
})
