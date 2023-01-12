<template>
  <div
    aria-live="assertive"
    class="flex items-end pointer-events-none sm:items-start"
  >
    <div class="w-full flex flex-col items-center space-y-4 sm:items-end">
      <transition
        enter-active-class="transform ease-out duration-300 transition"
        enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
        enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <div
          class="
            max-w-sm
            w-full
            bg-white
            dark:bg-slate-800
            shadow-lg
            rounded-lg
            pointer-events-auto
            ring-2 ring-black
            dark:ring-indigo-400
            ring-opacity-5
            overflow-hidden
          "
        >
          <div class="p-4">
            <div
              class="flex"
              :class="description ? 'items-start' : ' items-center'"
            >
              <div
                class="w-6 h-6"
                v-if="type"
                :class="getNotificationStyle(color)"
              >
                <CircleCheckIcon v-if="type === 'success'" />
                <CircleExclamationIcon v-if="type === 'warning'" />
                <CircleXmarkIcon v-if="type === 'error'" />
              </div>
              <div class="w-0 flex-1" :class="{ 'ml-3': type }">
                <p class="text-sm font-medium text-slate-900 dark:text-white">
                  {{ title }}
                </p>
                <p
                  v-if="description"
                  class="text-xs text-slate-500 dark:text-slate-200"
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
