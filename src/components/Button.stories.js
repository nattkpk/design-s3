import Button from "./Button.vue";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    outlined: { control: "boolean" },
    thai: { control: "boolean" },
  },
};

const Template = (args) => ({
  components: { Button },
  setup: () => ({ args }),
  template: '<Button v-bind="args">{{ args.default }}</Button>',
});

export const Primary = Template.bind({});
Primary.args = {
  default: "Register",
  outlined: false,
};

export const Outlined = Template.bind({});
Outlined.args = {
  ...Primary.args,
  outlined: true,
};
