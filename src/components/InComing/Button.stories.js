import View from "./Button.vue";

export default {
  title: "Components/jksedlf;jskal;oed/button",
  component: View,
  argTypes: {
    active: { control: "boolean" },
  },
};
// const Template = () => ({
//   components: { View },
//   template: "<View></View>",
// });

export const ProfilePage = {
  args: {
    active: true,

  },
};

export const CouponsPage = {
  args: {
    active: false,

  },
};

