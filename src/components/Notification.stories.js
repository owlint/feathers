import Notification from './Notification.vue'
// import Button from './Button.vue'
import { COLORS } from '../enums/colors'
import { SIZES } from '../enums/sizes'

export default {
  title: 'Components/Notification',
  component: Notification,
  decorators: [
    () => ({
      template: `<story/>`,
    }),
  ],
  argTypes: {
    color: {
      control: { type: 'select' },
      options: COLORS,
    },
    title: {
      type: { name: 'string', required: false },
    },
    description: {
      type: { name: 'string', required: false },
    },
    type: {
      control: { type: 'select' },
      options: ['warning', 'error', 'success'],
    },
  },
}

const defaultArgs = {
  title: 'Notification title',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi perspiciatis doloremque veritatis facilis velit! Corrupti ea ullam enim facere, sed, commodi adipisci ex quos itaque culpa inventore sapiente asperiores consequuntur.',
}

const Template = (args) => ({
  components: { Notification },
  data() {
    return {
      displayNotification: false,
    }
  },
  setup() {
    return { args }
  },
  template: `<Notification v-bind="args" />`,
})

export const Base = Template.bind({})
Base.args = defaultArgs

// export const Icon = (args) => ({
//   components: { Notification, Button },
//   data() {
//     return {
//       displayNotificationIcon: false,
//       displayNotification: false,
//     }
//   },
//   setup() {
//     return { args }
//   },
//   template: `<Button @click="displayNotificationIcon = true" label="Dialog Icon" color="fuchsia" />
//             <Notification @close="displayNotificationIcon = false" :display-Notification="displayNotificationIcon" v-bind="args" >
//               <template #icon>
//                 <font-awesome-icon  :icon="['fad', 'burger-cheese']" />
//               </template>
//               <template #footer>
//                 <Button @click="displayNotificationIcon = false" color="fuchsia" label="Close Dialog Icon"/>
//                 <Button  @click="displayNotificationIcon = false" color="fuchsia" type="tertiary" label="Close"/>
//               </template>
//             </Notification>
//             <Button @click="displayNotification = true" label="Dialog No Icon" color="fuchsia" />
//             <Notification @close="displayNotification = false" :display-Notification="displayNotification" v-bind="args" title="Dialog Without Icon" hide-icon   >
//               <template #footer>
//                 <Button @click="displayNotification = false" color="fuchsia" label="Close Dialog No Icon"/>
//                 <Button  @click="displayNotification = false" color="fuchsia" type="tertiary" label="Close"/>
//               </template>
//             </Notification>
//             `,
// })
// Icon.args = {
//   ...defaultArgs,
//   title: 'Notification With Icon',
//   color: 'fuchsia',
// }

// export const ColorsIcon = (args) => ({
//   components: { Notification, Button },
//   data() {
//     return {
//       displayNotification: false,
//       displayNotificationGreen: false,
//       displayNotificationRed: false,
//       displayNotificationOrange: false,
//     }
//   },
//   setup() {
//     return { args }
//   },
//   template: `<Button @click="displayNotification = true" label="Dialog"/>
//             <Notification @close="displayNotification = false" :display-Notification="displayNotification" v-bind="args" >
//               <template #footer>
//                 <Button @click="displayNotification = false"  label="Close Dialog"/>
//                 <Button  @click="displayNotification = false"  type="tertiary" label="Close"/>
//               </template>
//             </Notification>
//             <Button @click="displayNotificationGreen = true" label="Dialog Green" color="green" />
//             <Notification @close="displayNotificationGreen = false" color="green" :display-Notification="displayNotificationGreen" v-bind="args"  >
//               <template #footer>
//                 <Button @click="displayNotificationGreen = false" color="green" label="Close Dialog"/>
//                 <Button  @click="displayNotificationGreen = false" color="green" type="tertiary" label="Close"/>
//               </template>
//             </Notification>
//             <Button @click="displayNotificationRed = true" label="Dialog Red" color="red" />
//             <Notification @close="displayNotificationRed = false" color="red" :display-Notification="displayNotificationRed" v-bind="args"  >
//               <template #footer>
//                 <Button @click="displayNotificationRed = false" color="red" label="Close Dialog "/>
//                 <Button  @click="displayNotificationRed = false" color="red" type="tertiary" label="Close"/>
//               </template>
//             </Notification>
//             <Button @click="displayNotificationOrange = true" label="Dialog Orange" color="orange" />
//             <Notification @close="displayNotificationOrange = false" color="orange" :display-Notification="displayNotificationOrange" v-bind="args"  >
//               <template #footer>
//                 <Button @click="displayNotificationOrange = false" color="orange" label="Close Dialog No Icon"/>
//                 <Button  @click="displayNotificationOrange = false" color="orange" type="tertiary" label="Close"/>
//               </template>
//             </Notification>
//             `,
// })
// ColorsIcon.args = {
//   ...defaultArgs,
// }

