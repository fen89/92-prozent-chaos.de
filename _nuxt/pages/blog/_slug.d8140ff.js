(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{207:function(t,e,n){"use strict";n.r(e);var r={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},o=n(15),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-between"},[t.prev?n("NuxtLink",{staticClass:"text-primary font-bold hover:underline",attrs:{to:{name:"blog-slug",params:{slug:t.prev.slug}}}},[t._v(t._s(t.prev.title))]):n("span",[t._v(" ")]),t._v(" "),t.next?n("NuxtLink",{staticClass:"font-bold hover:underline",attrs:{to:{name:"blog-slug",params:{slug:t.next.slug}}}},[t._v(t._s(t.next.title))]):n("span",[t._v(" ")])],1)}),[],!1,null,null,null);e.default=component.exports},213:function(t,e,n){"use strict";n.r(e);var r=n(46),o=(n(18),n(2)),c={name:"PostPage",components:{PrevNext:n(207).default},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,l,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$route.params.slug,e.prev=1,e.next=4,t.$content("posts/".concat(n)).where({draft:!1}).fetch();case 4:return t.post=e.sent,e.next=7,t.$content("posts").sortBy("createdAt").where({draft:!1}).surround(t.$route.params.slug).fetch();case 7:o=e.sent,c=Object(r.a)(o,2),l=c[0],v=c[1],t.previousPost=v,t.nextPost=l,e.next=18;break;case 15:e.prev=15,e.t0=e.catch(1),t.$nuxt.error({statusCode:404,message:"post not found ;/"});case 18:case"end":return e.stop()}}),e,null,[[1,15]])})))()},data:function(){return{post:{},previousPost:null,nextPost:null}},head:function(){return{title:this.title,meta:[{name:"author",content:"Tobi"},{name:"description",property:"og:description",content:this.description,hid:"description"},{name:"og:title",content:this.title},{name:"twitter:description",content:this.description}]}}},l=n(15),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container mx-auto px-5"},[n("article",[n("h1",{staticClass:"text-3xl font-medium text-center text-teal-500 title-font mb-2"},[t._v(t._s(t.post.title))]),t._v(" "),n("p",{staticClass:"mt-1 text-gray-500 text-md text-center"},[n("span",{staticClass:"uppercase"},[t._v(t._s(t._f("date")(t.post.createdAt,"DD MMM YYYY")))]),t._v(" "),t._v("·"),t._v(" "),n("span",[t._v(t._s(t.post.readingTime))])]),t._v(" "),n("nuxt-content",{attrs:{document:t.post}}),t._v(" "),n("prev-next",{attrs:{prev:t.previousPost,next:t.nextPost}})],1)])}),[],!1,null,"7bb44413",null);e.default=component.exports;installComponents(component,{PrevNext:n(207).default})}}]);