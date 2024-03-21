import View from "./coupon.vue";

export default {
  title: "Components/Cards/coupon",
  component: View,
  argTypes: {
    active: { control: "boolean" },
    myCoupons: { control: "boolean" },

  },
};

const Template = (args) => ({
  components: { View },
  setup() {
    return { ...args };
  },
  template: '<View v-bind="$props" />',
});

export const myActive = Template.bind({});
myActive.args = {
  myCoupons: true,
  active: true,
};

export const myInactive = Template.bind({});
myInactive.args = {
  myCoupons: true,
  active: false,
};

export const priActive = Template.bind({});
priActive.args = {
  myCoupons: false,
  active: false,
};

export const priInactive = Template.bind({});
priInactive.args = {
  myCoupons: false,
  active: true,
};
