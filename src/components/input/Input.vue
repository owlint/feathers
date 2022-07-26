<template>
  <label
    v-if="label"
    :for="id"
    class="block text-base font-semibold"
    :class="getLabelStyle(color)"
  >
    {{ label }}
  </label>
  <div
    class="
      mt-1
      flex
      items-center
      relative
      focus-within:text-slate-700
      text-slate-700
      dark:text-nosferatu-100
      dark:focus-within:text-nosferatu-700
    "
  >
    <input
      :id="id"
      :value="modelValue"
      @input="getValue($event.target.value)"
      :autocomplete="autocomplete"
      :step="step"
      :pattern="pattern"
      :required="required"
      :placeholder="placeholder"
      :readonly="readonly"
      :type="type"
      :disabled="disabled"
      :class="[
        { 'pl-8': isIcon },
        {
          'bg-slate-100 placeholder-slate-400/50 dark:placeholder-nosferatu-100/50 dark:bg-nosferatu-900 border border-slate-100 dark:border-nosferatu-900 focus:border-transparent  focus:outline-none cursor-text':
            !readonly,
        },

        { 'dark:bg-nosferatu-800': readonly },
        { 'cursor-not-allowed': disabled },
        !readonly ? getInputStyle(color) : '',
      ]"
      class="
        border border-transparent
        font-medium
        appearance-none
        block
        peer
        w-full
        px-3
        py-2
        focus:ring-offset-2 focus:ring-offset-slate-50
        dark:focus:ring-offset-nosferatu-800
        focus:ring
        rounded-md
        cursor-auto
        sm:text-sm
      "
    />
    <div
      v-if="isIcon"
      :class="getInputIconStyle(color)"
      class="absolute left-0 ml-3"
    >
      <slot name="icon"></slot>
    </div>
    <div
      v-if="loading"
      :class="getInputIconStyle(color)"
      class="absolute mr-2 right-0"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 576 512"
        class="animate-spin w-4 h-4"
      >
        <path
          class="fa-primary"
          d="M256 32C256 14.33 270.3 0 288 0C429.4 0 544 114.6 544 256C544 302.6 531.5 346.4 509.7 384C500.9 399.3 481.3 404.6 465.1 395.7C450.7 386.9 445.5 367.3 454.3 351.1C470.6 323.8 480 291 480 255.1C480 149.1 394 63.1 288 63.1C270.3 63.1 256 49.67 256 31.1V32z"
          fill="currentColor"
        />
        <path
          class="fa-secondary opacity-40"
          d="M287.1 64C181.1 64 95.1 149.1 95.1 256C95.1 362 181.1 448 287.1 448C358.1 448 419.3 410.5 452.9 354.4L453 354.5C446.1 369.4 451.5 387.3 465.1 395.7C481.3 404.6 500.9 399.3 509.7 384C509.9 383.7 510.1 383.4 510.2 383.1C466.1 460.1 383.1 512 288 512C146.6 512 32 397.4 32 256C32 114.6 146.6 0 288 0C270.3 0 256 14.33 256 32C256 49.67 270.3 64 288 64H287.1z"
          fill="currentColor"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
import { COLORS } from '../../enums/colors'
import {
  getInputStyle,
  getLabelStyle,
  getInputIconStyle,
} from '../../utils/colors'
const emits = defineEmits(['update:modelValue'])

const props = defineProps({
  modelValue: {
    type: [String, Number],
    required: true,
  },
  isIcon: {
    type: Boolean,
    required: false,
  },
  id: {
    type: String,
    required: true,
  },
  label: {
    type: String,
    required: false,
    default: null,
  },
  pattern: {
    type: String,
    required: false,
    default: null,
  },
  required: {
    type: Boolean,
    required: false,
  },
  step: {
    type: Number,
    required: false,
  },
  placeholder: {
    type: String,
    required: false,
    default: '',
  },
  autocomplete: {
    type: String,
    required: false,
    default: '',
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  readonly: {
    type: Boolean,
    required: false,
    default: false,
  },
  type: {
    type: String,
    required: false,
    default: 'text',
  },
  color: {
    type: String,
    validator: function (value) {
      return COLORS.indexOf(value) !== -1
    },
  },
  loading: {
    type: Boolean,
    required: false,
  },
})

const getValue = (value) => {
  if (props.type === 'number') {
    emits('update:modelValue', parseFloat(value))
  } else {
    emits('update:modelValue', value)
  }
}
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

input[type='number'] {
  -moz-appearance: textfield;
}
</style>
