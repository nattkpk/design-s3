import ImageCard from "./ImageCard.vue";

export default {
  title: "Examples/ImageCard",
  component: ImageCard,
};

const Template = (args) => ({
  components: { ImageCard },
  setup: () => ({ args }),
  template: '<ImageCard v-bind="args" />',
});

export const Default = Template.bind({});
Default.args = {
  title: "Look at this image!",
  text: "This image is very nice. Would you like to buy it?",
  imageUrl: "https://picsum.photos/400/300",
  price: "$199",
};

export const WithOldPrice = Template.bind({});
WithOldPrice.args = {
  ...Default.args,
  oldPrice: "$299",
};