// export const Sizes = (args) => ({
//   components: { Notification, Button },
//   data() {
//     return {
//       displayNotification: false,
//       displayNotificationXs: false,
//       displayNotificationXl: false,
//       displayNotification7xl: false,
//     }
//   },
//   setup() {
//     return { args }
//   },
//   template: `<Button @click="displayNotification = true" label="Dialog"/>
//             <Notification @close="displayNotification = false" :display-Notification="displayNotification" v-bind="args" >
//               <template #footer>
//                 <Button @click="displayNotification = false" label="Close Dialog"/>
//                 <Button  @click="displayNotification = false" type="tertiary" label="Close"/>
//               </template>
//             </Notification>
//             <Button @click="displayNotificationXs = true" label="Dialog xs" />
//             <Notification @close="displayNotificationXs = false" :display-Notification="displayNotificationXs" size="xs" v-bind="args"  >
//               <template #footer>
//                 <Button @click="displayNotificationXs = false" label="Close Dialog"/>
//                 <Button  @click="displayNotificationXs = false" type="tertiary" label="Close"/>
//               </template>
//             </Notification>
//             <Button @click="displayNotificationXl = true" label="Dialog xl" />
//             <Notification @close="displayNotificationXl = false" :display-Notification="displayNotificationXl" size="xl" v-bind="args"  >
//               <template #footer>
//                 <Button @click="displayNotificationXl = false" label="Close Dialog "/>
//                 <Button  @click="displayNotificationXl = false" type="tertiary" label="Close"/>
//               </template>
//             </Notification>
//             <Button @click="displayNotification7xl = true" label="Dialog 7xl" />
//             <Notification @close="displayNotification7xl = false" :display-Notification="displayNotification7xl" size="7xl" v-bind="args"  >
//               <template #footer>
//                 <Button @click="displayNotification7xl = false" label="Close Dialog No Icon"/>
//                 <Button  @click="displayNotification7xl = false" type="tertiary" label="Close"/>
//               </template>
//             </Notification>
//             `,
// })
// Sizes.args = {
//   ...defaultArgs,
// }
// export const Dark = (args) => ({
//   components: { Notification, Button },
//   data() {
//     return {
//       displayNotification: false,
//     }
//   },
//   setup() {
//     return { args }
//   },
//   template: `<div class="dark">
//               <Button @click="displayNotification = true" label="Dialog Dark Mode"/>
//               <Notification class="dark" @close="displayNotification = false" :display-Notification="displayNotification" v-bind="args" >
//                 <template #footer>
//                   <Button @click="displayNotification = false" label="Close Dialog"/>
//                   <Button  @click="displayNotification = false" type="tertiary" label="Close"/>
//                 </template>
//               </Notification>
//             </div>
//             `,
// })
// Dark.args = {
//   ...defaultArgs,
// }
// Dark.parameters = {
//   backgrounds: {
//     values: [{ name: 'nosferatu-900', value: '#373a4d' }],
//     default: 'nosferatu-900',
//   },
// }
