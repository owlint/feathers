<template>
  <TransitionRoot as="template" :show="displayModal">
    <Dialog as="div" class="of-relative of-z-10" @close="$emit('close')">
      <TransitionChild
        as="template"
        enter="of-ease-out of-duration-300"
        enter-from="of-opacity-0"
        enter-to="of-opacity-100"
        leave="of-ease-in of-duration-200"
        leave-from="of-opacity-100"
        leave-to="of-opacity-0"
      >
        <div
          class="
            of-fixed of-inset-0 of-bg-slate-400/60
            dark:of-bg-slate-400/60
            of-backdrop-blur of-transition-opacity
          "
        />
      </TransitionChild>

      <div class="of-fixed of-z-10 of-inset-0 of-overflow-y-auto">
        <div
          class="
            of-flex of-items-end
            sm:of-items-center
            of-justify-center of-min-h-full of-p-4 of-text-center
            sm:of-p-0
          "
        >
          <TransitionChild
            as="template"
            enter="of-ease-out of-duration-300"
            enter-from="of-opacity-0 of-translate-y-4 sm:of-translate-y-0 sm:of-scale-95"
            enter-to="of-opacity-100 of-translate-y-0 sm:of-scale-100"
            leave="of-ease-in of-duration-200"
            leave-from="of-opacity-100 of-translate-y-0 sm:of-scale-100"
            leave-to="of-opacity-0 of-translate-y-4 sm:of-translate-y-0 sm:of-scale-95"
          >
            <DialogPanel
              :class="getMaxWidth(size)"
              class="
                of-relative of-bg-white
                dark:of-bg-slate-900
                of-rounded-lg
                of-text-left
                of-shadow-xl
                of-transform
                of-transition-all
                sm:of-my-8 sm:of-w-full
              "
            >
              <div class="of-px-4 of-pt-5 of-pb-4 sm:of-p-6 sm:of-pb-4">
                <div class="sm:of-flex sm:of-items-start">
                  <div
                    v-if="!hideIcon"
                    :class="getIconStyle(color)"
                    class="
                      of-mx-auto
                      of-flex-shrink-0
                      of-flex
                      of-items-center
                      of-justify-center
                      of-h-12
                      of-w-12
                      of-rounded-full
                      sm:of-mx-0 sm:of-h-10 sm:of-w-10
                      of-text-3xl
                      sm:of-text-2xl
                    "
                  >
                    <slot name="icon">
                      <QuestionIcon />
                    </slot>
                  </div>

                  <div
                    class="
                      of-mt-3 of-text-center
                      sm:of-mt-0 sm:of-ml-4 sm:of-text-left
                      of-grow
                    "
                  >
                    <slot name="title">
                      <DialogTitle
                        as="h3"
                        class="
                          of-text-lg
                          of-leading-6
                          of-font-medium
                          of-text-slate-900
                          dark:of-text-slate-100
                        "
                      >
                        {{ title }}
                      </DialogTitle>
                    </slot>
                    <div class="of-mt-2">
                      <slot name="description">
                        <p
                          class="
                            of-text-sm of-text-slate-500
                            dark:of-text-slate-300
                          "
                        >
                          {{ description }}
                        </p>
                      </slot>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="
                  of-bg-slate-50
                  dark:of-bg-slate-800
                  of-px-4 of-py-3
                  sm:of-px-6 sm:of-flex sm:of-flex-row-reverse
                  of-gap-4
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

<script>
export default {
  name: 'OModal',
}
</script>

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

import { COLORS } from '../../enums/colors'
import { SIZES } from '../../enums/sizes'
import { getIconStyle } from '../../utils/colors'
import { getMaxWidth } from '../../utils/sizes'
import { QuestionIcon } from '../svg'

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
