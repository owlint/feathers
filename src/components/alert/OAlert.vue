<template>
  <div
    class="of-rounded-md of-p-5 of-w-full of-flex of-gap-5"
    :class="[
      description ? 'of-items-start' : 'of-items-center',
      getAlertBgStyle(color),
    ]"
  >
    <div class="of-grow">
      <div class="of-flex of-items-center of-gap-2.5">
        <div
          v-if="isIcon"
          :class="getAlertIconStyle(color)"
          class="of-shrink-0"
        >
          <slot name="icon"> </slot>
        </div>
        <h3
          class="of-text-base of-font-medium"
          :class="getAlertTitleStyle(color)"
        >
          {{ title }}
        </h3>
      </div>

      <div class="of-flex of-items-center of-grow">
        <slot name="description">
          <div v-if="description">
            <p class="of-text-xs" :class="getAlertDescriptionStyle(color)">
              {{ description }}
            </p>
          </div>
        </slot>
      </div>
    </div>
    <OButton
      v-if="action"
      :color="color"
      :label="action"
      :loading="loading"
      @click="loading ? null : $emit('click')"
    />
  </div>
</template>

<script>
export default {
  name: 'OAlert',
}
</script>

<script setup>
import OButton from '../button/OButton.vue'
import { COLORS } from '../../enums/colors'
import {
  getAlertIconStyle,
  getAlertBgStyle,
  getAlertTitleStyle,
  getAlertDescriptionStyle,
} from '../../utils/colors'

const props = defineProps({
  color: {
    type: String,
    validator(value) {
      return COLORS.indexOf(value) !== -1
    },
  },
  title: {
    type: String,
    required: false,
    default: '',
  },
  isIcon: {
    type: Boolean,
    required: false,
    default: false,
  },
  action: {
    type: String,
    required: false,
    default: null,
  },
  description: {
    type: [String, Boolean],
    required: false,
    default: false,
  },
  loading: {
    type: Boolean,
    required: false,
    default: false,
  },
})
defineEmits(['click'])
</script>
