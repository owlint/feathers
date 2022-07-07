<template>
  <div class="cursor-pointer">
    <input
      type="checkbox"
      class="peer absolute opacity-0 w-0 h-0"
      :id="id"
      :name="name"
      :value="value"
      v-model="modelValue"
      @change="$emit('input:modelValue', $event.target)"
    />
    <label
      class="
        peer-checked:ring-2
        flex
        p-2
        items-center
        transition
        duration-300
        cursor-pointer
      "
      :class="[getFilterStyle(color), tile ? ' rounded ' : ' rounded-full ']"
      :for="id"
    >
      <slot></slot>
    </label>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { COLORS } from '../enums/colors'
import { getFilterStyle } from '../utils/colors'

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
  modelValue: {
    type: Array,
    required: true,
  },
  tile: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>
