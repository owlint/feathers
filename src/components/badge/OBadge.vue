<template>
  <div
    class="of-flex of-items-center of-font-medium dark:of-border of-px-2.5 of-py-1.5"
    :class="[
      getBadgeStyle(color),
      getBadgeSize(size),
      tile ? ' of-rounded ' : ' of-rounded-full ',
    ]"
  >
    <div class="of-flex of-items-center of-gap-2.5">
      <div class="of-flex of-items-center of-gap-2">
        <slot name="iconLeft"></slot>
        <slot> {{ label }}</slot>
        <slot name="iconRight"></slot>
      </div>

      <button v-if="isClickable" @click="emit('action')">
        <slot name="iconAction">
          <CrossIcon />
        </slot>
      </button>
    </div>
  </div>
</template>

<script setup>
import { COLORS } from '../../enums/colors'
import { getBadgeStyle } from '../../utils/colors'
import { SIZES } from '../../enums/sizes'
import { getBadgeSize } from '../../utils/sizes'
import { CrossIcon } from '../svg'

defineOptions({
  name: 'OBadge',
})
defineProps({
  label: {
    type: String,
    required: false,
    dafault: '',
  },
  color: {
    type: String,
    required: false,
    validator: (value) => {
      return COLORS.indexOf(value) !== -1
    },
  },
  size: {
    type: String,
    required: false,
    default: 'xs',
    validator: (value) => {
      return SIZES.indexOf(value) !== -1
    },
  },
  tile: {
    type: Boolean,
  },
  isClickable: {
    type: Boolean,
  },
})
const emit = defineEmits(['action'])
</script>
