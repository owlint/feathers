<template>
  <div class="-of-my-2 -of-mx-4 sm:-of-mx-6 lg:-of-mx-8 of-rounded-lg">
    <div
      class="
        of-inline-block of-min-w-full of-py-2 of-align-middle
        md:of-px-6
        lg:of-px-8
      "
    >
      <table
        class="
          of-min-w-full of-divide-y of-divide-slate-200
          dark:of-divide-slate-900
        "
      >
        <thead>
          <tr class="of-text-slate-900 dark:of-text-white">
            <slot name="header"></slot>
          </tr>
        </thead>
        <tbody
          class="
            of-divide-y of-divide-slate-100
            dark:of-divide-slate-900
            of-text-slate-800
            dark:of-text-slate-50
          "
          :class="{ 'of-bg-white dark:of-bg-slate-800': !transparent }"
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
