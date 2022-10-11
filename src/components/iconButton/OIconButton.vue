<template>
  <button
    :aria-label="label"
    class="
      flex
      items-center
      justify-center
      hover:bg-opacity-10
      focus:outline-none
      dark:hover:bg-opacity-10
      dark:bg-transparent
      disabled:opacity-25
      disabled:hover:bg-transparent
      disabled:cursor-not-allowed
      dark:text-nosferatu-300
      dark:hover:bg-nosferatu-100
      dark:focus:bg-nosferatu-700
    "
    :class="[
      getIconButtonStyle(color),
      getIconButtonSize(size),
      tile ? 'rounded-md' : 'rounded-full',
    ]"
    :disabled="disabled"
  >
    <!-- @click="$emit('click')" -->
    <LoadingIcon v-if="loading" :class="getIconSize(size)" />
    <div v-else :class="getIconSize(size)">
      <slot>
        <QuestionIcon />
        <!-- <font-awesome-icon :icon="['fad', icon]"/> -->
      </slot>
    </div>
  </button>
</template>

<script>
export default {
  name: 'OIconButton',
}
</script>

<script setup>
import { computed } from 'vue'
import { COLORS } from '../../enums/colors'
import { getIconButtonStyle } from '../../utils/colors'
import { SIZES } from '../../enums/sizes'
import { getIconButtonSize, getIconSize } from '../../utils/sizes'
import { LoadingIcon, QuestionIcon } from '../svg/'

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
  loading: {
    type: Boolean,
    required: false,
    default: false,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  label: {
    type: String,
    required: false,
    default: '',
  },
})
</script>
