import View from "./Test.vue";

export default {
  title: "Components/Gus/Practice",
  component: View,
};
const Template = () => ({
  components: { View },
  template: "<View></View>",
});

export const Primary = Template.bind({});
