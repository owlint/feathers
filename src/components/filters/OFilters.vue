<template>


  <div class="of-space-y-4">


    <h4 v-if="label" class="of-font-medium dark:of-text-white of-text-sm">
       {{ label }} :
    </h4>


    <div class="of-flex of-items-center of-gap-4 of-ml-2">


      <OFilterItem
        v-for="item in items.data"
        :key="item.type"
        :id="`${items.type}-type-${item.type}`"
        :name="item.type"
        :value="item.type"
        :color="item.color"
        v-model="model"
        @input:modelValue="filterChoice($event)"
      >


        <!-- Work In progress -->
         {{ item.value }}
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
  items: {
    type: Object,
    required: true,
  },
  label: {
    type: String,
    required: true,
  },
})

const model = defineModel({
  type: Array,
  required: true,
})

const filterChoice = (ev) => {
  if (ev.checked) {
    model.value.push(ev.value)
  } else {
    const indexValues = model.value.findIndex((v) => v === ev.value)
    model.value.splice(indexValues, 1)
  }
}
</script>


