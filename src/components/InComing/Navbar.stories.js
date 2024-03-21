// import Navbar from "./Navbar.vue";

// export default {
//   title: "Components/jksedlf;jskal;oed/Navbar",
//   component: Navbar,
// };

// const Template = (args) => ({
//   components: { Navbar },
//   setup() {
//     return { args };
//   },
//   template: `
//     <div class="w-[390px] h-12 justify-start items-start inline-flex">
//       <div class="grow shrink basis-0 h-12 px-1 py-3 bg-blue-900 justify-center items-center flex"
//            :class="{ 'bg-white': !args.active }">
//         <div class="grow shrink basis-0 text-center text-white text-sm font-normal font-noto"
//              :class="{ 'text-[#000000]': !args.active }">{{ args.text }}</div>
//       </div>
//     </div>
//   `,

// });

// export const Primary = Template.bind({});
// Primary.args = {
//   active: true, 
//   text: "การซื้อสินค้า", 
// };

import Navbar from "./Navbar.vue";

export default {
  title: "Components/jksedlf;jskal;oed/Navbar",
  component: Navbar,
};

const Template = (args) => ({
  components: { Navbar },
  setup() {
    return { args };
  },
  template: `<Navbar :numberOfButtons="args.numberOfButtons" :active="args.active" :text="args.text" />`,
});

export const Primary = Template.bind({});
Primary.args = {
  active: true, 
  text: "การซื้อสินค้า", 
  numberOfButtons:1
};

