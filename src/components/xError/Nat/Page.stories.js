import Page1 from "./Page1.vue";
import Page2 from "./Page2.vue";
import Page3 from "./Page3.vue";

export default {
  title: "Components/Test/1",
};


const Page1Template = () => ({
  components: { Page1 },
  template: "<Page1></Page1>",
});

const Page2Template = () => ({
  components: { Page2 },
  template: "<Page2></Page2>",
});

const Page3Template = () => ({
  components: { Page3 },
  template: "<Page3></Page3>",
});

export const ProfilePage = Page1Template.bind({});
export const CouponPage = Page2Template.bind({});
export const PrivilegePage = Page3Template.bind({});