import View from "./Card.vue";

export default {
  title: "Components/InComing/card",
  component: View,
};
const Template = () => ({
  components: { View },
  template: "<View></View>",
});

export const Primary = Template.bind({});
