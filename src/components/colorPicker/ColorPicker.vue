<template>
  <Menu as="div" class="relative text-left max-w-lg">
    <div>
      <MenuButton
        :class="[
          getColorPickerBackground(modelValue),
          getFocusColorPickerRing(modelValue),
          getColorPickerText(modelValue),
        ]"
        class="
          flex
          items-center
          justify-center
          bg-opacity-70
          hover:bg-opacity-100
          w-8
          h-8
          rounded-full
          px-2
          py-1
          text-sm
          font-medium
          focus:outline-none
          focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-100
          dark:focus:ring-offset-slate-800
        "
        @click="animate"
      >
        <font-awesome-icon
          class="text-md fa-fw dark:text-slate-900"
          :icon="['fad', 'burger-cheese']"
        />
      </MenuButton>
    </div>

    <transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <MenuItems
        class="
          p-1
          gap-1
          grid grid-cols-6
          overflow-hidden
          z-50
          max-h-64
          overflow-y-auto
          origin-top-left
          absolute
          left-0
          mt-2
          w-64
          rounded-md
          shadow-lg
          bg-white
          dark:bg-slate-700
          ring-1 ring-black ring-opacity-5
          focus:outline-none
        "
      >
        <MenuItem
          v-for="color in colors"
          :key="color"
          as="div"
          class="
            cursor-pointer
            lock
            px-1
            py-2
            text-sm
            flex
            items-center
            group
            rounded
            hover:bg-opacity-50
            bg-opacity-20
            dark:bg-opacity-30
          "
          :class="[getColorPickerBackground(color)]"
          @click="$emit('update:modelValue', color)"
        >
          <div
            ref="colorPicked"
            :class="[
              modelValue === color
                ? ` ${getColorPickerRing(color)}`
                : 'ring-transparent ',
              getColorPickerBackground(color),
            ]"
            class="
              opacity-0
              scale-0
              inline-block
              mx-auto
              w-6
              h-6
              rounded-full
              ring-2 ring-offset-2
              dark:ring-offset-slate-700
              group-hover:bg-opacity-100
              bg-opacity-70
              group-hover:dark:bg-opacity-100
              dark:bg-opacity-70
            "
          />
        </MenuItem>
      </MenuItems>
    </transition>
  </Menu>
</template>

<script setup>
import { COLORS } from '../../enums/colors'
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
      ease: 'ease-out',
    })
  }, 1)
}
</script>
