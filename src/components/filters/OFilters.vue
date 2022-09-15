<template>
  <div class="space-y-4">
    <h4 v-if="label" class="font-medium dark:text-white text-sm">
      {{ label }} :
    </h4>
    <div class="flex items-center gap-4 ml-2">
      <OFilterItem
        v-for="item in items.data"
        :key="item.type"
        :id="`${items.type}-type-${item.type}`"
        :name="item.type"
        :value="item.type"
        :color="item.color"
        v-model="modelValue"
        @input:modelValue="filterChoice($event)"
      >
        <!-- Work In progress -->
        working
      </OFilterItem>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OFilters',
}
</script>

<script setup>
import OFilterItem from '../filterItem/OFilterItem.vue'
defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: Array,
    required: true,
  },
  items: {
    type: Object,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})

const filterChoice = (ev) => {
  if (ev.checked) {
    props.modelValue.push(ev.value)
  } else {
    const indexValues = props.modelValue.findIndex((v) => v === ev.value)
    props.modelValue.splice(indexValues, 1)
  }
}
</script>
