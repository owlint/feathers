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
          v-if="show"
          class="
            max-w-sm
            w-full
            bg-white
            dark:bg-nosferatu-800
            shadow-lg
            rounded-lg
            pointer-events-auto
            ring-2 ring-black
            dark:ring-dracula-400
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
                <font-awesome-icon
                  v-if="type === 'success'"
                  class="w-6 h-6"
                  :icon="['fad', 'circle-check']"
                />
                <font-awesome-icon
                  v-if="type === 'warning'"
                  class="w-6 h-6"
                  :icon="['fad', 'circle-exclamation']"
                />
                <font-awesome-icon
                  v-if="type === 'error'"
                  class="w-6 h-6"
                  :icon="['fad', 'circle-xmark']"
                />
              </div>
              <div class="w-0 flex-1" :class="{ 'ml-3': type }">
                <p class="text-sm font-medium text-slate-900 dark:text-white">
                  {{ title }}
                </p>
                <p
                  v-if="description"
                  class="text-xs text-slate-500 dark:text-nosferatu-200"
                >
                  {{ description }}
                </p>
              </div>
              <div class="ml-4 flex-shrink-0 flex" v-if="isClose">
                <button
                  @click="show = false"
                  class="
                    bg-white
                    rounded-md
                    inline-flex
                    text-slate-400
                    hover:text-slate-500
                    focus:outline-none
                    focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500
                  "
                >
                  <span class="sr-only">Close</span>
                  <font-awesome-icon
                    class="w-5 h-5"
                    :icon="['fad', 'xmark']"
                  ></font-awesome-icon>
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { COLORS } from '../enums/colors'
import { getNotificationStyle } from '../utils/colors'
const show = ref(true)
const props = defineProps({
  title: {
    type: String,
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
    validator(value) {
      return COLORS.indexOf(value) !== -1
    },
  },
})

let style = ''

switch (props.color) {
  case 'red':
    style = 'text-red-400 dark:text-marcelin-400'
    break
  case 'blue':
    style = 'text-blue-400 dark:text-dracula-400'
    break
  case 'orange':
    style = 'text-orange-400 dark:text-morbius-400'
    break
  case 'green':
    style = 'text-green-400 dark:text-blade-400'
    break
  default:
    style = 'text-blue-400 dark:text-dracula-400'
    break
}
</script>
