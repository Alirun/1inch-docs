"use strict";(self.webpackChunk_1_inch_docs=self.webpackChunk_1_inch_docs||[]).push([[5738],{3905:function(t,e,r){r.d(e,{Zo:function(){return m},kt:function(){return c}});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var d=a.createContext({}),p=function(t){var e=a.useContext(d),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=p(t.components);return a.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=p(r),c=n,u=s["".concat(d,".").concat(c)]||s[c]||k[c]||l;return r?a.createElement(u,i(i({ref:e},m),{},{components:r})):a.createElement(u,i({ref:e},m))}));function c(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=s;var o={};for(var d in e)hasOwnProperty.call(e,d)&&(o[d]=e[d]);o.originalType=t,o.mdxType="string"==typeof t?t:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},83304:function(t,e,r){r.r(e),r.d(e,{frontMatter:function(){return o},contentTitle:function(){return d},metadata:function(){return p},toc:function(){return m},default:function(){return s}});var a=r(87462),n=r(63366),l=(r(67294),r(3905)),i=["components"],o={},d="LimitOrderProtocolRFQ",p={unversionedId:"aggregation-protocol/smart-contract/LimitOrderProtocolRFQ",id:"aggregation-protocol/smart-contract/LimitOrderProtocolRFQ",isDocsHomePage:!1,title:"LimitOrderProtocolRFQ",description:"Derives",source:"@site/docs/aggregation-protocol/smart-contract/LimitOrderProtocolRFQ.md",sourceDirName:"aggregation-protocol/smart-contract",slug:"/aggregation-protocol/smart-contract/LimitOrderProtocolRFQ",permalink:"/docs/aggregation-protocol/smart-contract/LimitOrderProtocolRFQ",editUrl:"https://github.com/1inch/1inch-docs/edit/master/website/docs/aggregation-protocol/smart-contract/LimitOrderProtocolRFQ.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"ClipperRouter",permalink:"/docs/aggregation-protocol/smart-contract/ClipperRouter"},next:{title:"UnoswapRouter",permalink:"/docs/aggregation-protocol/smart-contract/UnoswapRouter"}},m=[{value:"Derives",id:"derives",children:[]},{value:"Functions",id:"functions",children:[{value:"constructor",id:"constructor",children:[]},{value:"DOMAIN_SEPARATOR",id:"domain_separator",children:[]},{value:"invalidatorForOrderRFQ",id:"invalidatorfororderrfq",children:[]},{value:"cancelOrderRFQ",id:"cancelorderrfq",children:[]},{value:"fillOrderRFQ",id:"fillorderrfq",children:[]},{value:"fillOrderRFQToWithPermit",id:"fillorderrfqtowithpermit",children:[]},{value:"fillOrderRFQTo",id:"fillorderrfqto",children:[]}]},{value:"Events",id:"events",children:[{value:"OrderFilledRFQ",id:"orderfilledrfq",children:[]}]}],k={toc:m};function s(t){var e=t.components,r=(0,n.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},k,r,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"limitorderprotocolrfq"},"LimitOrderProtocolRFQ"),(0,l.kt)("h2",{id:"derives"},"Derives"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/aggregation-protocol/smart-contract/helpers/Permitable"},"Permitable")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://docs.openzeppelin.com/contracts/3.x/api/drafts#EIP712"},"EIP712")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/docs/aggregation-protocol/smart-contract/helpers/EthReceiver"},"EthReceiver"))),(0,l.kt)("h2",{id:"functions"},"Functions"),(0,l.kt)("h3",{id:"constructor"},"constructor"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function constructor(\n  address weth\n) public\n")),(0,l.kt)("h4",{id:"parameters"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"weth")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"domain_separator"},"DOMAIN_SEPARATOR"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function DOMAIN_SEPARATOR(\n) external returns (bytes32)\n")),(0,l.kt)("h3",{id:"invalidatorfororderrfq"},"invalidatorForOrderRFQ"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function invalidatorForOrderRFQ(\n  address maker,\n  uint256 slot\n) external returns (uint256)\n")),(0,l.kt)("p",null,"Returns bitmask for double-spend invalidators based on lowest byte of order.info and filled quotes"),(0,l.kt)("h4",{id:"parameters-1"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"maker")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"slot")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h4",{id:"return-values"},"Return Values:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"Result")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Each bit represents whenever corresponding quote was filled")))),(0,l.kt)("h3",{id:"cancelorderrfq"},"cancelOrderRFQ"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function cancelOrderRFQ(\n  uint256 orderInfo\n) external\n")),(0,l.kt)("p",null,"Cancels order's quote"),(0,l.kt)("h4",{id:"parameters-2"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"orderInfo")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))),(0,l.kt)("h3",{id:"fillorderrfq"},"fillOrderRFQ"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function fillOrderRFQ(\n  struct LimitOrderProtocolRFQ.OrderRFQ order,\n  bytes signature,\n  uint256 makingAmount,\n  uint256 takingAmount\n) external returns (uint256, uint256)\n")),(0,l.kt)("p",null,"Fills order's quote, fully or partially (whichever is possible)"),(0,l.kt)("h4",{id:"parameters-3"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"order")),(0,l.kt)("td",{parentName:"tr",align:"left"},"struct LimitOrderProtocolRFQ.OrderRFQ"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Order quote to fill")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"signature")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Signature to confirm quote ownership")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"makingAmount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Making amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"takingAmount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Taking amount")))),(0,l.kt)("h3",{id:"fillorderrfqtowithpermit"},"fillOrderRFQToWithPermit"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function fillOrderRFQToWithPermit(\n  struct LimitOrderProtocolRFQ.OrderRFQ order,\n  bytes signature,\n  uint256 makingAmount,\n  uint256 takingAmount,\n  address payable target,\n  bytes permit\n) external returns (uint256, uint256)\n")),(0,l.kt)("p",null,"Fills Same as ",(0,l.kt)("inlineCode",{parentName:"p"},"fillOrderRFQ")," but calls permit first,\nallowing to approve token spending and make a swap in one transaction.\nAlso allows to specify funds destination instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"msg.sender")),(0,l.kt)("h4",{id:"parameters-4"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"order")),(0,l.kt)("td",{parentName:"tr",align:"left"},"struct LimitOrderProtocolRFQ.OrderRFQ"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Order quote to fill")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"signature")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Signature to confirm quote ownership")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"makingAmount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Making amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"takingAmount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Taking amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"target")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address payable"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Address that will receive swap funds")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"permit")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Should consist of abiencoded token address and encoded ",(0,l.kt)("inlineCode",{parentName:"td"},"IERC20Permit.permit")," call. See tests for examples")))),(0,l.kt)("h3",{id:"fillorderrfqto"},"fillOrderRFQTo"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"function fillOrderRFQTo(\n  struct LimitOrderProtocolRFQ.OrderRFQ order,\n  bytes signature,\n  uint256 makingAmount,\n  uint256 takingAmount,\n  address payable target\n) public returns (uint256, uint256)\n")),(0,l.kt)("p",null,"Same as ",(0,l.kt)("inlineCode",{parentName:"p"},"fillOrderRFQ")," but allows to specify funds destination instead of ",(0,l.kt)("inlineCode",{parentName:"p"},"msg.sender")),(0,l.kt)("h4",{id:"parameters-5"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"order")),(0,l.kt)("td",{parentName:"tr",align:"left"},"struct LimitOrderProtocolRFQ.OrderRFQ"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Order quote to fill")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"signature")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Signature to confirm quote ownership")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"makingAmount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Making amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"takingAmount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Taking amount")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"target")),(0,l.kt)("td",{parentName:"tr",align:"left"},"address payable"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Address that will receive swap funds")))),(0,l.kt)("h2",{id:"events"},"Events"),(0,l.kt)("h3",{id:"orderfilledrfq"},"OrderFilledRFQ"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-solidity"},"event OrderFilledRFQ(\n  bytes32 orderHash,\n  uint256 makingAmount\n)\n")),(0,l.kt)("h4",{id:"parameters-6"},"Parameters:"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"orderHash")),(0,l.kt)("td",{parentName:"tr",align:"left"},"bytes32"),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"makingAmount")),(0,l.kt)("td",{parentName:"tr",align:"left"},"uint256"),(0,l.kt)("td",{parentName:"tr",align:"left"})))))}s.isMDXComponent=!0}}]);