import View from "./crm_ham_menu.vue";

export default {
  title: "Components/Popup/crm_ham_menu",
  component: View,
  argTypes: {
    active: { control: "boolean" },
  },
};
const Template = (args, { argTypes }) => ({
  components: { View },
  props: Object.keys(argTypes),
  template: '<View v-bind="$props"/>',
});


export const myCouponsActive = {
  args: {
    active: true,
  },
};