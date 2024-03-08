import OTable from './OTable.vue'
import OButton from '../button/OButton.vue'
import OTableData from './OTableData.vue'
import OTableHeaderContent from './OTableHeaderContent.vue'
import OTableRow from './OTableRow.vue'

export default {
  title: 'Components/OTable',
  component: OTable,
  tags: ['autodocs'],
  argsType: {
    loading: {
      type: { name: 'boolean', required: false },
      options: [true, false],
      control: { type: 'inline-radio' },
    },
    color: {
      control: { type: 'select' },
      options: ['default', 'head-transparent', 'transparent'],
    },
  },
}

const defaultArgs = {
  loading: false,
}

const Template = (args) => ({
  components: { OTable, OButton, OTableHeaderContent, OTableRow, OTableData },
  setup() {
    return { args }
  },

  template: `
  <OTable  v-bind="args">
        <template #header>
            <OTableHeaderContent scope="col" class="of-py-3.5">
                <span class="of-sr-only">Réseau Social</span>
            </OTableHeaderContent>
            <OTableHeaderContent scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">Name</OTableHeaderContent>
            <OTableHeaderContent scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">Identifiant</OTableHeaderContent>
            <OTableHeaderContent scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">Email</OTableHeaderContent>
            <OTableHeaderContent scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">
                <span class="of-sr-only">Details</span>
            </OTableHeaderContent>
        </template>
        <template #skeleton>
            <OTableRow v-for="i in 5" :key="i" class="of-animate-pulse">
                <OTableData class="of-py-3.5">
                    <div class="of-flex of-justify-end of-items-center">
                        <div class="of-bg-slate-100 dark:of-bg-slate-900 of-w-6 of-h-6 of-rounded-full " />
                    </div>
                </OTableData>
                <OTableData class="of-px-3 of-py-3.5 of-space-y-2">
                    <div class="of-bg-slate-100 dark:of-bg-slate-900 of-w-24 of-h-4 of-rounded-full" />
                </OTableData>
                <OTableData class="of-px-3 of-py-3.5">
                    <div class="of-bg-slate-100 dark:of-bg-slate-900 of-w-28 of-h-4 of-rounded-full"></div>
                </OTableData>
                <OTableData class="of-px-3 of-py-3.5">
                    <div class="of-bg-slate-100 dark:of-bg-slate-900 of-w-28 of-h-4 of-rounded-full"></div>
                </OTableData>
                <OTableData class="of-px-3 of-py-3.5">
                    <div class="of-bg-slate-100 dark:of-bg-slate-900 of-w-12 of-h-4 of-rounded-full"></div>
                </OTableData>
            </OTableRow>
        </template>
        <template #body>
            <OTableRow v-for="i in 5" :key="i">
                <OTableData class="of-whitespace-nowrap of-py-7">
                    <div class="of-flex of-justify-end of-items-center">
                        <div class="of-w-6 of-h-6 of-rounded-full of-bg-indigo-200 dark:of-bg-slate-600" />
                    </div>
                </OTableData>
                <OTableData class="of-whitespace-nowrap of-px-3 of-py-3.5 of-text-sm ">
                    <span class="of-font-medium capitalize">Nom</span>
                </OTableData>
                <OTableData class="of-whitespace-nowrap of-px-3 of-py-3.5 of-text-sm ">
                    id-diujzhbezpofnze1JOI1234
                </OTableData>
                <OTableData class="of-whitespace-nowrap of-px-3 of-py-3.5 of-text-sm">
                    email@owlint.fr
                </OTableData>
                <OTableData
                    class="of-whitespace-nowrap of-py-4 of-pl-3 of-pr-4 of-text-right of-text-sm of-font-medium sm:of-pr-6" 
                >
                <OButton type="tertiary" label="Voir" />
                </OTableData>
            </OTableRow>
        </template>
    </OTable>`,
})

export const Default = Template.bind({})
Default.args = defaultArgs

export const Loading = (args) => ({
  components: { OTable, OButton, OTableHeaderContent, OTableRow, OTableData },
  setup() {
    return { args }
  },
  template: `
    <OTable loading v-bind="args">
        <template #header>
            <OTableHeaderContent scope="col" class="of-py-3.5">
                <span class="of-sr-only">Réseau Social</span>
            </OTableHeaderContent>
            <OTableHeaderContent scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">Name</OTableHeaderContent>
            <OTableHeaderContent scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">Identifiant</OTableHeaderContent>
            <OTableHeaderContent scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">Email</OTableHeaderContent>
            <OTableHeaderContent scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">
                <span class="of-sr-only">Details</span>
            </OTableHeaderContent>
        </template>
        <template #skeleton>
            <OTableRow v-for="i in 5" :key="i" class="of-animate-pulse">
                <OTableData class="of-py-3.5">
                    <div class="of-flex of-justify-end of-items-center">
                        <div class="of-bg-slate-100 dark:of-bg-slate-900 of-w-6 of-h-6 of-rounded-full " />
                    </div>
                </OTableData>
                <OTableData class="of-px-3 of-py-3.5 of-space-y-2">
                    <div class="of-bg-slate-100 dark:of-bg-slate-900 of-w-24 of-h-4 of-rounded-full" />
                </OTableData>
                <OTableData class="of-px-3 of-py-3.5">
                    <div class="of-bg-slate-100 dark:of-bg-slate-900 of-w-28 of-h-4 of-rounded-full"></div>
                </OTableData>
                <OTableData class="of-px-3 of-py-3.5">
                    <div class="of-bg-slate-100 dark:of-bg-slate-900 of-w-28 of-h-4 of-rounded-full"></div>
                </OTableData>
                <OTableData class="of-px-3 of-py-3.5">
                    <div class="of-bg-slate-100 dark:of-bg-slate-900 of-w-12 of-h-4 of-rounded-full"></div>
                </OTableData>
            </OTableRow>
        </template>
    </OTable>`,
})

