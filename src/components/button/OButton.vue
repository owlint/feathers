<template>
  <button
    :disabled="disabled"
    :type="buttonType"
    :class="[classes, getButtonSize(size)]"
    @click="onClick"
    class="of-rounded of-font-semibold disabled:of-opacity-50 disabled:hover:of-ring-0 disabled:of-cursor-not-allowed of-outline-none of-px-4 of-py-2.5 focus:of-ring-2"
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
    required: true,
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

<style scoped>
/* .button--xs {
  @apply of-text-xs;
}
.button--sm {
  @apply of-text-sm;
}
.button--md {
  @apply of-text-base;
}
.button--lg {
  @apply of-text-lg;
}
.button--xl {
  @apply of-text-xl;
} */
/* .button--primary.button--slate {
  @apply of-shadow-md of-fill-white dark:of-fill-slate-900 of-bg-slate-500 enabled:hover:of-bg-slate-600 of-text-white dark:of-text-slate-900 dark:of-bg-slate-500 hover:of-shadow-none focus:of-ring-2 focus:of-ring-slate-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--secondary.button--slate {
  @apply dark:of-fill-white of-fill-slate-500 of-text-slate-500 of-bg-white of-border of-border-slate-300 enabled:hover:of-shadow-sm enabled:hover:of-shadow-slate-300 dark:enabled:hover:of-shadow-none dark:of-text-white dark:of-bg-white/10 dark:hover:of-bg-white/20 dark:of-border-none focus:of-ring-2 focus:of-ring-slate-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--tertiary.button--slate {
  @apply dark:of-fill-white of-fill-slate-500 of-text-slate-500 dark:of-text-white enabled:hover:of-bg-slate-500/20 dark:enabled:hover:of-bg-slate-500/30 focus:of-ring-2 focus:of-ring-slate-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
} */

