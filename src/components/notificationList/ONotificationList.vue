<template>
  <div>
    <div
      class="
        of-z-50
        of-fixed
        of-inset-0
        of-flex
        of-items-start
        of-justify-end
        of-right-6
        of-px-4
        of-py-6
        of-pointer-events-none
      "
    >
      <div class="of-max-w-sm of-w-full">
        <transition-group
          tag="div"
          :enter-active-class="
            sortedNotification.length > 1
              ? 'of-transform of-ease-out delay-300 of-duration-300 transition'
              : 'of-transform of-ease-out of-duration-300 of-transition'
          "
          enter-from-class="of-translate-y-2 of-opacity-0 sm:of-translate-y-0 sm:of-translate-x-2"
          enter-to-class="of-translate-y-0 of-opacity-100 sm:of-translate-x-0"
          leave-active-class="of-transition of-ease-in of-duration-500"
          leave-from-class="of-opacity-100"
          leave-to-class="of-opacity-0"
          move-class="of-transition of-ease-in-out of-duration-300"
        >
          <Notification
            v-for="(notification, index) in sortedNotification"
            :key="`${notification.id}_notification`"
            :class="index > 0 ? 'of-mt-4' : ''"
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

<script>
export default {
  name: 'ONotificationList',
}
</script>

<script setup>
import { computed } from 'vue'
import Notification from '../notification/ONotification.vue'

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
