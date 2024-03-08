<template>
  <th :scope="scope" class="of-text-left">
    <!-- faire le style générique -->
    <slot />
  </th>
</template>
<script setup>
// props scope (pour mettre autre chose que col
defineOptions({
  name: 'OTableHeaderContent',
})
const props = defineProps({
  scope: {
    type: String,
    required: true,
    default: 'col',
  },
})
</script>
