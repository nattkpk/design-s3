import View from "./history_pop_up.vue";

export default {
  title: "Components/Popup/history_pop_up",

  component: View, 
  argTypes: {
    type: {
      control: {
        type: "select",
      },
      options: ['purchase', 'coupon', 'redemption', 'top_up'],
    },
    icon: { control: "boolean" },
  },
};


// Define stories for different pages
export const purchaseType = {
  args: {
    type: "purchase",
  },
};

export const couponType = {
  args: {
    type: "coupon",
  },
};

export const redemptionType = {
  args: {
    type: "redemption",
  },
};

export const top_upType = {
  args: {
    type: "top_up",
  },
};

