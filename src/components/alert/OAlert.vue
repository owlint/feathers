<template>
  <div
    class="
      of-rounded-md
      of-py-4
      of-px-6
      of-w-full
      of-ring-4
      of-ring-offset-4
      of-ring-offset-slate-50
      dark:of-ring-offset-slate-800
    "
    :class="getAlertBgStyle(color)"
  >
    <div class="of-flex of-items-center of-space-x-3">
      <div v-if="isIcon" :class="getAlertIconStyle(color)" class="of-shrink-0">
        <slot name="icon">
          <CircleCheckIcon v-if="color === 'green'" />
          <CircleExclamationIcon v-if="color === 'orange'" />
          <CircleXmarkIcon v-if="color === 'red'" />
        </slot>
      </div>
      <div class="of-grow">
        <div
          class="of-flex of-items-center of-justify-between of-gap-2 of-h-full"
        >
          <div>
            <h3
              class="of-text-base of-font-medium"
              :class="getAlertTitleStyle(color)"
            >
              {{ title }}
            </h3>
            <slot name="description">
              <div v-if="description">
                <p
                  class="of-text-sm dark:of-text-opacity-70"
                  :class="getAlertDescriptionStyle(color)"
                >
                  {{ description }}
                </p>
              </div>
            </slot>
          </div>

          <!-- <div class="of-my-1.5 of-flex of-justify-end"> -->
          <OButton
            v-if="action"
            :color="color"
            :label="action"
            :loading="loading"
            class="of-relative"
            @click="loading ? null : $emit('click')"
          />
          <!-- </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OAlert',
}
</script>

<script setup>
import { CircleCheckIcon, CircleExclamationIcon, CircleXmarkIcon } from '../svg'
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
    required: false,
    default: 'indigo',
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
    type: String,
    required: false,
    default: '',
  },
  loading: {
    type: Boolean,
    required: false,
    default: false,
  },
})
defineEmits(['click'])
</script>