export const TransparentHeader = (args) => ({
  components: { OTable, OButton, OTableHeaderContent, OTableRow, OTableData },
  setup() {
    return { args }
  },
  template: `
    <OTable color='head-transparent' v-bind="args">
        <template #header>
            <OTableHeaderContent scope="col" class="of-py-3.5">
                <span class="of-sr-only">Réseau Social</span>
            </OTableHeaderContent>
            <OTableHeaderContent scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">Name</OTableHeaderContent>
            <OTableHeaderContent scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">Identifiant</OTableHeaderContent>
            <OTableHeaderContent scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">Email</OTableHeaderContent>
            <OTableHeaderContent scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">
                <span class="of-sr-only">Details</span>
            </OTableHeaderContent>
        </template>
        <template #body>
            <OTableRow v-for="i in 5" :key="i">
                <OTableData class="of-whitespace-nowrap of-py-7">
                    <div class="of-flex of-justify-end of-items-center">
                        <div class="of-w-6 of-h-6 of-rounded-full of-bg-indigo-200 dark:of-bg-slate-600" />
                    </div>
                </OTableData>
                <OTableData class="of-whitespace-nowrap of-px-3 of-py-3.5 of-text-sm ">
                    <span class="of-font-medium capitalize">Nom</span>
                </OTableData>
                <OTableData class="of-whitespace-nowrap of-px-3 of-py-3.5 of-text-sm ">
                    id-diujzhbezpofnze1JOI1234
                </OTableData>
                <OTableData class="of-whitespace-nowrap of-px-3 of-py-3.5 of-text-sm">
                    email@owlint.fr
                </OTableData>
                <OTableData
                    class="of-whitespace-nowrap of-py-4 of-pl-3 of-pr-4 of-text-right of-text-sm of-font-medium sm:of-pr-6" 
                >
                <OButton type="tertiary" label="Voir" />
                </OTableData>
            </OTableRow>
        </template>
    </OTable>`,
})

export const Transparent = (args) => ({
  components: { OTable, OButton, OTableHeaderContent, OTableRow, OTableData },
  setup() {
    return { args }
  },
  template: `
    <OTable color='transparent' v-bind="args">
        <template #header>
            <OTableHeaderContent scope="col" class="of-py-3.5">
                <span class="of-sr-only">Réseau Social</span>
            </OTableHeaderContent>
            <OTableHeaderContent scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">Name</OTableHeaderContent>
            <OTableHeaderContent scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">Identifiant</OTableHeaderContent>
            <OTableHeaderContent scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">Email</OTableHeaderContent>
            <OTableHeaderContent scope="col" class="of-px-3 of-py-3.5 of-text-left of-text-sm of-font-semibold">
                <span class="of-sr-only">Details</span>
            </OTableHeaderContent>
        </template>
        <template #body>
            <OTableRow v-for="i in 5" :key="i">
                <OTableData class="of-whitespace-nowrap of-py-7">
                    <div class="of-flex of-justify-end of-items-center">
                        <div class="of-w-6 of-h-6 of-rounded-full of-bg-indigo-200 dark:of-bg-slate-600" />
                    </div>
                </OTableData>
                <OTableData class="of-whitespace-nowrap of-px-3 of-py-3.5 of-text-sm ">
                    <span class="of-font-medium capitalize">Nom</span>
                </OTableData>
                <OTableData class="of-whitespace-nowrap of-px-3 of-py-3.5 of-text-sm ">
                    id-diujzhbezpofnze1JOI1234
                </OTableData>
                <OTableData class="of-whitespace-nowrap of-px-3 of-py-3.5 of-text-sm">
                    email@owlint.fr
                </OTableData>
                <OTableData
                    class="of-whitespace-nowrap of-py-4 of-pl-3 of-pr-4 of-text-right of-text-sm of-font-medium sm:of-pr-6" 
                >
                <OButton type="tertiary" label="Voir" />
                </OTableData>
            </OTableRow>
        </tem
    `,
})
