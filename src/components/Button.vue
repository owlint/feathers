<template>
  <button
    :disabled="disabled"
    type="button"
    :class="classes"
    @click="onClick"
    class="rounded font-semibold disabled:opacity-50 outline-none"
  >
    <div class="flex items-center gap-1">
      <font-awesome-icon
        class="animate-spin"
        v-if="loading"
        :icon="['fad', 'spinner-third']"
      />
      <slot v-else name="icon"></slot>
      <slot>
        {{ label }}
      </slot>
    </div>
  </button>
</template>

<script>
import { reactive, computed } from 'vue'
import { COLORS } from '../enums/colors'

export default {
  props: {
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
  },

  emits: ['click'],

  setup(props, { emit }) {
    props = reactive(props)

    return {
      classes: computed(() => ({
        [`button--${props.type || 'primary'}`]: true,
        [`button--${props.color || 'indigo'}`]: true,
        [`button--${props.size || 'md'}`]: true,
      })),
      onClick() {
        if (!props.disabled && !props.loading) emit('click')
      },
    }
  },
}
</script>

<style scoped>
.button--xs {
  @apply text-xs px-2 py-1 font-normal;
}
.button--sm {
  @apply text-xs px-3 py-1.5;
}
.button--md {
  @apply text-sm px-4 py-1.5;
}
.button--lg {
  @apply text-lg px-5 py-2;
}
.button--xl {
  @apply text-xl px-7 py-3;
}
.button--primary.button--slate {
  @apply shadow-md bg-slate-500 enabled:hover:bg-slate-600 text-white dark:text-slate-900 dark:bg-slate-500 hover:shadow-none focus:ring-2 focus:ring-slate-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--secondary.button--slate {
  @apply text-slate-500 bg-white border border-slate-300 enabled:hover:shadow-sm enabled:hover:shadow-slate-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-slate-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--tertiary.button--slate {
  @apply text-slate-500 dark:text-white enabled:hover:bg-slate-500/20 dark:enabled:hover:bg-slate-500/30 focus:ring-2 focus:ring-slate-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}

.button--primary.button--gray {
  @apply shadow-md bg-gray-500 enabled:hover:bg-gray-600 text-white dark:text-slate-900 dark:bg-gray-500 hover:shadow-none focus:ring-2 focus:ring-gray-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--secondary.button--gray {
  @apply text-gray-500 bg-white border border-gray-300 enabled:hover:shadow-sm enabled:hover:shadow-gray-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-gray-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--tertiary.button--gray {
  @apply text-gray-500 dark:text-white enabled:hover:bg-gray-500/20 dark:enabled:hover:bg-gray-500/30 focus:ring-2 focus:ring-gray-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}

.button--primary.button--zinc {
  @apply shadow-md bg-zinc-500 enabled:hover:bg-zinc-600 text-white dark:text-slate-900 dark:bg-zinc-500 hover:shadow-none focus:ring-2 focus:ring-zinc-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--secondary.button--zinc {
  @apply text-zinc-500 bg-white border border-zinc-300 enabled:hover:shadow-sm enabled:hover:shadow-zinc-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-zinc-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--tertiary.button--zinc {
  @apply text-zinc-500 dark:text-white enabled:hover:bg-zinc-500/20 dark:enabled:hover:bg-zinc-500/30 focus:ring-2 focus:ring-zinc-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}

.button--primary.button--neutral {
  @apply shadow-md bg-neutral-500 enabled:hover:bg-neutral-600 text-white dark:text-slate-900 dark:bg-neutral-500 hover:shadow-none focus:ring-2 focus:ring-neutral-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--secondary.button--neutral {
  @apply text-neutral-500 bg-white border border-neutral-300 enabled:hover:shadow-sm enabled:hover:shadow-neutral-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-neutral-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--tertiary.button--neutral {
  @apply text-neutral-500 dark:text-white enabled:hover:bg-neutral-500/20 dark:enabled:hover:bg-neutral-500/30 focus:ring-2 focus:ring-neutral-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}

.button--primary.button--stone {
  @apply shadow-md bg-stone-500 enabled:hover:bg-stone-600 text-white dark:text-slate-900 dark:bg-stone-500 hover:shadow-none focus:ring-2 focus:ring-stone-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--secondary.button--stone {
  @apply text-stone-500 bg-white border border-stone-300 enabled:hover:shadow-sm enabled:hover:shadow-stone-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-stone-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--tertiary.button--stone {
  @apply text-stone-500 dark:text-white enabled:hover:bg-stone-500/20 dark:enabled:hover:bg-stone-500/30 focus:ring-2 focus:ring-stone-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}

.button--primary.button--red {
  @apply shadow-md bg-red-500 enabled:hover:bg-red-600 text-white dark:text-slate-900 dark:bg-red-500 hover:shadow-none focus:ring-2 focus:ring-red-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--secondary.button--red {
  @apply text-red-500 bg-white border border-red-300 enabled:hover:shadow-sm enabled:hover:shadow-red-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-red-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--tertiary.button--red {
  @apply text-red-500 dark:text-white enabled:hover:bg-red-500/20 dark:enabled:hover:bg-red-500/30 focus:ring-2 focus:ring-red-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}

.button--primary.button--orange {
  @apply shadow-md bg-orange-500 enabled:hover:bg-orange-600 text-white dark:text-slate-900 dark:bg-orange-500 hover:shadow-none focus:ring-2 focus:ring-orange-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--secondary.button--orange {
  @apply text-orange-500 bg-white border border-orange-300 enabled:hover:shadow-sm enabled:hover:shadow-orange-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-orange-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--tertiary.button--orange {
  @apply text-orange-500 dark:text-white enabled:hover:bg-orange-500/20 dark:enabled:hover:bg-orange-500/30 focus:ring-2 focus:ring-orange-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}

.button--primary.button--amber {
  @apply shadow-md bg-amber-500 enabled:hover:bg-amber-600 text-white dark:text-slate-900 dark:bg-amber-500 hover:shadow-none focus:ring-2 focus:ring-amber-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--secondary.button--amber {
  @apply text-amber-500 bg-white border border-amber-300 enabled:hover:shadow-sm enabled:hover:shadow-amber-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-amber-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--tertiary.button--amber {
  @apply text-amber-500 dark:text-white enabled:hover:bg-amber-500/20 dark:enabled:hover:bg-amber-500/30 focus:ring-2 focus:ring-amber-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}

.button--primary.button--yellow {
  @apply shadow-md bg-yellow-500 enabled:hover:bg-yellow-600 text-white dark:text-slate-900 dark:bg-yellow-500 hover:shadow-none focus:ring-2 focus:ring-yellow-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--secondary.button--yellow {
  @apply text-yellow-500 bg-white border border-yellow-300 enabled:hover:shadow-sm enabled:hover:shadow-yellow-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-yellow-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--tertiary.button--yellow {
  @apply text-yellow-500 dark:text-white enabled:hover:bg-yellow-500/20 dark:enabled:hover:bg-yellow-500/30 focus:ring-2 focus:ring-yellow-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}

.button--primary.button--lime {
  @apply shadow-md bg-lime-500 enabled:hover:bg-lime-600 text-white dark:text-slate-900 dark:bg-lime-500 hover:shadow-none focus:ring-2 focus:ring-lime-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--secondary.button--lime {
  @apply text-lime-500 bg-white border border-lime-300 enabled:hover:shadow-sm enabled:hover:shadow-lime-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-lime-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--tertiary.button--lime {
  @apply text-lime-500 dark:text-white enabled:hover:bg-lime-500/20 dark:enabled:hover:bg-lime-500/30 focus:ring-2 focus:ring-lime-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}

.button--primary.button--green {
  @apply shadow-md bg-green-500 enabled:hover:bg-green-600 text-white dark:text-slate-900 dark:bg-green-500 hover:shadow-none focus:ring-2 focus:ring-green-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--secondary.button--green {
  @apply text-green-500 bg-white border border-green-300 enabled:hover:shadow-sm enabled:hover:shadow-green-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-green-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--tertiary.button--green {
  @apply text-green-500 dark:text-white enabled:hover:bg-green-500/20 dark:enabled:hover:bg-green-500/30 focus:ring-2 focus:ring-green-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}

.button--primary.button--emerald {
  @apply shadow-md bg-emerald-500 enabled:hover:bg-emerald-600 text-white dark:text-slate-900 dark:bg-emerald-500 hover:shadow-none focus:ring-2 focus:ring-emerald-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--secondary.button--emerald {
  @apply text-emerald-500 bg-white border border-emerald-300 enabled:hover:shadow-sm enabled:hover:shadow-emerald-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-emerald-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--tertiary.button--emerald {
  @apply text-emerald-500 dark:text-white enabled:hover:bg-emerald-500/20 dark:enabled:hover:bg-emerald-500/30 focus:ring-2 focus:ring-emerald-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}

.button--primary.button--teal {
  @apply shadow-md bg-teal-500 enabled:hover:bg-teal-600 text-white dark:text-slate-900 dark:bg-teal-500 hover:shadow-none focus:ring-2 focus:ring-teal-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--secondary.button--teal {
  @apply text-teal-500 bg-white border border-teal-300 enabled:hover:shadow-sm enabled:hover:shadow-teal-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-teal-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--tertiary.button--teal {
  @apply text-teal-500 dark:text-white enabled:hover:bg-teal-500/20 dark:enabled:hover:bg-teal-500/30 focus:ring-2 focus:ring-teal-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}

.button--primary.button--cyan {
  @apply shadow-md bg-cyan-500 enabled:hover:bg-cyan-600 text-white dark:text-slate-900 dark:bg-cyan-500 hover:shadow-none focus:ring-2 focus:ring-cyan-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--secondary.button--cyan {
  @apply text-cyan-500 bg-white border border-cyan-300 enabled:hover:shadow-sm enabled:hover:shadow-cyan-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-cyan-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--tertiary.button--cyan {
  @apply text-cyan-500 dark:text-white enabled:hover:bg-cyan-500/20 dark:enabled:hover:bg-cyan-500/30 focus:ring-2 focus:ring-cyan-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}

.button--primary.button--sky {
  @apply shadow-md bg-sky-500 enabled:hover:bg-sky-600 text-white dark:text-slate-900 dark:bg-sky-500 hover:shadow-none focus:ring-2 focus:ring-sky-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--secondary.button--sky {
  @apply text-sky-500 bg-white border border-sky-300 enabled:hover:shadow-sm enabled:hover:shadow-sky-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-sky-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--tertiary.button--sky {
  @apply text-sky-500 dark:text-white enabled:hover:bg-sky-500/20 dark:enabled:hover:bg-sky-500/30 focus:ring-2 focus:ring-sky-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}

.button--primary.button--blue {
  @apply shadow-md bg-blue-500 enabled:hover:bg-blue-600 text-white dark:text-slate-900 dark:bg-blue-500 hover:shadow-none focus:ring-2 focus:ring-blue-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--secondary.button--blue {
  @apply text-blue-500 bg-white border border-blue-300 enabled:hover:shadow-sm enabled:hover:shadow-blue-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-blue-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--tertiary.button--blue {
  @apply text-blue-500 dark:text-white enabled:hover:bg-blue-500/20 dark:enabled:hover:bg-blue-500/30 focus:ring-2 focus:ring-blue-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}

.button--primary.button--indigo {
  @apply shadow-md bg-indigo-500 enabled:hover:bg-indigo-600 text-white dark:text-slate-900 dark:bg-indigo-500 hover:shadow-none focus:ring-2 focus:ring-indigo-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--secondary.button--indigo {
  @apply text-indigo-500 bg-white border border-indigo-300 enabled:hover:shadow-sm enabled:hover:shadow-indigo-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-indigo-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--tertiary.button--indigo {
  @apply text-indigo-500 dark:text-white enabled:hover:bg-indigo-500/20 dark:enabled:hover:bg-indigo-500/30 focus:ring-2 focus:ring-indigo-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}

.button--primary.button--violet {
  @apply shadow-md bg-violet-500 enabled:hover:bg-violet-600 text-white dark:text-slate-900 dark:bg-violet-500 hover:shadow-none focus:ring-2 focus:ring-violet-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--secondary.button--violet {
  @apply text-violet-500 bg-white border border-violet-300 enabled:hover:shadow-sm enabled:hover:shadow-violet-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-violet-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--tertiary.button--violet {
  @apply text-violet-500 dark:text-white enabled:hover:bg-violet-500/20 dark:enabled:hover:bg-violet-500/30 focus:ring-2 focus:ring-violet-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}

.button--primary.button--purple {
  @apply shadow-md bg-purple-500 enabled:hover:bg-purple-600 text-white dark:text-slate-900 dark:bg-purple-500 hover:shadow-none focus:ring-2 focus:ring-purple-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--secondary.button--purple {
  @apply text-purple-500 bg-white border border-purple-300 enabled:hover:shadow-sm enabled:hover:shadow-purple-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-purple-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--tertiary.button--purple {
  @apply text-purple-500 dark:text-white enabled:hover:bg-purple-500/20 dark:enabled:hover:bg-purple-500/30 focus:ring-2 focus:ring-purple-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}

.button--primary.button--fuchsia {
  @apply shadow-md bg-fuchsia-500 enabled:hover:bg-fuchsia-600 text-white dark:text-slate-900 dark:bg-fuchsia-500 hover:shadow-none focus:ring-2 focus:ring-fuchsia-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--secondary.button--fuchsia {
  @apply text-fuchsia-500 bg-white border border-fuchsia-300 enabled:hover:shadow-sm enabled:hover:shadow-fuchsia-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-fuchsia-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--tertiary.button--fuchsia {
  @apply text-fuchsia-500 dark:text-white enabled:hover:bg-fuchsia-500/20 dark:enabled:hover:bg-fuchsia-500/30 focus:ring-2 focus:ring-fuchsia-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}

.button--primary.button--pink {
  @apply shadow-md bg-pink-500 enabled:hover:bg-pink-600 text-white dark:text-slate-900 dark:bg-pink-500 hover:shadow-none focus:ring-2 focus:ring-pink-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--secondary.button--pink {
  @apply text-pink-500 bg-white border border-pink-300 enabled:hover:shadow-sm enabled:hover:shadow-pink-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-pink-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--tertiary.button--pink {
  @apply text-pink-500 dark:text-white enabled:hover:bg-pink-500/20 dark:enabled:hover:bg-pink-500/30 focus:ring-2 focus:ring-pink-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}

.button--primary.button--rose {
  @apply shadow-md bg-rose-500 enabled:hover:bg-rose-600 text-white dark:text-slate-900 dark:bg-rose-500 hover:shadow-none focus:ring-2 focus:ring-rose-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--secondary.button--rose {
  @apply text-rose-500 bg-white border border-rose-300 enabled:hover:shadow-sm enabled:hover:shadow-rose-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-rose-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
.button--tertiary.button--rose {
  @apply text-rose-500 dark:text-white enabled:hover:bg-rose-500/20 dark:enabled:hover:bg-rose-500/30 focus:ring-2 focus:ring-rose-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-slate-800;
}
</style>
