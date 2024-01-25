<template>
  <button
    :disabled="disabled"
    :type="buttonType"
    :class="[classes, getButtonSize(size)]"
    @click="onClick"
    class="of-rounded of-font-semibold disabled:of-opacity-50 disabled:hover:of-ring-0 disabled:of-cursor-not-allowed of-outline-none of-px-4 of-py-2.5 focus:of-ring-4"
  >
    <div class="of-flex of-items-center of-gap-4">
      <div class="of-flex of-items-center of-gap-2.5">
        <slot name="iconLeft"></slot>

        <slot> {{ label }} </slot>

        <slot name="iconRight"></slot>
      </div>

      <div v-if="loading"><LoadingIcon /></div>
    </div>
  </button>
</template>

<script setup>
import { computed } from 'vue'
import { LoadingIcon } from '../../components/svg/'
import { getButtonSize } from '../../utils/sizes'
import {
  getPrimaryButton,
  getSecondaryButton,
  getTertiaryButton,
} from '../../utils/colors'
import { COLORS } from '../../enums/colors'

defineOptions({
  name: 'OButton',
})

const props = defineProps({
  label: {
    type: String,
    required: false,
    dafault: '',
  },
  loading: {
    type: Boolean,
    required: false,
    default: false,
  },
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  buttonType: {
    type: String,
    required: false,
    default: 'button',
  },
  type: {
    type: String,
    default: 'primary',
    validator: function (value) {
      return ['primary', 'secondary', 'tertiary'].indexOf(value) !== -1
    },
  },
  size: {
    type: String,
    validator: function (value) {
      return ['xs', 'sm', 'md', 'lg', 'xl'].indexOf(value) !== -1
    },
    default: 'md',
  },
  color: {
    type: String,
    validator: function (value) {
      return COLORS.indexOf(value) !== -1
    },
  },
})
const emit = defineEmits(['click'])

const classes = computed(() => {
  if (props.type === 'primary') {
    return getPrimaryButton(props.color)
  } else if (props.type === 'secondary') {
    return getSecondaryButton(props.color)
  } else if (props.type === 'tertiary') {
    return getTertiaryButton(props.color)
  } else {
    return getPrimaryButton(props.color)
  }
})
const onClick = () => {
  if (!props.disabled && !props.loading) emit('click')
}
</script>
