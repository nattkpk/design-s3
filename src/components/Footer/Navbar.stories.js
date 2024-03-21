import Navbar from "./Navbar.vue";

export default {
  title: "Components/Footer/Navbassdr",
  component: Navbar,
  argTypes: {
    page: {
      control: {
        type: "select",
      },
      options: ["profile", "coupons", "list"],
    },
    change: { action: "change" }
  },
};

const Template = (args, { argTypes }) => ({
  components: { Navbar },
  props: Object.keys(argTypes),
  template: '<Navbar v-bind="$props" @change="change"/>',
});

export const ProfilePage = Template.bind({});
ProfilePage.args = {
  page: 'profile'
};

export const CouponsPage = Template.bind({});
CouponsPage.args = {
  page: 'coupons'
};

export const ListPage = Template.bind({});
ListPage.args = {
  page: 'list'
};
