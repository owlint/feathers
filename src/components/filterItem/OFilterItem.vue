<template>


  <div class="of-cursor-pointer">


    <input
      type="checkbox"
      class="of-peer of-absolute of-opacity-0 of-w-0 of-h-0"
      :id="id"
      :name="name"
      :value="value"
      v-model="model"
    />


    <label
      class="
        peer-checked:of-ring-2
        of-flex
        of-p-2
        of-items-center
        of-transition
        of-duration-300
        of-cursor-pointer
      "
      :class="[
        getFilterStyle(color),
        tile ? ' of-rounded ' : ' of-rounded-full ',
      ]"
      :for="id"
    >


      <slot></slot>


    </label>


  </div>


</template>


<script>
export default {
  name: 'OFilterItem',
}
</script>


<script setup>
import { COLORS } from '../../enums/colors'
import { getFilterStyle } from '../../utils/colors'

defineEmits(['input:modelValue'])

const props = defineProps({
  value: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: false,
    validator: (value) => {
      return COLORS.indexOf(value) !== -1
    },
  },
  tile: {
    type: Boolean,
    required: false,
    default: false,
  },
})

const model = defineModel({
  type: Array,
  required: true,
})
</script>


