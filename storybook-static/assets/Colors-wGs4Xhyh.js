import{r as a}from"./index-DH5ua8nC.js";import{useMDXComponents as l}from"./index-COxJNofV.js";import"./_commonjsHelpers-Cpj98o6Y.js";var _={exports:{}},s={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var x=a,c=Symbol.for("react.element"),y=Symbol.for("react.fragment"),d=Object.prototype.hasOwnProperty,v=x.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,j={key:!0,ref:!0,__self:!0,__source:!0};function m(e,r,f){var t,o={},p=null,u=null;f!==void 0&&(p=""+f),r.key!==void 0&&(p=""+r.key),r.ref!==void 0&&(u=r.ref);for(t in r)d.call(r,t)&&!j.hasOwnProperty(t)&&(o[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps,r)o[t]===void 0&&(o[t]=r[t]);return{$$typeof:c,type:e,key:p,ref:u,props:o,_owner:v.current}}s.Fragment=y;s.jsx=m;s.jsxs=m;_.exports=s;var n=_.exports;function i(e){return n.jsx(n.Fragment,{})}function k(e={}){const{wrapper:r}={...l(),...e.components};return r?n.jsx(r,{...e,children:n.jsx(i,{...e})}):i()}export{k as default};
