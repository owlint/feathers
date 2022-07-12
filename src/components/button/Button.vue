<template>
  <button
    :disabled="disabled"
    type="button"
    :class="classes"
    @click="onClick"
    class="rounded font-semibold disabled:opacity-50 outline-none"
  >
    <div class="flex items-center gap-2">
      <div v-if="loading">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
          class="animate-spin w-4 h-4"
        >
          <path
            class="fa-primary"
            d="M256 32C256 14.33 270.3 0 288 0C429.4 0 544 114.6 544 256C544 302.6 531.5 346.4 509.7 384C500.9 399.3 481.3 404.6 465.1 395.7C450.7 386.9 445.5 367.3 454.3 351.1C470.6 323.8 480 291 480 255.1C480 149.1 394 63.1 288 63.1C270.3 63.1 256 49.67 256 31.1V32z"
          />
          <path
            class="fa-secondary opacity-20"
            d="M287.1 64C181.1 64 95.1 149.1 95.1 256C95.1 362 181.1 448 287.1 448C358.1 448 419.3 410.5 452.9 354.4L453 354.5C446.1 369.4 451.5 387.3 465.1 395.7C481.3 404.6 500.9 399.3 509.7 384C509.9 383.7 510.1 383.4 510.2 383.1C466.1 460.1 383.1 512 288 512C146.6 512 32 397.4 32 256C32 114.6 146.6 0 288 0C270.3 0 256 14.33 256 32C256 49.67 270.3 64 288 64H287.1z"
          />
        </svg>
      </div>

      <slot v-else name="icon"></slot>
      <slot> {{ label }} </slot>
    </div>
  </button>
</template>

<script>
import { reactive, computed } from 'vue'
import { COLORS } from '../../enums/colors'

