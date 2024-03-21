import Input from "./Input.vue";

export default {
  title: "Components/Input",
  component: Input,
};

const Template = (args) => ({
  components: { Input },
  setup: () => ({ args }),
  template: '<Input v-bind="args"/>',
});

export const Default = Template.bind({});
Default.args = {
  text: "Please enter your phone number"
};