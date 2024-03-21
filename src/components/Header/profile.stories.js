import View from "./profile.vue";

export default {
  title: "Components/Header/Profile",
  component: View,
  argTypes: {},
};
const Template = () => ({
  components: { View },
  template: "<View></View>",
});

export const Primary = Template.bind({});
