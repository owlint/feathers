<template>
  <button
    :aria-label="label"
    class="
      of-flex of-items-center of-justify-center
      hover:of-bg-opacity-10
      focus:of-outline-none
      dark:hover:of-bg-opacity-10
      dark:of-bg-transparent
      disabled:of-opacity-25
      disabled:hover:of-bg-transparent
      disabled:of-cursor-not-allowed
      dark:of-text-slate-300
      dark:hover:of-bg-slate-100
      dark:focus:of-bg-slate-700
    "
    :class="[
      getIconButtonStyle(color),
      getIconButtonSize(size),
      tile ? 'of-rounded-md' : 'of-rounded-full',
    ]"
    :disabled="disabled"
  >
    <!-- @click="$emit('click')" -->
    <LoadingIcon v-if="loading" :class="getIconSize(size)" />
    <div
      class="flex of-items-center of-justify-center"
      v-else
      :class="getIconSize(size)"
    >
      <slot>
        <QuestionIcon />
        <!-- <of-font-awesome-icon :icon="['fad', icon]"/> -->
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
