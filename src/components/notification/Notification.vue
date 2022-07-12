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
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  v-if="type === 'success'"
                  class="w-6 h-6"
                  viewBox="0 0 512 512"
                >
                  <path
                    class="fa-primary"
                    d="M371.8 172.2C382.7 183.1 382.7 200.9 371.8 211.8L243.8 339.8C232.9 350.7 215.1 350.7 204.2 339.8L140.2 275.8C129.3 264.9 129.3 247.1 140.2 236.2C151.1 225.3 168.9 225.3 179.8 236.2L224 280.4L332.2 172.2C343.1 161.3 360.9 161.3 371.8 172.2V172.2z"
                    fill="currentColor"
                  />
                  <path
                    class="fa-secondary opacity-40"
                    d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM371.8 211.8C382.7 200.9 382.7 183.1 371.8 172.2C360.9 161.3 343.1 161.3 332.2 172.2L224 280.4L179.8 236.2C168.9 225.3 151.1 225.3 140.2 236.2C129.3 247.1 129.3 264.9 140.2 275.8L204.2 339.8C215.1 350.7 232.9 350.7 243.8 339.8L371.8 211.8z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  v-if="type === 'warning'"
                  class="w-6 h-6"
                  viewBox="0 0 512 512"
                >
                  <path
                    class="fa-primary"
                    d="M256 304c13.25 0 24-10.75 24-24v-128C280 138.8 269.3 128 256 128S232 138.8 232 152v128C232 293.3 242.8 304 256 304zM256 337.1c-17.36 0-31.44 14.08-31.44 31.44C224.6 385.9 238.6 400 256 400s31.44-14.08 31.44-31.44C287.4 351.2 273.4 337.1 256 337.1z"
                    fill="currentColor"
                  />
                  <path
                    class="fa-secondary opacity-40"
                    d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM232 152C232 138.8 242.8 128 256 128s24 10.75 24 24v128c0 13.25-10.75 24-24 24S232 293.3 232 280V152zM256 400c-17.36 0-31.44-14.08-31.44-31.44c0-17.36 14.07-31.44 31.44-31.44s31.44 14.08 31.44 31.44C287.4 385.9 273.4 400 256 400z"
                    fill="currentColor"
                  />
                </svg>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  v-if="type === 'error'"
                  class="w-6 h-6"
                  viewBox="0 0 512 512"
                >
                  <path
                    class="fa-primary"
                    d="M255.1 222.1L303 175C312.4 165.7 327.6 165.7 336.1 175C346.3 184.4 346.3 199.6 336.1 208.1L289.9 255.1L336.1 303C346.3 312.4 346.3 327.6 336.1 336.1C327.6 346.3 312.4 346.3 303 336.1L255.1 289.9L208.1 336.1C199.6 346.3 184.4 346.3 175 336.1C165.7 327.6 165.7 312.4 175 303L222.1 255.1L175 208.1C165.7 199.6 165.7 184.4 175 175C184.4 165.7 199.6 165.7 208.1 175L255.1 222.1z"
                    fill="currentColor"
                  />
                  <path
                    class="fa-secondary"
                    d="M0 256C0 114.6 114.6 0 256 0C397.4 0 512 114.6 512 256C512 397.4 397.4 512 256 512C114.6 512 0 397.4 0 256zM175 208.1L222.1 255.1L175 303C165.7 312.4 165.7 327.6 175 336.1C184.4 346.3 199.6 346.3 208.1 336.1L255.1 289.9L303 336.1C312.4 346.3 327.6 346.3 336.1 336.1C346.3 327.6 346.3 312.4 336.1 303L289.9 255.1L336.1 208.1C346.3 199.6 346.3 184.4 336.1 175C327.6 165.7 312.4 165.7 303 175L255.1 222.1L208.1 175C199.6 165.7 184.4 165.7 175 175C165.7 184.4 165.7 199.6 175 208.1V208.1z"
                    fill="currentColor"
                  />
                </svg>
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
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { COLORS } from '../../enums/colors'
import { getNotificationStyle } from '../../utils/colors'
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
