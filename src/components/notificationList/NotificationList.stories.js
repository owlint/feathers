import ONotification from '../notification/ONotification.vue'
import ONotificationList from './ONotificationList.vue'
import OButton from '../button/OButton.vue'
import { ref } from 'vue'

export default {
  title: 'Components/ONotificationList',
  component: ONotification,
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
  components: { ONotificationList, OButton },

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
  template: `<div class="of-flex of-gap-2">
                <OButton @click="newNotificationDefault" label="New Notification" /> 
                <OButton @click="newNotificationNoIcon" label="Notification No Icon" /> 
                <OButton @click="newNotificationDescription" label="Notification Description" /> 
            </div>
            <ONotificationList :notifications="notifications"  />`,
})

export const Base = Template.bind({})
