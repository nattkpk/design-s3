import View from "./navigation_button.vue";
import NavbarComponent from "./navigation_bar.vue";

export default {
  title: "Components/Footer/navigation_button",

  component: View, 
  argTypes: {
    page: {
      control: {
        type: "select",
      },
      options: ["profile", "coupons", "list"],
    },
    active: { control: "boolean" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { NavbarComponent }, 
  props: Object.keys(argTypes),
  template: '<NavbarComponent v-bind="$props" @change="change"/>',
});

// Define stories for different pages
export const ProfilePage = {
  args: {
    active: true,
    page: "profile",
  },
};

export const CouponsPage = {
  args: {
    active: true,
    page: "coupons",
  },
};

export const ListPage = {
  args: {
    active: true,
    page: "list",
  },
};

export const Navbar = Template.bind({});
