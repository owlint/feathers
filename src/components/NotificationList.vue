<template>
  <div>
    <div
      class="
        z-50
        fixed
        inset-0
        flex
        items-start
        justify-end
        right-6
        px-4
        py-6
        pointer-events-none
      "
    >
      <div class="max-w-sm w-full">
        <transition-group
          tag="div"
          :enter-active-class="
            sortedNotification.length > 1
              ? 'transform ease-out delay-300 duration-300 transition'
              : 'transform ease-out duration-300 transition'
          "
          enter-from-class="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
          enter-to-class="translate-y-0 opacity-100 sm:translate-x-0"
          leave-active-class="transition ease-in duration-500"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
          move-class="transition ease-in-out duration-300"
        >
          <Notification
            v-for="(notification, index) in sortedNotification"
            :key="`${notification.id}_notification`"
            :class="index > 0 ? 'mt-4' : ''"
            :title="notification.title"
            :description="notification.description"
            :color="notification.color"
            :type="notification.type"
            @close="close"
          />
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import Notification from '../components/Notification.vue'

const props = defineProps({
  notifications: {
    type: Array,
    required: false,
    default() {
      return []
    },
  },
})
const emit = defineEmits(['close'])

const sortedNotification = computed(() =>
  [...props.notifications].reverse().slice(0, 4)
)
const close = (id) => emit('close', id)
</script>
