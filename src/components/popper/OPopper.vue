<template>
  <div class="of-relative">
    <button
      ref="button"
      @mouseenter="show()"
      @mouseleave="hide()"
      aria-describedby="tooltip"
    >
      <slot />
    </button>
    <div
      class="tooltip of-z-10 of-py-2 of-hidden"
      ref="tooltip"
      id="tooltip"
      role="tooltip"
      @mouseenter="hover ? show() : null"
      @mouseleave="hover ? hide() : null"
    >
      <div
        :class="getPopperStyle(color)"
        class="of-mx-2 of-p-2.5 of-w-max of-rounded of-text-white of-font-bold of-text-xs"
      >
        <slot name="tooltip"></slot>
        <div
          v-if="arrow"
          id="arrow"
          class="of-absolute of-invisible before:of-visible before:of-absolute of-w-3 of-h-3 before:of-w-3 before:of-h-3 before:of-content-[''] before:of-rotate-45"
          data-popper-arrow
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { createPopper } from '@popperjs/core'
import { ref } from 'vue'
import { getPopperStyle } from '../../utils/colors'

defineOptions({
  name: 'OPopper',
})
let popperInstance
const tooltip = ref('')
const button = ref('')

const props = defineProps({
  arrow: {
    type: Boolean,
    default: true,
  },
  color: {
    type: String,
    required: false,
    default: 'slate',
  },
  hover: {
    type: Boolean,
    default: true,
  },
  placement: {
    type: String,
    required: false,
    default: 'top',
    validator: (value) => {
      return ['top', 'bottom', 'left', 'right'].indexOf(value) !== -1
    },
  },
})

const create = () => {
  popperInstance = createPopper(button.value, tooltip.value, {
    placement: props.placement,
  })
}
const show = () => {
  tooltip.value.classList.toggle('of-hidden')
  create()
}

const hide = () => {
  tooltip.value.classList.toggle('of-hidden')
  destroy()
}
const destroy = () => {
  popperInstance.destroy()
  popperInstance = null
}
</script>

<style scoped>
#arrow,
#arrow::before {
  background: inherit;
}

.tooltip {
  -webkit-animation: display-none-transition 300ms ease-in-out;
  animation: display-none-transition 300ms ease-in-out;
}

.tooltip[data-popper-placement^='top'] #arrow {
  bottom: 4px;
}

.tooltip[data-popper-placement^='bottom'] #arrow {
  top: 4px;
}

.tooltip[data-popper-placement^='left'] #arrow {
  right: 4px;
}

.tooltip[data-popper-placement^='right'] #arrow {
  left: 4px;
}

@-webkit-keyframes display-none-transition {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes display-none-transition {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>
