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
          class="of-fixed of-inset-0 of-bg-slate-400/60 dark:of-bg-slate-800/60 of-backdrop-blur of-transition-opacity"
        />
      </TransitionChild>

      <div class="of-fixed of-z-10 of-inset-0 of-overflow-y-auto">
        <div
          class="of-flex of-items-end sm:of-items-center of-justify-center of-min-h-full of-p-4 of-text-center sm:of-p-0"
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
              class="of-relative of-bg-white dark:of-bg-slate-700 of-rounded-lg of-text-left of-shadow-xl of-transform of-transition-all sm:of-my-8 sm:of-w-full"
            >
              <div
                class="of-p-5 of-divide-y of-divide-slate-200 dark:of-divide-slate-500"
              >
                <div class="of-flex of-items-center of-mb-2.5 of-gap-2.5">
                  <div
                    v-if="!hideIcon"
                    :class="getModalIconStyle(color)"
                    class="of-p-1 of-flex-shrink-0 of-flex of-items-center of-justify-center of-size-6 of-rounded-full of-text-3xl sm:of-text-2xl dark:of-bg-slate-800"
                  >
                    <slot name="icon">
                      <QuestionIcon />
                    </slot>
                  </div>
                  <div class="of-grow">
                    <slot name="title">
                      <DialogTitle
                        as="h3"
                        class="of-text-lg of-leading-6 of-font-medium of-text-black dark:of-text-white"
                      >
                        {{ title }}
                      </DialogTitle>
                    </slot>
                  </div>
                  <OButton
                    v-if="content"
                    type="tertiary"
                    @click="$emit('close')"
                    ><CrossIcon
                  /></OButton>
                </div>

                <div class="of-pt-5">
                  <slot name="description">
                    <p
                      class="of-text-sm of-text-slate-500 dark:of-text-slate-300"
                    >
                      {{ description }}
                    </p>
                  </slot>
                </div>
              </div>
              <div
                v-if="!content"
                class="of-bg-slate-50 dark:of-bg-slate-800 of-px-5 of-py-2.5 of-flex of-flex-row-reverse of-gap-5 of-rounded-b-lg"
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
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { COLORS } from '../../enums/colors'
import { SIZES } from '../../enums/sizes'
import { getModalIconStyle } from '../../utils/colors'
import { getMaxWidth } from '../../utils/sizes'
import { QuestionIcon, CrossIcon } from '../svg'
import OButton from '../button/OButton.vue'

defineOptions({
  name: 'OModal',
})
defineEmits(['close'])

defineProps({
  displayModal: {
    type: Boolean,
  },
  title: {
    type: String,
    required: false,
    default: '',
  },
  description: {
    type: String,
    required: false,
    default: '',
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
  },
  content: {
    type: Boolean,
  },
})
</script>
