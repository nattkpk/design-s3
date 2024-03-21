import{c,g as t,t as n,j as x,k as r,l as o,m as i,o as l}from"./vue.esm-bundler-uGv5KqEh.js";import{B as m}from"./Button-DqN8NEG5.js";const b={class:"max-w-sm bg-white rounded-lg border border-gray-400 shadow-md"},_=["src"],I={class:"p-5"},v={class:"flex justify-between"},S={class:"mb-2 text-2xl font-bold tracking-tight text-gray-900"},w={class:"self-center text-green-700"},P={key:0,class:"text-red-400 line-through"},B={class:"mb-6 font-normal text-gray-700"},y={__name:"ImageCard",props:{title:String,text:String,imageUrl:String,price:String,oldPrice:String,buyClick:Function,cancelClick:Function},setup(e){return(N,U)=>(l(),c("div",b,[t("img",{class:"rounded-t-lg h-56 w-full object-cover",src:e.imageUrl},null,8,_),t("div",I,[t("div",v,[t("h5",S,n(e.title),1),t("p",w,[e.oldPrice?(l(),c("span",P,n(e.oldPrice),1)):x("",!0),r(" "+n(e.price),1)])]),t("p",B,n(e.text),1),o(m,{class:"w-full",onClick:e.buyClick},{default:i(()=>[r("Buy it")]),_:1},8,["onClick"]),o(m,{class:"w-full",onClick:e.cancelClick,outlined:""},{default:i(()=>[r("Cancel")]),_:1},8,["onClick"])])]))}},f=y;y.__docgenInfo={exportName:"default",displayName:"ImageCard",description:"",tags:{},props:[{name:"title",type:{name:"string"}},{name:"text",type:{name:"string"}},{name:"imageUrl",type:{name:"string"}},{name:"price",type:{name:"string"}},{name:"oldPrice",type:{name:"string"}},{name:"buyClick",type:{name:"func"}},{name:"cancelClick",type:{name:"func"}}],sourceFiles:["/Users/nattkpk/S3Code/GitHub/design-s3/src/components/ImageCard.vue"]};const D={title:"Examples/ImageCard",component:f},k=e=>({components:{ImageCard:f},setup:()=>({args:e}),template:'<ImageCard v-bind="args" />'}),a=k.bind({});a.args={title:"Look at this image!",text:"This image is very nice. Would you like to buy it?",imageUrl:"https://picsum.photos/400/300",price:"$199"};const s=k.bind({});s.args={...a.args,oldPrice:"$299"};var d,g,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`args => ({
  components: {
    ImageCard
  },
  setup: () => ({
    args
  }),
  template: '<ImageCard v-bind="args" />'
})`,...(u=(g=a.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var p,C,h;s.parameters={...s.parameters,docs:{...(p=s.parameters)==null?void 0:p.docs,source:{originalSource:`args => ({
  components: {
    ImageCard
  },
  setup: () => ({
    args
  }),
  template: '<ImageCard v-bind="args" />'
})`,...(h=(C=s.parameters)==null?void 0:C.docs)==null?void 0:h.source}}};const E=["Default","WithOldPrice"];export{a as Default,s as WithOldPrice,E as __namedExportsOrder,D as default};
