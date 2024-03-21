import{V as f,N}from"./Navbar-BJGNTFBa.js";import"./vue.esm-bundler-uGv5KqEh.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const T={title:"Components/Footer/navButton",component:f,argTypes:{page:{control:{type:"select"},options:["profile","coupons","list"]},active:{control:"boolean"}}},P=(C,{argTypes:b})=>({components:{NavbarComponent:N},props:Object.keys(b),template:'<NavbarComponent v-bind="$props" @change="change"/>'}),e={args:{active:!0,page:"profile"}},a={args:{active:!0,page:"coupons"}},r={args:{active:!0,page:"list"}},o=P.bind({});var s,t,n;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    active: true,
    page: "profile"
  }
}`,...(n=(t=e.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var p,c,i;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    active: true,
    page: "coupons"
  }
}`,...(i=(c=a.parameters)==null?void 0:c.docs)==null?void 0:i.source}}};var m,g,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    active: true,
    page: "list"
  }
}`,...(u=(g=r.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var l,d,v;o.parameters={...o.parameters,docs:{...(l=o.parameters)==null?void 0:l.docs,source:{originalSource:`(args, {
  argTypes
}) => ({
  components: {
    NavbarComponent
  },
  // Renamed to avoid conflict
  props: Object.keys(argTypes),
  template: '<NavbarComponent v-bind="$props" @change="change"/>'
})`,...(v=(d=o.parameters)==null?void 0:d.docs)==null?void 0:v.source}}};const O=["ProfilePage","CouponsPage","ListPage","Navbar"];export{a as CouponsPage,r as ListPage,o as Navbar,e as ProfilePage,O as __namedExportsOrder,T as default};
