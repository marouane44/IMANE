(window.webpackJsonp=window.webpackJsonp||[]).push([[5,4,6,7],{217:function(t,e,r){var content=r(221);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("423474fa",content,!0,{sourceMap:!1})},218:function(t,e,r){var content=r(226);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("9bb5f450",content,!0,{sourceMap:!1})},219:function(t,e,r){var content=r(228);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(50).default)("e89aa05e",content,!0,{sourceMap:!1})},220:function(t,e,r){"use strict";r(217)},221:function(t,e,r){var c=r(49)(!1);c.push([t.i,".product-card[data-v-26ac1bb4]{flex:0 0 100%;width:100%;padding:1rem;transition:.3s}.product-card[data-v-26ac1bb4]:hover{opacity:.6}.product-card a[data-v-26ac1bb4]{text-decoration:none;color:#000}@media screen and (max-width:768px){.product-card[data-v-26ac1bb4]{flex:0 0 100%;width:100%}}@media screen and (min-width:769px){.product-card[data-v-26ac1bb4]{flex:0 0 50%;width:50%}}@media screen and (min-width:960px){.product-card[data-v-26ac1bb4]{flex:0 0 33%;width:33%}}@media screen and (min-width:1152px){.product-card[data-v-26ac1bb4]{flex:0 0 25%;width:25%}}.product-card__image[data-v-26ac1bb4]{background:#f5f4f2;padding:3rem;margin-bottom:1rem;border-radius:5px}.product-card__image img[data-v-26ac1bb4]{width:100%}.product-card__title[data-v-26ac1bb4]{text-align:center;font-size:1.1rem}.product-card__price[data-v-26ac1bb4]{padding-top:.5rem;text-align:center;font-weight:500;font-size:1.3rem}.product-card__footer[data-v-26ac1bb4]{display:flex;justify-content:space-between}",""]),t.exports=c},222:function(t,e,r){"use strict";r.r(e);var c={name:"ProductsList",components:{ProductsListCard:r(224).default},props:{products:{type:Array,required:!0},loading:{type:Boolean,required:!0}}},d=(r(225),r(29)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"preloader preloader--relative"}),t._v(" "),r("div",{staticClass:"products-list"},t._l(t.products,(function(t){return r("products-list-card",{key:t.id,attrs:{product:t}})})),1)])}),[],!1,null,"71eb47d9",null);e.default=component.exports},223:function(t,e,r){"use strict";r.r(e);r(30),r(11),r(21),r(42),r(43);var c=r(13),d=r(35);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}var n={name:"ProductsListFilter",computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(c.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(d.c)({categories:function(t){return t.filters.categories}})),created:function(){this.categories||this.$store.dispatch("filters/fetchCategories")}},l=n,m=(r(227),r(29)),component=Object(m.a)(l,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"filters"},[r("div",{staticClass:"filter"},[r("ul",{staticClass:"filter__list"},[r("li",{staticClass:"filter__header"},[t._v("\n        Categories:\n      ")]),t._v(" "),r("li",{staticClass:"filter__item",class:{"filter__item--active":!t.$route.params.category}},[r("nuxt-link",{attrs:{to:{name:"index"}}},[t._v("\n          All\n        ")])],1),t._v(" "),t._l(t.categories,(function(e){return r("li",{key:e.id,staticClass:"filter__item",class:{"filter__item--active":t.$route.params.category===e.slug+"-"+e.id}},[r("nuxt-link",{attrs:{to:{name:"categories-category",params:{category:e.slug+"-"+e.id}}}},[t._v("\n          "+t._s(e.title)+"\n        ")])],1)}))],2)])])}),[],!1,null,"bc69c66e",null);e.default=component.exports},224:function(t,e,r){"use strict";r.r(e);var c={name:"ProductsListCard",props:{product:{type:Object,required:!0}}},d=(r(220),r(29)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"product-card"},[r("nuxt-link",{attrs:{to:{name:"products-product",params:{product:t.product.slug+"-"+t.product.id}}}},[r("div",{staticClass:"product-card__image"},[r("picture",[r("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{media:"(min-width: 1152px)","data-srcset":"\n            "+t.product.images[0]+"?width=144 1x,\n            "+t.product.images[0]+"?width=216 1.5x,\n            "+t.product.images[0]+"?width=288 2x,\n            "+t.product.images[0]+"?width=432 3x,\n            "+t.product.images[0]+"?width=576 4x\n          "}}),t._v(" "),r("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{media:"(min-width: 960px)","data-srcset":"\n            "+t.product.images[0]+"?width=168 1x,\n            "+t.product.images[0]+"?width=252 1.5x,\n            "+t.product.images[0]+"?width=336 2x,\n            "+t.product.images[0]+"?width=504 3x,\n            "+t.product.images[0]+"?width=672 4x\n          "}}),t._v(" "),r("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{media:"(min-width: 769px)","data-srcset":"\n            "+t.product.images[0]+"?width=225 1x,\n            "+t.product.images[0]+"?width=338 1.5x,\n            "+t.product.images[0]+"?width=450 2x,\n            "+t.product.images[0]+"?width=675 3x,\n            "+t.product.images[0]+"?width=900 4x\n          "}}),t._v(" "),r("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{media:"(min-width: 415px)","data-srcset":"\n            "+t.product.images[0]+"?width=640 1x,\n            "+t.product.images[0]+"?width=960 1.5x,\n            "+t.product.images[0]+"?width=1280 2x,\n            "+t.product.images[0]+"?width=1920 3x,\n            "+t.product.images[0]+"?width=2560 4x\n          "}}),t._v(" "),r("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{media:"(max-width: 414px)","data-srcset":"\n            "+t.product.images[0]+"?width=286 1x,\n            "+t.product.images[0]+"?width=429 1.5x,\n            "+t.product.images[0]+"?width=572 2x,\n            "+t.product.images[0]+"?width=858 3x,\n            "+t.product.images[0]+"?width=1144 4x\n          "}}),t._v(" "),r("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.product.images[0],alt:t.product.title}})])]),t._v(" "),r("div",{staticClass:"product-card__title"},[t._v("\n      "+t._s(t.product.title)+"\n    ")]),t._v(" "),r("div",{staticClass:"product-card__price"},[t._v("\n      "+t._s(t._f("formatPrice")(t.product.price))+"\n    ")])])],1)}),[],!1,null,"26ac1bb4",null);e.default=component.exports},225:function(t,e,r){"use strict";r(218)},226:function(t,e,r){var c=r(49)(!1);c.push([t.i,".products-list[data-v-71eb47d9]{display:flex;flex-wrap:wrap;margin:-1rem}",""]),t.exports=c},227:function(t,e,r){"use strict";r(219)},228:function(t,e,r){var c=r(49)(!1);c.push([t.i,".filters[data-v-bc69c66e]{display:flex}.filter[data-v-bc69c66e]{padding:1rem 0}.filter__list[data-v-bc69c66e]{display:flex;flex-wrap:wrap;list-style:none}.filter__header[data-v-bc69c66e]{font-weight:500}.filter__item[data-v-bc69c66e]{padding-left:1rem}.filter__item a[data-v-bc69c66e]{color:#000;text-decoration:none;border-bottom:1px dotted #000;transition:.3s}.filter__item--active a[data-v-bc69c66e],.filter__item a[data-v-bc69c66e]:hover{border-bottom-style:solid;opacity:.5}",""]),t.exports=c},232:function(t,e,r){"use strict";r.r(e);var c=r(2),d=(r(20),r(222)),o={name:"CommonProductsListPage",components:{ProductsListFilter:r(223).default,ProductsList:d.default},props:{loadProducts:{type:Function,required:!0}},data:function(){return{products:[],productsLoading:!1}},created:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.productsLoading=!0,e.next=3,t.loadProducts();case 3:t.products=e.sent,t.productsLoading=!1;case 5:case"end":return e.stop()}}),e)})))()}},n=r(29),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("products-list-filter"),t._v(" "),r("products-list",{attrs:{loading:t.productsLoading,products:t.products}})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ProductsListFilter:r(223).default,ProductsList:r(222).default})}}]);