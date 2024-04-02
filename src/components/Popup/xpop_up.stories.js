import PopupRedeem from "./pop_up.vue";
import PopupOTP from "./pop_up_otp.vue";

export default {
  title: "Components/Popup/pop_up",
};

const PopupRedeemTemplate = () => ({
  components: { PopupRedeem },
  template: "<PopupRedeem></PopupRedeem>",
});

const PopupOTPTemplate = () => ({
  components: { PopupOTP },
  template: "<PopupOTP></PopupOTP>",
});

export const PopupRedeems = PopupRedeemTemplate.bind({});
export const PopupOTPs = PopupOTPTemplate.bind({});