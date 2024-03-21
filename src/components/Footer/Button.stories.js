import View from "./Button.vue";
import NavbarComponent from "./Navbar.vue";

export default {
  title: "Components/Footer/navButton",
  // Only one component should be defined here, not both View and Navbar
  component: View, // Assuming View is the default component to be rendered
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
  components: { NavbarComponent }, // Renamed to avoid conflict
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

// Bind the Template to Navbar component, not to any of the ProfilePage, CouponsPage, or ListPage
export const Navbar = Template.bind({});
