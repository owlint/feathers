<template>
  <div>
    <label
      v-if="label"
      :for="id"
      class="of-block of-text-base of-font-semibold"
      :class="getLabelStyle(color)"
    >
      {{ label }}
    </label>
    <div
      class="
        of-mt-1 of-flex of-items-center of-relative
        focus-within:of-text-slate-700
        of-text-slate-700
        dark:of-text-slate-100
        dark:focus-within:of-text-slate-700
      "
    >
      <input
        :id="id"
        :value="modelValue"
        @input="getValue($event.target.value)"
        @keydown.enter="$emit('key-down')"
        :data-form-type="dataFormType"
        :autocomplete="autocomplete"
        :step="step"
        :min="min"
        :max="max"
        :pattern="pattern"
        :required="required"
        :placeholder="placeholder"
        :readonly="readonly"
        :type="
          type === 'password' ? (showPassword ? 'text' : 'password') : type
        "
        :disabled="disabled"
        :class="[
          isIcon ? 'of-pl-8 of-pr-3' : 'of-px-3',
          type === 'password' ? 'of-pr-8 of-pl-3' : 'of-px-3',
          {
            'of-bg-slate-100 of-placeholder-slate-400/50 dark:placeholder-slate-100/50 dark:of-bg-slate-900 of-border of-border-slate-100 dark:of-border-slate-900 focus:of-border-transparent  focus:of-outline-none of-cursor-text':
              !readonly,
          },

          { 'dark:of-bg-slate-800': readonly },
          { 'of-cursor-not-allowed': disabled },
          !readonly ? getInputStyle(color) : '',
        ]"
        class="
          of-border
          of-border-transparent
          of-font-medium
          of-appearance-none
          of-block
          of-peer
          of-w-full
          of-px-3
          of-py-2
          focus:of-ring-offset-2 focus:of-ring-offset-slate-50
          dark:focus:of-ring-offset-slate-800
          focus:of-ring
          of-rounded-md of-cursor-auto
          sm:of-text-sm
        "
      />
      <div
        v-if="isIcon"
        :class="getInputIconStyle(color)"
        class="of-absolute of-left-0 of-ml-3"
      >
        <slot name="icon"></slot>
      </div>
      <div
        class="of-absolute of-mr-2 of-right-0 of-flex of-items-center of-gap-2"
        :class="getInputIconStyle(color)"
        v-if="true || type === 'password'"
      >
        <button
          v-if="type === 'password'"
          type="button"
          @click="showPassword = !showPassword"
        >
          <EyeSlashIcon v-if="showPassword" />
          <EyeIcon v-else />
        </button>
        <div v-if="true" :class="getInputIconStyle(color)">
          <LoadingIcon />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'OInput',
}
</script>

<script setup>
import { ref } from 'vue'
import { COLORS } from '../../enums/colors'
import {
  getInputStyle,
  getLabelStyle,
  getInputIconStyle,
} from '../../utils/colors'
import { LoadingIcon, EyeSlashIcon, EyeIcon } from '../svg'
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
  dataFormType: {
    type: String,
    required: true,
    default: '',
  },
})

const showPassword = ref(false)

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