export default {
  name: 'Button',
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
  @apply shadow-md fill-white dark:fill-slate-900 bg-slate-500 enabled:hover:bg-slate-600 text-white dark:text-nosferatu-900 dark:bg-slate-500 hover:shadow-none focus:ring-2 focus:ring-slate-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--secondary.button--slate {
  @apply dark:fill-white fill-slate-500 text-slate-500 bg-white border border-slate-300 enabled:hover:shadow-sm enabled:hover:shadow-slate-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-slate-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--tertiary.button--slate {
  @apply dark:fill-white fill-slate-500 text-slate-500 dark:text-white enabled:hover:bg-slate-500/20 dark:enabled:hover:bg-slate-500/30 focus:ring-2 focus:ring-slate-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}

.button--primary.button--gray {
  @apply shadow-md fill-white dark:fill-slate-900 bg-gray-500 enabled:hover:bg-gray-600 text-white dark:text-nosferatu-900 dark:bg-gray-500 hover:shadow-none focus:ring-2 focus:ring-gray-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--secondary.button--gray {
  @apply dark:fill-white fill-gray-500 text-gray-500 bg-white border border-gray-300 enabled:hover:shadow-sm enabled:hover:shadow-gray-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-gray-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--tertiary.button--gray {
  @apply dark:fill-white fill-gray-500 text-gray-500 dark:text-white enabled:hover:bg-gray-500/20 dark:enabled:hover:bg-gray-500/30 focus:ring-2 focus:ring-gray-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}

.button--primary.button--zinc {
  @apply shadow-md fill-white dark:fill-slate-900 bg-zinc-500 enabled:hover:bg-zinc-600 text-white dark:text-nosferatu-900 dark:bg-zinc-500 hover:shadow-none focus:ring-2 focus:ring-zinc-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--secondary.button--zinc {
  @apply dark:fill-white fill-zinc-500 text-zinc-500 bg-white border border-zinc-300 enabled:hover:shadow-sm enabled:hover:shadow-zinc-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-zinc-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--tertiary.button--zinc {
  @apply dark:fill-white fill-zinc-500 text-zinc-500 dark:text-white enabled:hover:bg-zinc-500/20 dark:enabled:hover:bg-zinc-500/30 focus:ring-2 focus:ring-zinc-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}

.button--primary.button--neutral {
  @apply shadow-md fill-white dark:fill-slate-900 bg-neutral-500 enabled:hover:bg-neutral-600 text-white dark:text-nosferatu-900 dark:bg-neutral-500 hover:shadow-none focus:ring-2 focus:ring-neutral-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--secondary.button--neutral {
  @apply dark:fill-white fill-neutral-500 text-neutral-500 bg-white border border-neutral-300 enabled:hover:shadow-sm enabled:hover:shadow-neutral-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-neutral-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--tertiary.button--neutral {
  @apply dark:fill-white fill-neutral-500 text-neutral-500 dark:text-white enabled:hover:bg-neutral-500/20 dark:enabled:hover:bg-neutral-500/30 focus:ring-2 focus:ring-neutral-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}

.button--primary.button--stone {
  @apply shadow-md fill-white dark:fill-slate-900 bg-stone-500 enabled:hover:bg-stone-600 text-white dark:text-nosferatu-900 dark:bg-stone-500 hover:shadow-none focus:ring-2 focus:ring-stone-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--secondary.button--stone {
  @apply dark:fill-white fill-stone-500 text-stone-500 bg-white border border-stone-300 enabled:hover:shadow-sm enabled:hover:shadow-stone-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-stone-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--tertiary.button--stone {
  @apply dark:fill-white fill-stone-500 text-stone-500 dark:text-white enabled:hover:bg-stone-500/20 dark:enabled:hover:bg-stone-500/30 focus:ring-2 focus:ring-stone-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}

.button--primary.button--red {
  @apply shadow-md fill-white dark:fill-slate-900 bg-red-500 enabled:hover:bg-red-600 dark:enabled:hover:bg-marcelin-600 text-white dark:text-nosferatu-900 dark:bg-red-500 hover:shadow-none focus:ring-2 focus:ring-red-400 dark:focus:ring-marcelin-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--secondary.button--red {
  @apply dark:fill-white fill-red-500 text-red-500 bg-white border border-red-300 enabled:hover:shadow-sm enabled:hover:shadow-red-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-red-400 dark:focus:ring-marcelin-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--tertiary.button--red {
  @apply dark:fill-white fill-red-500 text-red-500 dark:text-white enabled:hover:bg-red-500/20 dark:enabled:hover:bg-red-500/30 focus:ring-2 focus:ring-red-400 dark:focus:ring-marcelin-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}

.button--primary.button--orange {
  @apply shadow-md fill-white dark:fill-slate-900 bg-orange-500 enabled:hover:bg-orange-600 dark:enabled:hover:bg-morbius-600 text-white dark:text-nosferatu-900 dark:bg-morbius-500 hover:shadow-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-morbius-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--secondary.button--orange {
  @apply dark:fill-white fill-orange-500 text-orange-500 bg-white border border-orange-300 enabled:hover:shadow-sm enabled:hover:shadow-orange-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-orange-400 dark:focus:ring-morbius-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--tertiary.button--orange {
  @apply dark:fill-white fill-orange-500 text-orange-500 dark:text-white enabled:hover:bg-orange-500/20 dark:enabled:hover:bg-morbius-500/30 focus:ring-2 focus:ring-orange-400 dark:focus:ring-morbius-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}

.button--primary.button--amber {
  @apply shadow-md fill-white dark:fill-slate-900 bg-amber-500 enabled:hover:bg-amber-600 text-white dark:text-nosferatu-900 dark:bg-amber-500 hover:shadow-none focus:ring-2 focus:ring-amber-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--secondary.button--amber {
  @apply dark:fill-white fill-amber-500 text-amber-500 bg-white border border-amber-300 enabled:hover:shadow-sm enabled:hover:shadow-amber-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-amber-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--tertiary.button--amber {
  @apply dark:fill-white fill-amber-500 text-amber-500 dark:text-white enabled:hover:bg-amber-500/20 dark:enabled:hover:bg-amber-500/30 focus:ring-2 focus:ring-amber-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}

.button--primary.button--yellow {
  @apply shadow-md fill-white dark:fill-slate-900 bg-yellow-400 enabled:hover:bg-yellow-500 dark:enabled:hover:bg-lincoln-600 text-white dark:text-nosferatu-900 dark:bg-lincoln-400 hover:shadow-none focus:ring-2 focus:ring-yellow-400 dark:focus:ring-lincoln-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--secondary.button--yellow {
  @apply dark:fill-white fill-yellow-500 text-yellow-500 bg-white border border-yellow-300 enabled:hover:shadow-sm enabled:hover:shadow-yellow-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-yellow-400 dark:focus:ring-lincoln-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--tertiary.button--yellow {
  @apply dark:fill-white fill-yellow-500 text-yellow-500 dark:text-white enabled:hover:bg-yellow-500/20 dark:enabled:hover:bg-lincoln-500/30 focus:ring-2 focus:ring-yellow-400 dark:focus:ring-lincoln-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}

.button--primary.button--lime {
  @apply shadow-md fill-white dark:fill-slate-900 bg-lime-500 enabled:hover:bg-lime-600 text-white dark:text-nosferatu-900 dark:bg-lime-500 hover:shadow-none focus:ring-2 focus:ring-lime-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--secondary.button--lime {
  @apply dark:fill-white fill-lime-500 text-lime-500 bg-white border border-lime-300 enabled:hover:shadow-sm enabled:hover:shadow-lime-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-lime-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--tertiary.button--lime {
  @apply dark:fill-white fill-lime-500 text-lime-500 dark:text-white enabled:hover:bg-lime-500/20 dark:enabled:hover:bg-lime-500/30 focus:ring-2 focus:ring-lime-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}

.button--primary.button--green {
  @apply shadow-md fill-white dark:fill-slate-900 bg-green-500 enabled:hover:bg-green-600 dark:enabled:hover:bg-blade-600 text-white dark:text-nosferatu-900 dark:bg-blade-500 hover:shadow-none focus:ring-2 focus:ring-green-400 dark:focus:ring-blade-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--secondary.button--green {
  @apply dark:fill-white fill-green-500 text-green-500 bg-white border border-green-300 enabled:hover:shadow-sm enabled:hover:shadow-green-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-green-400 dark:focus:ring-blade-400  ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--tertiary.button--green {
  @apply dark:fill-white fill-green-500 text-green-500 dark:text-white enabled:hover:bg-green-500/20 dark:enabled:hover:bg-blade-500/30 focus:ring-2 focus:ring-green-400 dark:focus:ring-blade-400  ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}

.button--primary.button--emerald {
  @apply shadow-md fill-white dark:fill-slate-900 bg-emerald-500 enabled:hover:bg-emerald-600 text-white dark:text-nosferatu-900 dark:bg-emerald-500 hover:shadow-none focus:ring-2 focus:ring-emerald-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--secondary.button--emerald {
  @apply dark:fill-white fill-emerald-500 text-emerald-500 bg-white border border-emerald-300 enabled:hover:shadow-sm enabled:hover:shadow-emerald-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-emerald-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--tertiary.button--emerald {
  @apply dark:fill-white fill-emerald-500 text-emerald-500 dark:text-white enabled:hover:bg-emerald-500/20 dark:enabled:hover:bg-emerald-500/30 focus:ring-2 focus:ring-emerald-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}

.button--primary.button--teal {
  @apply shadow-md fill-white dark:fill-slate-900 bg-teal-500 enabled:hover:bg-teal-600 text-white dark:text-nosferatu-900 dark:bg-teal-500 hover:shadow-none focus:ring-2 focus:ring-teal-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--secondary.button--teal {
  @apply dark:fill-white fill-teal-500 text-teal-500 bg-white border border-teal-300 enabled:hover:shadow-sm enabled:hover:shadow-teal-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-teal-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--tertiary.button--teal {
  @apply dark:fill-white fill-teal-500 text-teal-500 dark:text-white enabled:hover:bg-teal-500/20 dark:enabled:hover:bg-teal-500/30 focus:ring-2 focus:ring-teal-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}

.button--primary.button--cyan {
  @apply shadow-md fill-white dark:fill-slate-900 bg-cyan-500 enabled:hover:bg-cyan-600 dark:enabled:hover:bg-vanHelsing-600 text-white dark:text-nosferatu-900 dark:bg-vanHelsing-300 hover:shadow-none focus:ring-2 focus:ring-cyan-400 dark:focus:ring-vanHelsing-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--secondary.button--cyan {
  @apply dark:fill-white fill-cyan-500 text-cyan-500 bg-white border border-cyan-300 enabled:hover:shadow-sm enabled:hover:shadow-cyan-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-cyan-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--tertiary.button--cyan {
  @apply dark:fill-white fill-cyan-500 text-cyan-500 dark:text-white enabled:hover:bg-cyan-500/20 dark:enabled:hover:bg-vanHelsing-500/30 focus:ring-2 focus:ring-cyan-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800 dark:focus:ring-vanHelsing-400;
}

.button--primary.button--sky {
  @apply shadow-md fill-white dark:fill-slate-900 bg-sky-500 enabled:hover:bg-sky-600 dark:enabled:hover:bg-sky-500 text-white dark:text-nosferatu-900 dark:bg-sky-400 hover:shadow-none focus:ring-2 focus:ring-sky-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--secondary.button--sky {
  @apply dark:fill-white fill-sky-500 text-sky-500 bg-white border border-sky-300 enabled:hover:shadow-sm enabled:hover:shadow-sky-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-sky-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--tertiary.button--sky {
  @apply dark:fill-white fill-sky-500 text-sky-500 dark:text-white enabled:hover:bg-sky-500/20 dark:enabled:hover:bg-sky-400/30 focus:ring-2 focus:ring-sky-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}

.button--primary.button--blue {
  @apply shadow-md fill-white dark:fill-slate-900 bg-blue-500 enabled:hover:bg-blue-600 dark:enabled:hover:bg-vonCount-600 text-white dark:text-nosferatu-900 dark:bg-vonCount-500 hover:shadow-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-vonCount-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--secondary.button--blue {
  @apply dark:fill-white fill-blue-500 text-blue-500 bg-white border border-blue-300 enabled:hover:shadow-sm enabled:hover:shadow-blue-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-vonCount-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--tertiary.button--blue {
  @apply dark:fill-white fill-blue-500 text-blue-500 dark:text-white enabled:hover:bg-blue-500/20 dark:enabled:hover:bg-vonCount-500/30 focus:ring-2 focus:ring-blue-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800 dark:focus:ring-vonCount-400;
}

.button--primary.button--indigo {
  @apply shadow-md fill-white dark:fill-slate-900 bg-indigo-500 enabled:hover:bg-indigo-600 text-white dark:text-nosferatu-900 hover:shadow-none focus:ring-2 focus:ring-indigo-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800 dark:bg-dracula-500  dark:hover:bg-dracula-600  dark:focus:ring-dracula-400;
}
.button--secondary.button--indigo {
  @apply dark:fill-white fill-indigo-500 text-indigo-500 bg-white border border-indigo-300 enabled:hover:shadow-sm enabled:hover:shadow-indigo-300 focus:ring-2 focus:ring-indigo-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800  dark:bg-white/10 dark:hover:bg-white/20 dark:focus:ring-dracula-400 dark:enabled:hover:shadow-none dark:text-white dark:border-none;
}
.button--tertiary.button--indigo {
  @apply dark:fill-white fill-indigo-500 text-indigo-500 dark:text-white enabled:hover:bg-indigo-500/20 focus:ring-2 focus:ring-indigo-400 ring-offset-2 ring-offset-slate-100 dark:enabled:hover:bg-dracula-500/30  dark:ring-offset-nosferatu-800 dark:focus:ring-dracula-400;
}

.button--primary.button--violet {
  @apply shadow-md fill-white dark:fill-slate-900 bg-violet-500 enabled:hover:bg-violet-600 text-white dark:text-nosferatu-900 dark:bg-violet-500 hover:shadow-none focus:ring-2 focus:ring-violet-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--secondary.button--violet {
  @apply dark:fill-white fill-violet-500 text-violet-500 bg-white border border-violet-300 enabled:hover:shadow-sm enabled:hover:shadow-violet-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-violet-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--tertiary.button--violet {
  @apply dark:fill-white fill-violet-500 text-violet-500 dark:text-white enabled:hover:bg-violet-500/20 dark:enabled:hover:bg-violet-500/30 focus:ring-2 focus:ring-violet-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}

.button--primary.button--purple {
  @apply shadow-md fill-white dark:fill-slate-900 bg-purple-500 enabled:hover:bg-purple-600 dark:enabled:hover:bg-buffy-600 text-white dark:text-nosferatu-900 dark:bg-buffy-500 hover:shadow-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-buffy-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--secondary.button--purple {
  @apply dark:fill-white fill-purple-500 text-purple-500 bg-white border border-purple-300 dark:border-buffy-300 enabled:hover:shadow-sm enabled:hover:shadow-purple-300 dark:enabled:hover:shadow-buffy-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-purple-400 dark:focus:ring-buffy-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--tertiary.button--purple {
  @apply dark:fill-white fill-purple-500 text-purple-500 dark:text-white enabled:hover:bg-purple-500/20 dark:enabled:hover:bg-buffy-500/30 focus:ring-2 focus:ring-purple-400 dark:focus:ring-buffy-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}

.button--primary.button--fuchsia {
  @apply shadow-md fill-white dark:fill-slate-900 bg-fuchsia-500 enabled:hover:bg-fuchsia-600 text-white dark:text-nosferatu-900 dark:bg-fuchsia-500 hover:shadow-none focus:ring-2 focus:ring-fuchsia-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--secondary.button--fuchsia {
  @apply dark:fill-white fill-fuchsia-500 text-fuchsia-500 bg-white border border-fuchsia-300 enabled:hover:shadow-sm enabled:hover:shadow-fuchsia-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-fuchsia-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--tertiary.button--fuchsia {
  @apply dark:fill-white fill-fuchsia-500 text-fuchsia-500 dark:text-white enabled:hover:bg-fuchsia-500/20 dark:enabled:hover:bg-fuchsia-500/30 focus:ring-2 focus:ring-fuchsia-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}

.button--primary.button--pink {
  @apply shadow-md fill-white dark:fill-slate-900 bg-pink-500 enabled:hover:bg-pink-600 dark:enabled:hover:bg-buffy-600 text-white dark:text-nosferatu-900 dark:bg-buffy-500 hover:shadow-none focus:ring-2 focus:ring-pink-400 dark:focus:ring-buffy-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--secondary.button--pink {
  @apply dark:fill-white fill-pink-500 text-pink-500 bg-white border border-pink-300 enabled:hover:shadow-sm enabled:hover:shadow-pink-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-pink-400 dark:focus:ring-buffy-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--tertiary.button--pink {
  @apply dark:fill-white fill-pink-500 text-pink-500 dark:text-white enabled:hover:bg-pink-500/20 dark:enabled:hover:bg-buffy-500/30 focus:ring-2 focus:ring-pink-400 dark:focus:ring-buffy-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}

.button--primary.button--rose {
  @apply shadow-md fill-white dark:fill-slate-900 bg-rose-500 enabled:hover:bg-rose-600 text-white dark:text-nosferatu-900 dark:bg-rose-500 hover:shadow-none focus:ring-2 focus:ring-rose-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--secondary.button--rose {
  @apply dark:fill-white fill-rose-500 text-rose-500 bg-white border border-rose-300 enabled:hover:shadow-sm enabled:hover:shadow-rose-300 dark:enabled:hover:shadow-none dark:text-white dark:bg-white/10 dark:hover:bg-white/20 dark:border-none focus:ring-2 focus:ring-rose-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
.button--tertiary.button--rose {
  @apply dark:fill-white fill-rose-500 text-rose-500 dark:text-white enabled:hover:bg-rose-500/20 dark:enabled:hover:bg-rose-500/30 focus:ring-2 focus:ring-rose-400 ring-offset-2 ring-offset-slate-100 dark:ring-offset-nosferatu-800;
}
</style>
