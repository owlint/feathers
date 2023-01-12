<template>
  <div
    class="
      rounded-md
      py-4
      px-6
      w-full
      ring-4 ring-offset-4 ring-offset-slate-50
      dark:ring-offset-slate-800
    "
    :class="getAlertBgStyle(color)"
  >
    <div class="flex items-center space-x-3">
      <div v-if="isIcon" :class="getAlertIconStyle(color)" class="shrink-0">
        <slot name="icon">
          <CircleCheckIcon v-if="color === 'green'" />
          <CircleExclamationIcon v-if="color === 'orange'" />
          <CircleXmarkIcon v-if="color === 'red'" />
        </slot>
      </div>
      <div class="grow">
        <div class="flex items-center justify-between gap-2 h-full">
          <div>
            <h3
              class="text-base font-medium"
              :class="getAlertTitleStyle(color)"
            >
              {{ title }}
            </h3>
            <slot name="description">
              <div v-if="description">
                <p
                  class="text-sm dark:text-opacity-70"
                  :class="getAlertDescriptionStyle(color)"
                >
                  {{ description }}
                </p>
              </div>
            </slot>
          </div>

          <!-- <div class="-my-1.5 flex justify-end"> -->
          <Button
            v-if="action"
            :color="color"
            :label="action"
            :loading="loading"
            class="relative"
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
