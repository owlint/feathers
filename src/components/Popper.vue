<template>
  <div class="relative">
    <button
      ref="button"
      @mouseenter="show()"
      @mouseleave="hide()"
      aria-describedby="tooltip"
      class="dark:text-white"
    >
      <slot />
    </button>
    <div
      class="tooltip z-10 py-2 hidden"
      ref="tooltip"
      id="tooltip"
      role="tooltip"
      @mouseenter="hover ? show() : null"
      @mouseleave="hover ? hide() : null"
    >
      <div :class="class" class="mx-2 px-3 py-2 w-max rounded-md">
        <slot name="tooltip"></slot>
        <div
          v-if="arrow"
          id="arrow"
          class="
            absolute
            invisible
            before:visible
            before:absolute
            w-3
            h-3
            before:w-3
            before:h-3
            before:content-['']
            before:rotate-45
          "
          data-popper-arrow
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { createPopper } from '@popperjs/core'
import { ref } from 'vue'

let popperInstance
const tooltip = ref('')
const button = ref('')

const props = defineProps({
  arrow: {
    type: Boolean,
    required: false,
    default: true,
  },
  class: {
    type: String,
    required: false,
    default: `bg-slate-200
          dark:bg-slate-700
          dark:text-white`,
  },
  hover: {
    type: Boolean,
    required: false,
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
  tooltip.value.classList.toggle('hidden')
  create()
}

const hide = () => {
  tooltip.value.classList.toggle('hidden')
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
