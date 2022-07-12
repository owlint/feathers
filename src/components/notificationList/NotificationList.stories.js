import Notification from '../notification/Notification.vue'
import NotificationList from './NotificationList.vue'
import Button from '../button/Button.vue'
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
    const newNotificationDefault = () => {
      notifications.value.push({
        title: 'Notification Title',
        color: 'green',
        type: 'success',
      })
    }
    const newNotificationNoIcon = () => {
      notifications.value.push({
        title: 'Notification Title',
      })
    }
    const newNotificationDescription = () => {
      notifications.value.push({
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
