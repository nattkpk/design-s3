import{c as a,F as d,p as f,o as n,g as r,n as o,t as b}from"./vue.esm-bundler-uGv5KqEh.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";const u={props:{active:Boolean,text:String,numberOfButtons:{type:Number,default:1}}},v={class:"w-[390px] justify-start items-start inline-flex"};function x(s,y,t,B,N,k){return n(),a("div",v,[(n(!0),a(d,null,f(t.numberOfButtons,(O,p)=>(n(),a("div",{key:p},[r("div",{class:o(["grow shrink basis-0 h-12 px-1 py-3 bg-blue-900 justify-center items-center flex",{"bg-white":!t.active}])},[r("div",{class:o(["grow shrink basis-0 text-center text-white text-sm font-normal font-noto",{"text-[#000000]":!t.active}])},b(t.text),3)],2)]))),128))])}const l=g(u,[["render",x]]);u.__docgenInfo={exportName:"default",displayName:"Navbar",description:"",tags:{},props:[{name:"active",type:{name:"boolean"}},{name:"text",type:{name:"string"}},{name:"numberOfButtons",type:{name:"number"},defaultValue:{func:!1,value:"1"}}],sourceFiles:["/Users/nattkpk/S3Code/GitHub/design-s3/src/components/InComing/Navbar.vue"]};const j={title:"Components/jksedlf;jskal;oed/Navbar",component:l},_=s=>({components:{Navbar:l},setup(){return{args:s}},template:'<Navbar :numberOfButtons="args.numberOfButtons" :active="args.active" :text="args.text" />'}),e=_.bind({});e.args={active:!0,text:"การซื้อสินค้า",numberOfButtons:1};var i,c,m;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`args => ({
  components: {
    Navbar
  },
  setup() {
    return {
      args
    };
  },
  template: \`<Navbar :numberOfButtons="args.numberOfButtons" :active="args.active" :text="args.text" />\`
})`,...(m=(c=e.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};const C=["Primary"];export{e as Primary,C as __namedExportsOrder,j as default};
