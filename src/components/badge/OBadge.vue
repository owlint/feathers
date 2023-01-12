<template>
  <div class="of-inline-block">
    <div
      class="of-flex of-items-center of-font-medium of-gap-2 dark:of-border"
      :class="[
        getBadgeStyle(color),
        getBadgeSize(size),
        tile ? ' of-rounded ' : ' of-rounded-full ',
      ]"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OBadge',
}
</script>

<script setup>
import { computed } from 'vue'
import { COLORS } from '../../enums/colors'
import { getBadgeStyle } from '../../utils/colors'
import { SIZES } from '../../enums/sizes'
import { getBadgeSize } from '../../utils/sizes'
defineProps({
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
    validator: (value) => {
      return SIZES.indexOf(value) !== -1
    },
  },
  tile: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>
