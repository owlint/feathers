<template>
  <div
    aria-live="assertive"
    class="of-flex of-items-end of-pointer-events-none sm:of-items-start"
  >
    <div
      class="of-w-full of-flex of-flex-col of-items-center of-space-y-4 sm:of-items-end"
    >
      <transition
        enter-active-class="of-transform of-ease-out of-duration-300 of-transition"
        enter-from-class="of-translate-y-2 of-opacity-0 sm:of-translate-y-0 sm:of-translate-x-2"
        enter-to-class="of-translate-y-0 of-opacity-100 sm:of-translate-x-0"
        leave-active-class="of-transition of-ease-in of-duration-100"
        leave-from-class="of-opacity-100"
        leave-to-class="of-opacity-0"
      >
        <div
          class="of-max-w-lg of-w-full of-bg-white dark:of-bg-slate-800 of-rounded-md of-pointer-events-auto of-ring-2 of-ring-slate-200 of-shadow-md of-p-5 of-flex of-items-center of-gap-5"
          :class="getNotificationStyleV2(color).border"
        >
          <div class="of-grow">
            <div
              class="of-flex of-gap-2.5"
              :class="description ? ' of-items-start' : ' of-items-center'"
            >
              <div
                class="of-w-6 of-h-6 of-shrink-0 of-rounded-full dark:of-text-slate-50 of-flex of-items-center of-justify-center"
                v-if="isIcon"
                :class="getNotificationStyleV2(color).icon"
              >
                <slot name="icon"> </slot>
              </div>

              <div class="of-flex of-flex-col of-gap-1">
                <h3
                  class="of-text-base of-font-bold"
                  :class="getNotificationStyleV2(color).title"
                >
                  {{ title }}
                </h3>
                <p
                  v-if="description"
                  class="of-text-xs of-font-medium of-text-slate-500 dark:of-text-slate-400"
                >
                  {{ description }}
                </p>
              </div>
            </div>
          </div>
          <button
            v-if="canExit"
            class=""
            :class="getNotificationStyleV2(color).exit"
          >
            <CrossIcon @click="onClick" />
          </button>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ONotification',
}
</script>

<script setup>
import { COLORS } from '../../enums/colors'
import { getNotificationStyleV2 } from '../../utils/colors'
import { CrossIcon } from '../svg'
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  isIcon: {
    type: Boolean,
    required: false,
    default: false,
  },
  canExit: {
    type: Boolean,
    required: false,
    default: false,
  },
  color: {
    type: String,
    required: false,
    validator: (value) => {
      return COLORS.indexOf(value) !== -1
    },
  },
})
</script>
