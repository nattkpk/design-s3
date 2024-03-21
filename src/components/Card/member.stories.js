import View from "./member.vue";

export default {
  title: "Components/Cards/member",
  component: View,
  argTypes: {
    outlined: { control: "boolean" },

  },
};

const Template = (args) => ({
  components: { View },
  setup: () => ({ args }),
  template: '<View v-bind="args">{{ args.default }}</View>',
});

export const Primary = Template.bind({});
Primary.args = {
};


