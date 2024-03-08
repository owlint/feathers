<template>
  <div class="-of-my-2 -of-mx-4 sm:-of-mx-6 lg:-of-mx-8">
    <div
      class="of-inline-block of-min-w-full of-py-2 of-align-middle md:of-px-6 lg:of-px-8"
    >
      <table
        class="of-min-w-full of-divide-y of-divide-slate-200 dark:of-divide-slate-700 of-border of-border-separate of-border-spacing-x-0 of-border-spacing-y-1 of-rounded of-shadow-1"
        :class="getTableStyle(color).border"
      >
        <thead class="" :class="getTableStyle(color).head">
          <tr class="of-text-slate-900 dark:of-text-white">
            <slot name="header"></slot>
          </tr>
        </thead>
        <tbody
          class="of-divide-y of-divide-slate-200 dark:of-divide-slate-700 of-text-slate-800 dark:of-text-slate-50 of-m-12 of-rounded-lg"
          :class="getTableStyle(color).body"
        >
          <slot name="skeleton" v-if="loading"></slot>
          <slot name="body" v-else></slot>
        </tbody>
      </table>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
import { getTableStyle } from '../../utils/colors'
defineOptions({
  name: 'OTable',
})
defineProps({
  loading: {
    type: Boolean,
    required: false,
    default: false,
  },
  color: {
    type: String,
    required: false,
    default: 'default',
  },
})
</script>
