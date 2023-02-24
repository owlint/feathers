<template>
  <Menu as="div" class="of-relative of-text-left of-max-w-lg">
    <div>
      <MenuButton
        :class="[
          getColorPickerBackground(modelValue),
          getFocusColorPickerRing(modelValue),
          getColorPickerText(modelValue),
        ]"
        class="
          of-flex of-items-center of-justify-center of-bg-opacity-70
          hover:of-bg-opacity-100
          of-w-8
          of-h-8
          of-rounded-full
          of-px-2
          of-py-1
          of-text-sm
          of-font-medium
          focus:of-outline-none
          focus:of-ring-2
          focus:of-ring-offset-2
          focus:of-ring-offset-slate-100
          dark:focus:of-ring-offset-slate-800
        "
        @click="animate"
      >
        <BurgerIcon />
      </MenuButton>
    </div>

    <transition
      enter-active-class="of-transition of-ease-out of-duration-100"
      enter-from-class="of-transform of-opacity-0 of-scale-95"
      enter-to-class="of-transform of-opacity-100 of-scale-100"
      leave-active-class="of-transition of-ease-in of-duration-75"
      leave-from-class="of-transform of-opacity-100 of-scale-100"
      leave-to-class="of-transform of-opacity-0 of-scale-95"
    >
      <MenuItems
        class="
          of-p-1
          of-gap-1
          of-grid
          of-grid-cols-6
          of-overflow-hidden
          of-z-50
          of-max-h-64
          of-overflow-y-auto
          of-origin-top-left
          of-absolute
          of-mt-2
          of-w-64
          of-rounded-md
          of-shadow-lg
          of-bg-white
          dark:of-bg-slate-700
          of-ring-1 of-ring-black of-ring-opacity-5
          focus:of-outline-none
        "
        :class="[
          { 'of-right-0': placement === 'bottom-right' },
          { 'of-left-0': placement === 'bottom-left' },
          { 'of-right-0 of-bottom-10': placement === 'top-right' },
          { 'of-left-0 of-bottom-10': placement === 'top-left' },
        ]"
      >
        <MenuItem
          v-for="color in colors"
          :key="color"
          as="div"
          class="
            of-cursor-pointer
            lock
            of-px-1
            of-py-2
            of-text-sm
            of-flex
            of-items-center
            of-group
            of-rounded
            hover:of-bg-opacity-50
            of-bg-opacity-20
            dark:of-bg-opacity-30
          "
          :class="[getColorPickerBackground(color)]"
          @click="$emit('update:modelValue', color)"
        >
          <div
            ref="colorPicked"
            :class="[
              modelValue === color
                ? ` ${getColorPickerRing(color)}`
                : 'of-ring-transparent ',
              getColorPickerBackground(color),
            ]"
            class="
              of-opacity-0
              of-scale-0
              of-inline-block
              of-mx-auto
              of-w-6
              of-h-6
              of-rounded-full
              of-ring-2
              of-ring-offset-2
              dark:of-ring-offset-slate-700
              group-hover:of-bg-opacity-100
              of-bg-opacity-70
              group-hover:dark:of-bg-opacity-100
              dark:of-bg-opacity-70
            "
          />
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script>
export default {
  name: 'OColorPicker',
}
</script>

<script setup>
import { COLORS } from '../../enums/colors'
import { BurgerIcon } from '../svg'
import {
  getColorPickerBackground,
  getColorPickerText,
  getColorPickerRing,
  getFocusColorPickerRing,
} from '../../utils/colors'
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
import gsap from 'gsap'
import { ref } from 'vue'

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  placement: {
    type: String,
    required: false,
    default: 'bottom-left',
  },
})
// reverse 2nd row of colors to preserve the gradient visually in the dropdown
const colors = [
  ...COLORS.slice(0, 6),
  ...COLORS.slice(6, 12).reverse(),
  ...COLORS.slice(12, 18),
]
defineEmits(['update:modelValue'])
const colorPicked = ref(null)
let tl = null
const animate = () => {
  // console.log(colorPicked)
  setTimeout(() => {
    tl = gsap.to(colorPicked?.value, {
      opacity: 1,
      scale: 1,
      duration: 0.15,
      stagger: 0.05,
      ease: 'of-ease-out',
    })
  }, 1)
}
</script>
