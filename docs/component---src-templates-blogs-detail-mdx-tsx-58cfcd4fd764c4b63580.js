(self.webpackChunkmhmmr_github_io=self.webpackChunkmhmmr_github_io||[]).push([[765],{7228:function(e){e.exports=function(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n},e.exports.default=e.exports,e.exports.__esModule=!0},3646:function(e,t,r){var n=r(7228);e.exports=function(e){if(Array.isArray(e))return n(e)},e.exports.default=e.exports,e.exports.__esModule=!0},9100:function(e,t,r){var n=r(9489),o=r(7067);function a(t,r,l){return o()?(e.exports=a=Reflect.construct,e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=a=function(e,t,r){var o=[null];o.push.apply(o,t);var a=new(Function.bind.apply(e,o));return r&&n(a,r.prototype),a},e.exports.default=e.exports,e.exports.__esModule=!0),a.apply(null,arguments)}e.exports=a,e.exports.default=e.exports,e.exports.__esModule=!0},9713:function(e){e.exports=function(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e},e.exports.default=e.exports,e.exports.__esModule=!0},7067:function(e){e.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}},e.exports.default=e.exports,e.exports.__esModule=!0},6860:function(e){e.exports=function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)},e.exports.default=e.exports,e.exports.__esModule=!0},8206:function(e){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},e.exports.default=e.exports,e.exports.__esModule=!0},319:function(e,t,r){var n=r(3646),o=r(6860),a=r(379),l=r(8206);e.exports=function(e){return n(e)||o(e)||a(e)||l()},e.exports.default=e.exports,e.exports.__esModule=!0},379:function(e,t,r){var n=r(7228);e.exports=function(e,t){if(e){if("string"==typeof e)return n(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(e,t):void 0}},e.exports.default=e.exports,e.exports.__esModule=!0},4858:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return _}});var n=r(7294),o=r(5444),a=r(4983),l=r(6725),c=r(4719),u=r(3217),i=r(9692),s=(r(2755),r(5478)),p=(0,i.ZP)(u.G).withConfig({displayName:"detail__ImageStyled",componentId:"t2ffyt-0"})(["height:200px;@media (min-width:640px){height:500px;}"]),f=i.ZP.article.withConfig({displayName:"detail__ArticleStyled",componentId:"t2ffyt-1"})(["pre{margin-left:0;margin-right:0;@media (min-width:640px){margin-left:-32px;margin-right:-32px;}}"]),m=function(e){var t=e.title,r=e.featuredImage,o=e.date;return n.createElement("header",{className:"text-center mt-12"},n.createElement("div",null,n.createElement("h1",{className:"text-4xl sm:text-5xl font-black leading-tight sm:leading-12"},t),n.createElement("ul",{className:"mt-10"},n.createElement("li",null,n.createElement("span",{className:"text-blueGray-400"},(0,s.p)(o,"EEEE, dd MMM yyyy")))),n.createElement(p,{className:"object-cover rounded-lg mt-14 w-full",image:(0,u.d)(r),alt:""})))},d=r(4665);function x(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&(0,d.Z)(e,t)}var y=r(8328),g=r(9636);function b(){b=function(e,t){return new r(e,void 0,t)};var e=RegExp.prototype,t=new WeakMap;function r(e,n,o){var a=new RegExp(e,n);return t.set(a,o||t.get(e)),(0,d.Z)(a,r.prototype)}function n(e,r){var n=t.get(r);return Object.keys(n).reduce((function(t,r){return t[r]=e[n[r]],t}),Object.create(null))}return x(r,RegExp),r.prototype.exec=function(t){var r=e.exec.call(this,t);return r&&(r.groups=n(r,this)),r},r.prototype[Symbol.replace]=function(r,o){if("string"==typeof o){var a=t.get(this);return e[Symbol.replace].call(this,r,o.replace(/\$<([^>]+)>/g,(function(e,t){return"$"+a[t]})))}if("function"==typeof o){var l=this;return e[Symbol.replace].call(this,r,(function(){var e=arguments;return"object"!=typeof e[e.length-1]&&(e=[].slice.call(e)).push(n(e,l)),o.apply(this,e)}))}return e[Symbol.replace].call(this,r,o)},b.apply(this,arguments)}var h=function(e){var t=e.children,r=t.props.className.match(b(/language\x2D(.*)/,{lang:1}));return n.createElement(y.ZP,Object.assign({},y.lG,{code:t.props.children,theme:g.Z,language:r&&r.groups&&r.groups.lang?r.groups.lang:""}),(function(e){var t=e.className,r=e.style,o=e.tokens,a=e.getLineProps,l=e.getTokenProps;return n.createElement("pre",{className:t,style:r},o.map((function(e,t){return n.createElement("div",Object.assign({key:t},a({line:e,key:t})),e.map((function(e,t){return n.createElement("span",Object.assign({key:t},l({token:e,key:t})))})))})))}))},v={Link:o.Link,pre:h},_=function(e){var t=e.pageContext.data;return n.createElement(c.Z,null,n.createElement("div",null,n.createElement(m,{title:t.frontmatter.seoTitle,description:t.frontmatter.abstract,date:t.frontmatter.publishedOn,featuredImage:t.frontmatter.featuredImage}),n.createElement("div",{className:"sm:pr-6 sm:pl-6 mx-auto max-w-2xl mt-24"},n.createElement(f,{className:"prose prose-xl"},n.createElement(a.MDXProvider,{components:v},n.createElement(l.MDXRenderer,{frontmatter:t.frontmatter},t.body))))))}},6725:function(e,t,r){var n=r(3395);e.exports={MDXRenderer:n}},3395:function(e,t,r){var n=r(9100),o=r(319),a=r(9713),l=r(7316),c=["scope","children"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var s=r(7294),p=r(4983).mdx,f=r(9480).useMDXScope;e.exports=function(e){var t=e.scope,r=e.children,a=l(e,c),u=f(t),m=s.useMemo((function(){if(!r)return null;var e=i({React:s,mdx:p},u),t=Object.keys(e),a=t.map((function(t){return e[t]}));return n(Function,["_fn"].concat(o(t),[""+r])).apply(void 0,[{}].concat(o(a)))}),[r,t]);return s.createElement(m,i({},a))}}}]);
//# sourceMappingURL=component---src-templates-blogs-detail-mdx-tsx-58cfcd4fd764c4b63580.js.map