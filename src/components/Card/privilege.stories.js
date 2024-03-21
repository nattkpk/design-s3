import Button from "./privilege.vue";

export default {
  title: "Components/Cards/privilege",
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



