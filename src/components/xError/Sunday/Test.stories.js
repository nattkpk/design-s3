import View from "./Test.vue";

export default {
  title: "Components/Test/2",
  component: View,
};
const Template = () => ({
  components: { View },
  template: "<View></View>",
});

export const Primary = Template.bind({});