/* .button--primary.button--gray {
  @apply of-shadow-md of-fill-white dark:of-fill-slate-900 of-bg-gray-500 enabled:hover:of-bg-gray-600 of-text-white dark:of-text-slate-900 dark:of-bg-gray-500 hover:of-shadow-none focus:of-ring-2 focus:of-ring-gray-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--secondary.button--gray {
  @apply dark:of-fill-white of-fill-gray-500 of-text-gray-500 of-bg-white of-border of-border-gray-300 enabled:hover:of-shadow-sm enabled:hover:of-shadow-gray-300 dark:enabled:hover:of-shadow-none dark:of-text-white dark:of-bg-white/10 dark:hover:of-bg-white/20 dark:of-border-none focus:of-ring-2 focus:of-ring-gray-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--tertiary.button--gray {
  @apply dark:of-fill-white of-fill-gray-500 of-text-gray-500 dark:of-text-white enabled:hover:of-bg-gray-500/20 dark:enabled:hover:of-bg-gray-500/30 focus:of-ring-2 focus:of-ring-gray-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
} 

.button--primary.button--zinc {
  @apply of-shadow-md of-fill-white dark:of-fill-slate-900 of-bg-zinc-500 enabled:hover:of-bg-zinc-600 of-text-white dark:of-text-slate-900 dark:of-bg-zinc-500 hover:of-shadow-none focus:of-ring-2 focus:of-ring-zinc-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--secondary.button--zinc {
  @apply dark:of-fill-white of-fill-zinc-500 of-text-zinc-500 of-bg-white of-border of-border-zinc-300 enabled:hover:of-shadow-sm enabled:hover:of-shadow-zinc-300 dark:enabled:hover:of-shadow-none dark:of-text-white dark:of-bg-white/10 dark:hover:of-bg-white/20 dark:of-border-none focus:of-ring-2 focus:of-ring-zinc-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--tertiary.button--zinc {
  @apply dark:of-fill-white of-fill-zinc-500 of-text-zinc-500 dark:of-text-white enabled:hover:of-bg-zinc-500/20 dark:enabled:hover:of-bg-zinc-500/30 focus:of-ring-2 focus:of-ring-zinc-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}

.button--primary.button--neutral {
  @apply of-shadow-md of-fill-white dark:of-fill-slate-900 of-bg-neutral-500 enabled:hover:of-bg-neutral-600 of-text-white dark:of-text-slate-900 dark:of-bg-neutral-500 hover:of-shadow-none focus:of-ring-2 focus:of-ring-neutral-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--secondary.button--neutral {
  @apply dark:of-fill-white of-fill-neutral-500 of-text-neutral-500 of-bg-white of-border of-border-neutral-300 enabled:hover:of-shadow-sm enabled:hover:of-shadow-neutral-300 dark:enabled:hover:of-shadow-none dark:of-text-white dark:of-bg-white/10 dark:hover:of-bg-white/20 dark:of-border-none focus:of-ring-2 focus:of-ring-neutral-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--tertiary.button--neutral {
  @apply dark:of-fill-white of-fill-neutral-500 of-text-neutral-500 dark:of-text-white enabled:hover:of-bg-neutral-500/20 dark:enabled:hover:of-bg-neutral-500/30 focus:of-ring-2 focus:of-ring-neutral-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}

.button--primary.button--stone {
  @apply of-shadow-md of-fill-white dark:of-fill-slate-900 of-bg-stone-500 enabled:hover:of-bg-stone-600 of-text-white dark:of-text-slate-900 dark:of-bg-stone-500 hover:of-shadow-none focus:of-ring-2 focus:of-ring-stone-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--secondary.button--stone {
  @apply dark:of-fill-white of-fill-stone-500 of-text-stone-500 of-bg-white of-border of-border-stone-300 enabled:hover:of-shadow-sm enabled:hover:of-shadow-stone-300 dark:enabled:hover:of-shadow-none dark:of-text-white dark:of-bg-white/10 dark:hover:of-bg-white/20 dark:of-border-none focus:of-ring-2 focus:of-ring-stone-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--tertiary.button--stone {
  @apply dark:of-fill-white of-fill-stone-500 of-text-stone-500 dark:of-text-white enabled:hover:of-bg-stone-500/20 dark:enabled:hover:of-bg-stone-500/30 focus:of-ring-2 focus:of-ring-stone-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}

.button--primary.button--red {
  @apply of-shadow-md of-fill-white dark:of-fill-slate-900 of-bg-red-500 enabled:hover:of-bg-red-600 dark:enabled:hover:of-bg-red-600 of-text-white dark:of-text-slate-900 dark:of-bg-red-500 hover:of-shadow-none focus:of-ring-2 focus:of-ring-red-400 dark:focus:of-ring-red-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--secondary.button--red {
  @apply dark:of-fill-white of-fill-red-500 of-text-red-500 of-bg-white of-border of-border-red-300 enabled:hover:of-shadow-sm enabled:hover:of-shadow-red-300 dark:enabled:hover:of-shadow-none dark:of-text-white dark:of-bg-white/10 dark:hover:of-bg-white/20 dark:of-border-none focus:of-ring-2 focus:of-ring-red-400 dark:focus:of-ring-red-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--tertiary.button--red {
  @apply dark:of-fill-white of-fill-red-500 of-text-red-500 dark:of-text-white enabled:hover:of-bg-red-500/20 dark:enabled:hover:of-bg-red-500/30 focus:of-ring-2 focus:of-ring-red-400 dark:focus:of-ring-red-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}

.button--primary.button--orange {
  @apply of-shadow-md of-fill-white dark:of-fill-slate-900 of-bg-orange-500 enabled:hover:of-bg-orange-600 dark:enabled:hover:of-bg-orange-600 of-text-white dark:of-text-slate-900 dark:of-bg-orange-500 hover:of-shadow-none focus:of-ring-2 focus:of-ring-orange-400 dark:focus:of-ring-orange-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--secondary.button--orange {
  @apply dark:of-fill-white of-fill-orange-500 of-text-orange-500 of-bg-white of-border of-border-orange-300 enabled:hover:of-shadow-sm enabled:hover:of-shadow-orange-300 dark:enabled:hover:of-shadow-none dark:of-text-white dark:of-bg-white/10 dark:hover:of-bg-white/20 dark:of-border-none focus:of-ring-2 focus:of-ring-orange-400 dark:focus:of-ring-orange-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--tertiary.button--orange {
  @apply dark:of-fill-white of-fill-orange-500 of-text-orange-500 dark:of-text-white enabled:hover:of-bg-orange-500/20 dark:enabled:hover:of-bg-orange-500/30 focus:of-ring-2 focus:of-ring-orange-400 dark:focus:of-ring-orange-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}

.button--primary.button--amber {
  @apply of-shadow-md of-fill-white dark:of-fill-slate-900 of-bg-amber-500 enabled:hover:of-bg-amber-600 of-text-white dark:of-text-slate-900 dark:of-bg-amber-500 hover:of-shadow-none focus:of-ring-2 focus:of-ring-amber-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--secondary.button--amber {
  @apply dark:of-fill-white of-fill-amber-500 of-text-amber-500 of-bg-white of-border of-border-amber-300 enabled:hover:of-shadow-sm enabled:hover:of-shadow-amber-300 dark:enabled:hover:of-shadow-none dark:of-text-white dark:of-bg-white/10 dark:hover:of-bg-white/20 dark:of-border-none focus:of-ring-2 focus:of-ring-amber-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--tertiary.button--amber {
  @apply dark:of-fill-white of-fill-amber-500 of-text-amber-500 dark:of-text-white enabled:hover:of-bg-amber-500/20 dark:enabled:hover:of-bg-amber-500/30 focus:of-ring-2 focus:of-ring-amber-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}

.button--primary.button--yellow {
  @apply of-shadow-md of-fill-white dark:of-fill-slate-900 of-bg-yellow-400 enabled:hover:of-bg-yellow-500 dark:enabled:hover:of-bg-yellow-600 of-text-white dark:of-text-slate-900 dark:of-bg-yellow-400 hover:of-shadow-none focus:of-ring-2 focus:of-ring-yellow-400 dark:focus:of-ring-yellow-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--secondary.button--yellow {
  @apply dark:of-fill-white of-fill-yellow-500 of-text-yellow-500 of-bg-white of-border of-border-yellow-300 enabled:hover:of-shadow-sm enabled:hover:of-shadow-yellow-300 dark:enabled:hover:of-shadow-none dark:of-text-white dark:of-bg-white/10 dark:hover:of-bg-white/20 dark:of-border-none focus:of-ring-2 focus:of-ring-yellow-400 dark:focus:of-ring-yellow-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--tertiary.button--yellow {
  @apply dark:of-fill-white of-fill-yellow-500 of-text-yellow-500 dark:of-text-white enabled:hover:of-bg-yellow-500/20 dark:enabled:hover:of-bg-yellow-500/30 focus:of-ring-2 focus:of-ring-yellow-400 dark:focus:of-ring-yellow-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}

.button--primary.button--lime {
  @apply of-shadow-md of-fill-white dark:of-fill-slate-900 of-bg-lime-500 enabled:hover:of-bg-lime-600 of-text-white dark:of-text-slate-900 dark:of-bg-lime-500 hover:of-shadow-none focus:of-ring-2 focus:of-ring-lime-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--secondary.button--lime {
  @apply dark:of-fill-white of-fill-lime-500 of-text-lime-500 of-bg-white of-border of-border-lime-300 enabled:hover:of-shadow-sm enabled:hover:of-shadow-lime-300 dark:enabled:hover:of-shadow-none dark:of-text-white dark:of-bg-white/10 dark:hover:of-bg-white/20 dark:of-border-none focus:of-ring-2 focus:of-ring-lime-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--tertiary.button--lime {
  @apply dark:of-fill-white of-fill-lime-500 of-text-lime-500 dark:of-text-white enabled:hover:of-bg-lime-500/20 dark:enabled:hover:of-bg-lime-500/30 focus:of-ring-2 focus:of-ring-lime-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}

.button--primary.button--green {
  @apply of-shadow-md of-fill-white dark:of-fill-slate-900 of-bg-green-500 enabled:hover:of-bg-green-600 dark:enabled:hover:of-bg-green-600 of-text-white dark:of-text-slate-900 dark:of-bg-green-500 hover:of-shadow-none focus:of-ring-2 focus:of-ring-green-400 dark:focus:of-ring-green-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--secondary.button--green {
  @apply dark:of-fill-white of-fill-green-500 of-text-green-500 of-bg-white of-border of-border-green-300 enabled:hover:of-shadow-sm enabled:hover:of-shadow-green-300 dark:enabled:hover:of-shadow-none dark:of-text-white dark:of-bg-white/10 dark:hover:of-bg-white/20 dark:of-border-none focus:of-ring-2 focus:of-ring-green-400 dark:focus:of-ring-green-400  of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--tertiary.button--green {
  @apply dark:of-fill-white of-fill-green-500 of-text-green-500 dark:of-text-white enabled:hover:of-bg-green-500/20 dark:enabled:hover:of-bg-green-500/30 focus:of-ring-2 focus:of-ring-green-400 dark:focus:of-ring-green-400  of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}

.button--primary.button--emerald {
  @apply of-shadow-md of-fill-white dark:of-fill-slate-900 of-bg-emerald-500 enabled:hover:of-bg-emerald-600 of-text-white dark:of-text-slate-900 dark:of-bg-emerald-500 hover:of-shadow-none focus:of-ring-2 focus:of-ring-emerald-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--secondary.button--emerald {
  @apply dark:of-fill-white of-fill-emerald-500 of-text-emerald-500 of-bg-white of-border of-border-emerald-300 enabled:hover:of-shadow-sm enabled:hover:of-shadow-emerald-300 dark:enabled:hover:of-shadow-none dark:of-text-white dark:of-bg-white/10 dark:hover:of-bg-white/20 dark:of-border-none focus:of-ring-2 focus:of-ring-emerald-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--tertiary.button--emerald {
  @apply dark:of-fill-white of-fill-emerald-500 of-text-emerald-500 dark:of-text-white enabled:hover:of-bg-emerald-500/20 dark:enabled:hover:of-bg-emerald-500/30 focus:of-ring-2 focus:of-ring-emerald-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}

.button--primary.button--teal {
  @apply of-shadow-md of-fill-white dark:of-fill-slate-900 of-bg-teal-500 enabled:hover:of-bg-teal-600 of-text-white dark:of-text-slate-900 dark:of-bg-teal-500 hover:of-shadow-none focus:of-ring-2 focus:of-ring-teal-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--secondary.button--teal {
  @apply dark:of-fill-white of-fill-teal-500 of-text-teal-500 of-bg-white of-border of-border-teal-300 enabled:hover:of-shadow-sm enabled:hover:of-shadow-teal-300 dark:enabled:hover:of-shadow-none dark:of-text-white dark:of-bg-white/10 dark:hover:of-bg-white/20 dark:of-border-none focus:of-ring-2 focus:of-ring-teal-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--tertiary.button--teal {
  @apply dark:of-fill-white of-fill-teal-500 of-text-teal-500 dark:of-text-white enabled:hover:of-bg-teal-500/20 dark:enabled:hover:of-bg-teal-500/30 focus:of-ring-2 focus:of-ring-teal-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}

.button--primary.button--cyan {
  @apply of-shadow-md of-fill-white dark:of-fill-slate-900 of-bg-cyan-500 enabled:hover:of-bg-cyan-600 dark:enabled:hover:of-bg-cyan-600 of-text-white dark:of-text-slate-900 dark:of-bg-cyan-300 hover:of-shadow-none focus:of-ring-2 focus:of-ring-cyan-400 dark:focus:of-ring-cyan-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--secondary.button--cyan {
  @apply dark:of-fill-white of-fill-cyan-500 of-text-cyan-500 of-bg-white of-border of-border-cyan-300 enabled:hover:of-shadow-sm enabled:hover:of-shadow-cyan-300 dark:enabled:hover:of-shadow-none dark:of-text-white dark:of-bg-white/10 dark:hover:of-bg-white/20 dark:of-border-none focus:of-ring-2 focus:of-ring-cyan-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--tertiary.button--cyan {
  @apply dark:of-fill-white of-fill-cyan-500 of-text-cyan-500 dark:of-text-white enabled:hover:of-bg-cyan-500/20 dark:enabled:hover:of-bg-cyan-500/30 focus:of-ring-2 focus:of-ring-cyan-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800 dark:focus:of-ring-cyan-400;
}

.button--primary.button--sky {
  @apply of-shadow-md of-fill-white dark:of-fill-slate-900 of-bg-sky-500 enabled:hover:of-bg-sky-600 dark:enabled:hover:of-bg-sky-500 of-text-white dark:of-text-slate-900 dark:of-bg-sky-400 hover:of-shadow-none focus:of-ring-2 focus:of-ring-sky-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--secondary.button--sky {
  @apply dark:of-fill-white of-fill-sky-500 of-text-sky-500 of-bg-white of-border of-border-sky-300 enabled:hover:of-shadow-sm enabled:hover:of-shadow-sky-300 dark:enabled:hover:of-shadow-none dark:of-text-white dark:of-bg-white/10 dark:hover:of-bg-white/20 dark:of-border-none focus:of-ring-2 focus:of-ring-sky-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--tertiary.button--sky {
  @apply dark:of-fill-white of-fill-sky-500 of-text-sky-500 dark:of-text-white enabled:hover:of-bg-sky-500/20 dark:enabled:hover:of-bg-sky-400/30 focus:of-ring-2 focus:of-ring-sky-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}

.button--primary.button--blue {
  @apply of-shadow-md of-fill-white dark:of-fill-slate-900 of-bg-blue-500 enabled:hover:of-bg-blue-600 dark:enabled:hover:of-bg-blue-600 of-text-white dark:of-text-slate-900 dark:of-bg-blue-500 hover:of-shadow-none focus:of-ring-2 focus:of-ring-blue-400 dark:focus:of-ring-blue-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--secondary.button--blue {
  @apply dark:of-fill-white of-fill-blue-500 of-text-blue-500 of-bg-white of-border of-border-blue-300 enabled:hover:of-shadow-sm enabled:hover:of-shadow-blue-300 dark:enabled:hover:of-shadow-none dark:of-text-white dark:of-bg-white/10 dark:hover:of-bg-white/20 dark:of-border-none focus:of-ring-2 focus:of-ring-blue-400 dark:focus:of-ring-blue-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--tertiary.button--blue {
  @apply dark:of-fill-white of-fill-blue-500 of-text-blue-500 dark:of-text-white enabled:hover:of-bg-blue-500/20 dark:enabled:hover:of-bg-blue-500/30 focus:of-ring-2 focus:of-ring-blue-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800 dark:focus:of-ring-blue-400;
}

 .button--primary.button--indigo {
  @apply of-shadow-md of-fill-white dark:of-fill-slate-900 of-bg-indigo-500 enabled:hover:of-bg-indigo-600 of-text-white dark:of-text-slate-900 hover:of-shadow-none focus:of-ring-2 focus:of-ring-indigo-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800 dark:of-bg-indigo-500  dark:hover:of-bg-indigo-600  dark:focus:of-ring-indigo-400;
}
.button--secondary.button--indigo {
  @apply dark:of-fill-white of-fill-indigo-500 of-text-indigo-500 of-bg-white of-border of-border-indigo-300 enabled:hover:of-shadow-sm enabled:hover:of-shadow-indigo-300 focus:of-ring-2 focus:of-ring-indigo-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800  dark:of-bg-white/10 dark:hover:of-bg-white/20 dark:focus:of-ring-indigo-400 dark:enabled:hover:of-shadow-none dark:of-text-white dark:of-border-none;
}
.button--tertiary.button--indigo {
  @apply dark:of-fill-white of-fill-indigo-500 of-text-indigo-500 dark:of-text-white enabled:hover:of-bg-indigo-500/20 focus:of-ring-2 focus:of-ring-indigo-400 of-ring-offset-2 of-ring-offset-slate-100 dark:enabled:hover:of-bg-indigo-500/30  dark:of-ring-offset-slate-800 dark:focus:of-ring-indigo-400;
} 

.button--primary.button--violet {
  @apply of-shadow-md of-fill-white dark:of-fill-slate-900 of-bg-violet-500 enabled:hover:of-bg-violet-600 of-text-white dark:of-text-slate-900 dark:of-bg-violet-500 hover:of-shadow-none focus:of-ring-2 focus:of-ring-violet-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--secondary.button--violet {
  @apply dark:of-fill-white of-fill-violet-500 of-text-violet-500 of-bg-white of-border of-border-violet-300 enabled:hover:of-shadow-sm enabled:hover:of-shadow-violet-300 dark:enabled:hover:of-shadow-none dark:of-text-white dark:of-bg-white/10 dark:hover:of-bg-white/20 dark:of-border-none focus:of-ring-2 focus:of-ring-violet-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--tertiary.button--violet {
  @apply dark:of-fill-white of-fill-violet-500 of-text-violet-500 dark:of-text-white enabled:hover:of-bg-violet-500/20 dark:enabled:hover:of-bg-violet-500/30 focus:of-ring-2 focus:of-ring-violet-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}

.button--primary.button--purple {
  @apply of-shadow-md of-fill-white dark:of-fill-slate-900 of-bg-purple-500 enabled:hover:of-bg-purple-600 dark:enabled:hover:of-bg-purple-600 of-text-white dark:of-text-slate-900 dark:of-bg-purple-500 hover:of-shadow-none focus:of-ring-2 focus:of-ring-purple-400 dark:focus:of-ring-purple-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--secondary.button--purple {
  @apply dark:of-fill-white of-fill-purple-500 of-text-purple-500 of-bg-white of-border of-border-purple-300 dark:of-border-purple-300 enabled:hover:of-shadow-sm enabled:hover:of-shadow-purple-300 dark:enabled:hover:of-shadow-purple-300 dark:enabled:hover:of-shadow-none dark:of-text-white dark:of-bg-white/10 dark:hover:of-bg-white/20 dark:of-border-none focus:of-ring-2 focus:of-ring-purple-400 dark:focus:of-ring-purple-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--tertiary.button--purple {
  @apply dark:of-fill-white of-fill-purple-500 of-text-purple-500 dark:of-text-white enabled:hover:of-bg-purple-500/20 dark:enabled:hover:of-bg-purple-500/30 focus:of-ring-2 focus:of-ring-purple-400 dark:focus:of-ring-purple-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}

.button--primary.button--fuchsia {
  @apply of-shadow-md of-fill-white dark:of-fill-slate-900 of-bg-fuchsia-500 enabled:hover:of-bg-fuchsia-600 of-text-white dark:of-text-slate-900 dark:of-bg-fuchsia-500 hover:of-shadow-none focus:of-ring-2 focus:of-ring-fuchsia-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--secondary.button--fuchsia {
  @apply dark:of-fill-white of-fill-fuchsia-500 of-text-fuchsia-500 of-bg-white of-border of-border-fuchsia-300 enabled:hover:of-shadow-sm enabled:hover:of-shadow-fuchsia-300 dark:enabled:hover:of-shadow-none dark:of-text-white dark:of-bg-white/10 dark:hover:of-bg-white/20 dark:of-border-none focus:of-ring-2 focus:of-ring-fuchsia-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--tertiary.button--fuchsia {
  @apply dark:of-fill-white of-fill-fuchsia-500 of-text-fuchsia-500 dark:of-text-white enabled:hover:of-bg-fuchsia-500/20 dark:enabled:hover:of-bg-fuchsia-500/30 focus:of-ring-2 focus:of-ring-fuchsia-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}

.button--primary.button--pink {
  @apply of-shadow-md of-fill-white dark:of-fill-slate-900 of-bg-pink-500 enabled:hover:of-bg-pink-600 dark:enabled:hover:of-bg-pink-600 of-text-white dark:of-text-slate-900 dark:of-bg-pink-500 hover:of-shadow-none focus:of-ring-2 focus:of-ring-pink-400 dark:focus:of-ring-pink-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--secondary.button--pink {
  @apply dark:of-fill-white of-fill-pink-500 of-text-pink-500 of-bg-white of-border of-border-pink-300 enabled:hover:of-shadow-sm enabled:hover:of-shadow-pink-300 dark:enabled:hover:of-shadow-none dark:of-text-white dark:of-bg-white/10 dark:hover:of-bg-white/20 dark:of-border-none focus:of-ring-2 focus:of-ring-pink-400 dark:focus:of-ring-pink-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--tertiary.button--pink {
  @apply dark:of-fill-white of-fill-pink-500 of-text-pink-500 dark:of-text-white enabled:hover:of-bg-pink-500/20 dark:enabled:hover:of-bg-pink-500/30 focus:of-ring-2 focus:of-ring-pink-400 dark:focus:of-ring-pink-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}

.button--primary.button--rose {
  @apply of-shadow-md of-fill-white dark:of-fill-slate-900 of-bg-rose-500 enabled:hover:of-bg-rose-600 of-text-white dark:of-text-slate-900 dark:of-bg-rose-500 hover:of-shadow-none focus:of-ring-2 focus:of-ring-rose-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--secondary.button--rose {
  @apply dark:of-fill-white of-fill-rose-500 of-text-rose-500 of-bg-white of-border of-border-rose-300 enabled:hover:of-shadow-sm enabled:hover:of-shadow-rose-300 dark:enabled:hover:of-shadow-none dark:of-text-white dark:of-bg-white/10 dark:hover:of-bg-white/20 dark:of-border-none focus:of-ring-2 focus:of-ring-rose-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}
.button--tertiary.button--rose {
  @apply dark:of-fill-white of-fill-rose-500 of-text-rose-500 dark:of-text-white enabled:hover:of-bg-rose-500/20 dark:enabled:hover:of-bg-rose-500/30 focus:of-ring-2 focus:of-ring-rose-400 of-ring-offset-2 of-ring-offset-slate-100 dark:of-ring-offset-slate-800;
}*/
</style>
