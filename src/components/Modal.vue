<template>
  <TransitionRoot as="template" :show="displayModal">
    <Dialog as="div" class="relative z-10" @close="$emit('close')">
      <TransitionChild
        as="template"
        enter="ease-out duration-300"
        enter-from="opacity-0"
        enter-to="opacity-100"
        leave="ease-in duration-200"
        leave-from="opacity-100"
        leave-to="opacity-0"
      >
        <div
          class="fixed inset-0 bg-slate-500 bg-opacity-75 transition-opacity"
        />
      </TransitionChild>

      <div class="fixed z-10 inset-0 overflow-y-auto">
        <div
          class="
            flex
            items-end
            sm:items-center
            justify-center
            min-h-full
            p-4
            text-center
            sm:p-0
          "
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <DialogPanel
              :class="getMaxWidth(size)"
              class="
                relative
                bg-white
                dark:bg-slate-800
                rounded-lg
                text-left
                overflow-hidden
                shadow-xl
                transform
                transition-all
                sm:my-8
                sm:w-full
              "
            >
              <div
                class="bg-white dark:bg-slate-800 px-4 pt-5 pb-4 sm:p-6 sm:pb-4"
              >
                <div class="sm:flex sm:items-start">
                  <div
                    v-if="!hideIcon"
                    :class="getIconStyle(color)"
                    class="
                      mx-auto
                      flex-shrink-0 flex
                      items-center
                      justify-center
                      h-12
                      w-12
                      rounded-full
                      sm:mx-0
                      sm:h-10
                      sm:w-10
                      text-3xl
                      sm:text-2xl
                    "
                  >
                    <slot name="icon">
                      <font-awesome-icon class="" :icon="['fad', 'question']" />
                    </slot>
                  </div>

                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <slot name="title">
                      <DialogTitle
                        as="h3"
                        class="
                          text-lg
                          leading-6
                          font-medium
                          text-slate-900
                          dark:text-slate-100
                        "
                      >
                        {{ title }}
                      </DialogTitle>
                    </slot>
                    <div class="mt-2">
                      <slot name="description">
                        <p class="text-sm text-slate-500 dark:text-slate-300">
                          {{ description }}
                        </p>
                      </slot>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="
                  bg-slate-50
                  dark:bg-slate-900
                  px-4
                  py-3
                  sm:px-6
                  sm:flex sm:flex-row-reverse
                  gap-4
                "
              >
                <slot name="footer" />
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

import { COLORS } from '../enums/colors'
import { SIZES } from '../enums/sizes'
import { getIconStyle } from '../utils/colors'
import { getMaxWidth } from '../utils/sizes'

defineEmits(['close'])

defineProps({
  displayModal: {
    type: Boolean,
    required: true,
  },
  title: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  color: {
    type: String,
    required: false,
    default: 'indigo',
    validator: (value) => {
      return COLORS.indexOf(value) !== -1
    },
  },
  size: {
    type: String,
    required: false,
    default: 'md',
    validator: function (value) {
      return SIZES.indexOf(value) !== -1
    },
  },
  hideIcon: {
    type: Boolean,
    required: false,
    default: false,
  },
})
</script>
