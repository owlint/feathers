<template>
  <Popper>
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
          p-1
          items-center
          rounded-full
          transition
          duration-300
          cursor-pointer
        "
        :class="styleColor"
        :for="id"
      >
        <slot></slot>
      </label>
    </div>
    <template #tooltip> {{ tooltipValue }} </template>
  </Popper>
</template>

<script setup>
import { computed } from 'vue'
import { COLORS } from '../enums/colors'
import Popper from '../components/Popper.vue'

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
    required: true,
    default: 'indigo',
    validator: (value) => {
      return COLORS.indexOf(value) !== -1
    },
  },
  tooltipValue: {
    type: String,
    required: true,
  },
  modelValue: {
    type: Array,
    required: true,
  },
})

const styleColor = computed(() => {
  switch (props.color) {
    case 'indigo':
      return 'text-indigo-900 bg-indigo-500/20 ring-indgo-300 dark:bg-nosferatu-900 dark:text-dracula-400 peer-checked:ring-indigo-300 dark:peer-checked:ring-dracula-300 '
    case 'red':
      return 'text-red-900 bg-red-500/20 ring-red-300 dark:bg-nosferatu-900 dark:text-marcelin-400 peer-checked:ring-red-300 dark:peer-checked:ring-marcelin-300'
    case 'orange':
      return 'text-orange-900 bg-orange-500/20 ring-orange-300 dark:bg-nosferatu-900 dark:text-morbius-400 peer-checked:ring-red-300 dark:peer-checked:ring-morbius-300'
    case 'green':
      return 'text-green-900 bg-green-500/20 ring-green-300 dark:bg-nosferatu-900 dark:text-blade-400 peer-checked:ring-green-300 dark:peer-checked:ring-blade-300'
    case 'purple':
      return 'text-purple-900 bg-purple-500/20 ring-purple-300 dark:bg-nosferatu-900 dark:text-buffy-400 peer-checked:ring-purple-300 dark:peer-checked:ring-buffy-300'
    case 'blue':
      return 'text-blue-900 bg-cyan-500/20 ring-cyan-300 dark:bg-nosferatu-900 dark:text-vanHelsing-400 peer-checked:ring-cyan-300 dark:peer-checked:ring-vanHelsing-300'
    case 'slate':
      return 'text-slate-900 bg-slate-500/20 ring-slate-300 dark:bg-nosferatu-900 dark:text-aro-400 peer-checked:ring-slate-300 dark:peer-checked:ring-aro-300'
    case 'yellow':
      return 'text-yellow-900 bg-yellow-500/20 ring-yellow-300 dark:bg-nosferatu-900 dark:text-lincoln-400 peer-checked:ring-yellow-300 dark:peer-checked:ring-lincoln-300'
    default:
      return 'text-indigo-900 bg-indigo-500/20 ring-indgo-300 dark:bg-nosferatu-900 dark:text-dracula-400 peer-checked:ring-indigo-300 dark:peer-checked:ring-dracula-300'
  }
})
</script>
