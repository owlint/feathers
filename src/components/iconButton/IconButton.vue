<template>
  <button
    :aria-label="label"
    :disabled="disabled"
    :class="[
      { 'cursor-not-allowed': disabled },
      tile ? 'rounded-md' : 'rounded-full',
      getIconButtonColorStyle(color),
    ]"
    class="
      flex
      items-center
      justify-center
      focus:ring-2
      ring-offset-2 ring-offset-slate-50
      dark:ring-offset-nosferatu
      active:hover:bg-opacity-0
      focus:outline-none
      active:dark:hover:bg-opacity-10
      dark:bg-transparent
      active:dark:hover:bg-slate-200
      disabled:opacity-25
      disabled:hover:bg-transparent
      cursor-pointer
      w-8
      h-8
    "
    @click="$emit('click')"
  >
    <LoadingIcon v-if="loading" />
    <div v-else>
      <slot></slot>
    </div>
  </button>
</template>

<script setup>
import { COLORS } from '../../enums/colors'
import { LoadingIcon } from '../../components/svg/'
import { getIconButtonColorStyle } from '../../utils/colors'
defineEmits(['click'])
defineProps({
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  color: {
    type: String,
    required: false,
    default: 'indigo',
    validator: (prop) => COLORS.includes(prop),
  },
  loading: {
    type: Boolean,
    required: false,
    default: false,
  },
  tile: {
    type: Boolean,
    required: false,
    default: false,
  },
  label: {
    type: String,
    required: true,
  },
})
</script>
