import View from "./offer_button.vue";

export default {
  title: "Components/Cards/offer_button",
  component: View,
  argTypes: {
    active: { control: "boolean" },
    myCoupons: { control: "boolean" },
  },
};

const Template = (args, { argTypes }) => ({
  components: { View },
  props: Object.keys(argTypes),
  template: '<View v-bind="$props" @change="change"/>',
});

export const myCouponsActive = {
  args: {
    myCoupons: true,
    active: true,
  },
};

export const myCouponsInactive = {
  args: {
    myCoupons: true,
    active: false,
  },
};

export const myPrivilegeActive = {
  args: {
    myCoupons: false,
    active: true,
  },
};

export const myPrivilegeInactive = {
  args: {
    myCoupons: false,
    active: false,
  },
};


