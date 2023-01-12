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
      dark:text-slate-100
      dark:focus-within:text-slate-700
    "
  >
    <input
      :id="id"
      :value="modelValue"
      @input="getValue($event.target.value)"
      :autocomplete="autocomplete"
      :step="step"
      :min="min"
      :max="max"
      :pattern="pattern"
      :required="required"
      :placeholder="placeholder"
      :readonly="readonly"
      :type="type"
      :disabled="disabled"
      :class="[
        { 'pl-8': isIcon },
        {
          'bg-slate-100 placeholder-slate-400/50 dark:placeholder-slate-100/50 dark:bg-slate-900 border border-slate-100 dark:border-slate-900 focus:border-transparent  focus:outline-none cursor-text':
            !readonly,
        },

        { 'dark:bg-slate-800': readonly },
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
        dark:focus:ring-offset-slate-800
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
      <LoadingIcon />
    </div>
  </div>
</template>

<script>
export default {
  name: 'OInput',
}
</script>

<script setup>
import { COLORS } from '../../enums/colors'
import {
  getInputStyle,
  getLabelStyle,
  getInputIconStyle,
} from '../../utils/colors'
import { LoadingIcon } from '../svg'
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
  min: {
    type: Number,
    required: false,
  },
  max: {
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
