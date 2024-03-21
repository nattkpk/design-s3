import DetailView from "./detail.vue";
import PrivilegeView from "./privilege.vue";
import ProfileView from "./profile.vue";

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

export const Detail = DetailTemplate.bind({});
export const Privilege = PrivilegeTemplate.bind({});
export const Profile = ProfileTemplate.bind({});
