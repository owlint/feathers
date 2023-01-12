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
        :class="class"
        class="
          of-mx-2 of-px-3 of-py-2 of-w-max of-shadow-xs
          dark:of-shadow-md
          of-rounded-md
        "
      >
        <slot name="tooltip"></slot>
        <div
          v-if="arrow"
          id="arrow"
          class="
            of-absolute of-invisible
            before:of-visible before:of-absolute
            of-w-3 of-h-3
            before:of-w-3
            before:of-h-3
            before:of-content-['']
            before:of-rotate-45
          "
          data-popper-arrow
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OPopper',
}
</script>

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
    default: `of-bg-slate-200
          dark:of-bg-slate-600
          dark:of-text-white`,
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
