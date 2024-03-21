import Card from "./get_coupon.vue";

export default {
  title: "Components/Cards/get_coupon",
  component: Card,
  argTypes: {},
};
const Template = () => ({
  components: { Card },
  template: "<Card></Card>",
});

export const Primary = Template.bind({});
