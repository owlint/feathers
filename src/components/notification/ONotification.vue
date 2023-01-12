<template>
  <div
    aria-live="assertive"
    class="of-flex of-items-end of-pointer-events-none sm:of-items-start"
  >
    <div
      class="
        of-w-full of-flex of-flex-col of-items-center of-space-y-4
        sm:of-items-end
      "
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
          class="
            of-max-w-sm of-w-full of-bg-white
            dark:of-bg-slate-800
            of-shadow-lg
            of-rounded-lg
            of-pointer-events-auto
            of-ring-2
            of-ring-black
            dark:of-ring-indigo-400
            of-ring-opacity-5 of-overflow-hidden
          "
        >
          <div class="of-p-4">
            <div
              class="of-flex"
              :class="description ? 'of-items-start' : ' of-items-center'"
            >
              <div
                class="of-w-6 of-h-6"
                v-if="type"
                :class="getNotificationStyle(color)"
              >
                <CircleCheckIcon v-if="type === 'success'" />
                <CircleExclamationIcon v-if="type === 'warning'" />
                <CircleXmarkIcon v-if="type === 'error'" />
              </div>
              <div class="of-w-0 of-flex-1" :class="{ 'of-ml-3': type }">
                <p
                  class="
                    of-text-sm of-font-medium of-text-slate-900
                    dark:of-text-white
                  "
                >
                  {{ title }}
                </p>
                <p
                  v-if="description"
                  class="of-text-xs of-text-slate-500 dark:of-text-slate-200"
                >
                  {{ description }}
                </p>
              </div>
            </div>
          </div>
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
import { ref } from 'vue'
import { COLORS } from '../../enums/colors'
import { getNotificationStyle } from '../../utils/colors'
import { CircleCheckIcon, CircleExclamationIcon, CircleXmarkIcon } from '../svg'
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: false,
  },
  type: {
    type: String,
    required: false,
    validator: (value) => {
      return ['warning', 'error', 'success'].indexOf(value) !== -1
    },
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
