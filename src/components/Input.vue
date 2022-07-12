<template>
  <div>
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
        focus-within:text-slate-700
        text-slate-700
        dark:text-nosferatu-100
        dark:focus-within:text-nosferatu-700
      "
    >
      <input
        :id="id"
        :value="modelValue"
        @input="$emit('update:modelValue', $event.target.value)"
        :placeholder="placeholder"
        :readonly="readonly"
        :type="type"
        :disabled="disabled"
        :class="[
          { 'pl-8': isIcon },
          {
            'bg-slate-100 placeholder-slate-400 dark:placeholder-nosferatu-100 dark:bg-nosferatu-900 border-slate-100 dark:border-nosferatu-900 border focus:outline-none cursor-text':
              !readonly,
          },

          { 'dark:bg-nosferatu-800': readonly },
          { 'cursor-not-allowed': disabled },
          !readonly ? getInputStyle(color) : '',
        ]"
        class="
          border-transparent
          font-medium
          appearance-none
          block
          w-full
          px-3
          py-2
          rounded-md
          cursor-auto
          sm:text-sm
        "
      />
      <div v-if="isIcon" class="absolute ml-3">
        <slot name="icon"></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { COLORS } from '../enums/colors'
import { getInputStyle, getLabelStyle } from '../utils/colors'
defineEmits(['update:modelValue'])

defineProps({
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
})
</script>

<style>
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type='number'] {
  -moz-appearance: textfield;
}
</style>
