import DetailView from "./detail_Bar.vue";
import PrivilegeView from "./privilege_Bar.vue";
import ProfileView from "./profile_Bar.vue";
import HistoryView from "./history_Bar.vue";

export default {
  title: "Components/Header",
};

const DetailTemplate = () => ({
  components: { DetailView },
  template: "<DetailView></DetailView>",
});

const PrivilegeTemplate = () => ({
  components: { PrivilegeView },
  template: "<PrivilegeView></PrivilegeView>",
});

const ProfileTemplate = () => ({
  components: { ProfileView },
  template: "<ProfileView></ProfileView>",
});

const HistoryTemplate = () => ({
  components: { HistoryView },
  template: "<HistoryView></HistoryView>",
});

export const Profile = ProfileTemplate.bind({});
export const Privilege = PrivilegeTemplate.bind({});
export const Detail = DetailTemplate.bind({});
export const History = HistoryTemplate.bind({});