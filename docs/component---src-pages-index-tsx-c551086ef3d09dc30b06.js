(self.webpackChunkmhmmr_github_io=self.webpackChunkmhmmr_github_io||[]).push([[691],{3176:function(e,t,l){"use strict";var a=l(7294),n=l(5444),r=l(3217),m=l(7244),c=l(430),s=l(5478);t.Z=function(e){var t=e.data;return a.createElement("div",null,a.createElement("div",null,a.createElement("div",null,a.createElement(r.G,{width:100,style:{height:200},className:"rounded-lg w-full",image:(0,r.d)(t.frontmatter.featuredImage),alt:""}),t.frontmatter.featuredImage?null:a.createElement("img",{style:{height:200},className:"rounded-lg object-cover w-full",src:"https://res.cloudinary.com/muhrusdi/image/upload/v1623214698/placeholder.jpg",alt:""}))),a.createElement("div",null,a.createElement("div",null,a.createElement("h2",{className:"text-xl mt-6 font-bold line-clamp-2"},t.frontmatter.title),a.createElement("p",{className:"mt-4 text-gray-400 line-clamp-2"},t.frontmatter.abstract),a.createElement(c.G8,{className:"flex flex-row-reverse justify-between mt-4"},a.createElement(n.Link,{to:"/blog/"+t.fields.slug,className:"inline-block transition-all"},a.createElement("div",{className:"flex items-center"},a.createElement("span",null,"Read more")," ",a.createElement(m.lU2,{size:24}))),a.createElement("span",{className:"text-gray-400 transition-all"},(0,s.p)(t.frontmatter.publishedOn))))))}},9929:function(e,t,l){"use strict";var a=l(7294),n=l(3217),r=l(7244),m=function(e){var t=e.badge,l=e.data;return a.createElement("div",{className:"md:flex -mx-4 items-center"},a.createElement("div",{className:"w-full md:w-1/2 px-4"},a.createElement("div",null,a.createElement("span",{className:"inline-block rounded-full text-xs uppercase py-1 px-4 bg-gray-600"},t),a.createElement("h2",{className:"text-4xl sm:text-5xl sm:leading-12 mt-6 font-black line-clamp-3"},l.frontmatter.seoTitle),a.createElement("p",{className:"mt-8 text-lg text-gray-400 line-clamp-2"},l.frontmatter.abstract),a.createElement("a",{href:"#",className:"mt-10 inline-block text-lg"},a.createElement("div",{className:"flex items-center"},a.createElement("span",null,"Read more")," ",a.createElement(r.lU2,{size:24}))))),a.createElement("div",{className:"w-full sm:w-1/2 px-4 hidden md:block"},a.createElement("div",null,a.createElement(n.G,{width:100,style:{height:300},className:"rounded-lg w-full",image:(0,n.d)(l.frontmatter.featuredImage),alt:""}))))};t.Z=m,m.defaultProps={badge:"Latest from the blog"}},2494:function(e,t,l){"use strict";l.r(t);var a,n=l(5761),r=l(7294),m=l(7587),c=l(778),s=l(4719),i=l(5444),o=l(9929),u=l(3176),d=l(8650),E=l(430);t.default=function(){var e=(0,i.useStaticQuery)("1205895817"),t=(0,m.ZP)(a||(a=(0,n.Z)(["\n    query GetWorkCollection {\n      workCollection(limit: 6) {\n        items {\n          title\n          sys {\n            id\n          }\n          description\n          featuredImage {\n            url\n          }\n          techsCollection {\n            items {\n              ... on TechIcon {\n                name\n              }\n            }\n          }\n          category {\n            ... on WorkCategory {\n              title\n            }\n          }\n        }\n      }\n    }\n  "]))),l=(0,c.useQuery)(t),g=l.loading,f=l.data,p=e.allMdx.edges,x=p[0],h=p.slice(1);return r.createElement(s.Z,null,r.createElement("div",null,r.createElement("div",{className:"py-8"},r.createElement(o.Z,{data:x.node})),r.createElement("div",{className:"mt-14 sm:mt-20"},r.createElement("div",{className:"text-center mb-4 max-w-2xl container"},r.createElement("span",{className:"uppercase font-bold text-indigo-500"},"Blogs"),r.createElement("h4",{className:"font-black mt-2 text-3xl"},"Helpful Resources")),r.createElement("ul",{className:"grid grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-3 gap-8"},h.map((function(e,t){var l=e.node;return r.createElement("li",{key:t},r.createElement(u.Z,{data:l}))}))),h.length>5?r.createElement(E.gp,{link:"blog"}):null),r.createElement("div",{className:"mt-28"},r.createElement("div",{className:"text-center mb-4"},r.createElement("span",{className:"uppercase font-bold text-indigo-500"},"Works"),r.createElement("h4",{className:"font-black mt-2 text-3xl"},"Our Projects")),r.createElement("ul",{className:"grid grid-cols-1 mt-8 sm:grid-cols-2 md:grid-cols-3 gap-8"},g?r.createElement(r.Fragment,null,r.createElement("li",null,r.createElement(d.I,null)),r.createElement("li",null,r.createElement(d.I,null)),r.createElement("li",null,r.createElement(d.I,null))):null,f?f.workCollection.items.map((function(e,t){return r.createElement("li",{key:t},r.createElement(d.Z,{data:e}))})):null),(null==f?void 0:f.workCollection.items.length)>5?r.createElement(E.gp,{link:"work"}):null)))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-c551086ef3d09dc30b06.js.map