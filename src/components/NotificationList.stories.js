import Notification from './Notification.vue'
import NotificationList from './NotificationList.vue'
import Button from './Button.vue'
import { emitter } from '../utils/emmiter'
import { COLORS } from '../enums/colors'
import { ref } from 'vue'

export default {
  title: 'Components/NotificationList',
  component: Notification,
  decorators: [
    () => ({
      template: `<story/>`,
    }),
  ],
  argTypes: {
    notifications: {
      type: { name: 'array' },
    },
  },
}

const Template = () => ({
  components: { NotificationList, Button },

  setup() {
    const notifications = ref([])
    const notificationCount = ref(0)
    const removeNotification = (id) => {
      notifications.value = notifications.value.filter((n) => n.id !== id)
    }
    emitter.on('notification', ({ title, description, type, color }) => {
      const notification = {
        id: notificationCount.value,
        type,
        color,
        title,
        description,
      }

      notificationCount.value += 1
      notifications.value.push(notification)
      setTimeout(() => {
        removeNotification(notification.id)
      }, 3000)
    })
    const newNotificationDefault = () => {
      emitter.emit('notification', {
        title: 'Notification Title',
        color: 'green',
        type: 'success',
      })
    }
    const newNotificationNoIcon = () => {
      emitter.emit('notification', {
        title: 'Notification Title',
      })
    }
    const newNotificationDescription = () => {
      emitter.emit('notification', {
        title: 'Notification Title',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus autem, in dolorum asperiores, dolor esse quo excepturi voluptates sit molestiae incidunt tenetur impedit sed modi soluta suscipit nostrum, porro officia?',
        color: 'green',
        type: 'success',
      })
    }
    return {
      notifications,
      newNotificationDefault,
      newNotificationNoIcon,
      newNotificationDescription,
    }
  },
  template: `<div class="flex gap-2">
                <Button @click="newNotificationDefault" label="New Notification" /> 
                <Button @click="newNotificationNoIcon" label="Notification No Icon" /> 
                <Button @click="newNotificationDescription" label="Notification Description" /> 
            </div>
            <NotificationList :notifications="notifications"  />`,
})

export const Base = Template.bind({})
