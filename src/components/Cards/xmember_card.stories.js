import Card from "./member_card.vue";

export default {
  title: "Components/Cards/member_card",
  component: Card,
  argTypes: {

  },
};

const Template = () => ({
  components: { Card },
  template: '<Card></Card>',
});

export const Primary = Template.bind({});




