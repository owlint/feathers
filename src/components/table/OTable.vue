<template>
  <div class="-my-2 -mx-4 sm:-mx-6 lg:-mx-8 rounded-lg">
    <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
      <table class="min-w-full divide-y divide-slate-200 dark:divide-slate-900">
        <thead>
          <tr class="text-slate-900 dark:text-white">
            <slot name="header"></slot>
          </tr>
        </thead>
        <tbody
          class="
            divide-y divide-slate-100
            dark:divide-slate-900
            text-slate-800
            dark:text-slate-50
          "
          :class="{ 'bg-white dark:bg-slate-800': !transparent }"
        >
          <slot name="skeleton" v-if="loading"></slot>
          <slot name="body" v-else></slot>
        </tbody>
      </table>
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OTable',
}
</script>

<script setup>
defineProps({
  loading: {
    type: Boolean,
    required: false,
    default: false,
  },
  transparent: {
    type: Boolean,
    required: false,
  },
})
</script>
