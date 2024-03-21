import View from "./detail.vue";

export default {
  title: "Components/Cards/Detail",
  component: View,
  argTypes: {},
};
const Template = () => ({
  components: { View },
  template: "<View></View>",
});

export const Primary = Template.bind({});
