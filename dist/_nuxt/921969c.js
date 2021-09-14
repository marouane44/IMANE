(window.webpackJsonp=window.webpackJsonp||[]).push([[4,7],{217:function(t,d,e){var content=e(221);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(50).default)("423474fa",content,!0,{sourceMap:!1})},218:function(t,d,e){var content=e(226);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(50).default)("9bb5f450",content,!0,{sourceMap:!1})},220:function(t,d,e){"use strict";e(217)},221:function(t,d,e){var r=e(49)(!1);r.push([t.i,".product-card[data-v-26ac1bb4]{flex:0 0 100%;width:100%;padding:1rem;transition:.3s}.product-card[data-v-26ac1bb4]:hover{opacity:.6}.product-card a[data-v-26ac1bb4]{text-decoration:none;color:#000}@media screen and (max-width:768px){.product-card[data-v-26ac1bb4]{flex:0 0 100%;width:100%}}@media screen and (min-width:769px){.product-card[data-v-26ac1bb4]{flex:0 0 50%;width:50%}}@media screen and (min-width:960px){.product-card[data-v-26ac1bb4]{flex:0 0 33%;width:33%}}@media screen and (min-width:1152px){.product-card[data-v-26ac1bb4]{flex:0 0 25%;width:25%}}.product-card__image[data-v-26ac1bb4]{background:#f5f4f2;padding:3rem;margin-bottom:1rem;border-radius:5px}.product-card__image img[data-v-26ac1bb4]{width:100%}.product-card__title[data-v-26ac1bb4]{text-align:center;font-size:1.1rem}.product-card__price[data-v-26ac1bb4]{padding-top:.5rem;text-align:center;font-weight:500;font-size:1.3rem}.product-card__footer[data-v-26ac1bb4]{display:flex;justify-content:space-between}",""]),t.exports=r},222:function(t,d,e){"use strict";e.r(d);var r={name:"ProductsList",components:{ProductsListCard:e(224).default},props:{products:{type:Array,required:!0},loading:{type:Boolean,required:!0}}},c=(e(225),e(29)),component=Object(c.a)(r,(function(){var t=this,d=t.$createElement,e=t._self._c||d;return e("div",[e("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"preloader preloader--relative"}),t._v(" "),e("div",{staticClass:"products-list"},t._l(t.products,(function(t){return e("products-list-card",{key:t.id,attrs:{product:t}})})),1)])}),[],!1,null,"71eb47d9",null);d.default=component.exports},224:function(t,d,e){"use strict";e.r(d);var r={name:"ProductsListCard",props:{product:{type:Object,required:!0}}},c=(e(220),e(29)),component=Object(c.a)(r,(function(){var t=this,d=t.$createElement,e=t._self._c||d;return e("div",{staticClass:"product-card"},[e("nuxt-link",{attrs:{to:{name:"products-product",params:{product:t.product.slug+"-"+t.product.id}}}},[e("div",{staticClass:"product-card__image"},[e("picture",[e("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{media:"(min-width: 1152px)","data-srcset":"\n            "+t.product.images[0]+"?width=144 1x,\n            "+t.product.images[0]+"?width=216 1.5x,\n            "+t.product.images[0]+"?width=288 2x,\n            "+t.product.images[0]+"?width=432 3x,\n            "+t.product.images[0]+"?width=576 4x\n          "}}),t._v(" "),e("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{media:"(min-width: 960px)","data-srcset":"\n            "+t.product.images[0]+"?width=168 1x,\n            "+t.product.images[0]+"?width=252 1.5x,\n            "+t.product.images[0]+"?width=336 2x,\n            "+t.product.images[0]+"?width=504 3x,\n            "+t.product.images[0]+"?width=672 4x\n          "}}),t._v(" "),e("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{media:"(min-width: 769px)","data-srcset":"\n            "+t.product.images[0]+"?width=225 1x,\n            "+t.product.images[0]+"?width=338 1.5x,\n            "+t.product.images[0]+"?width=450 2x,\n            "+t.product.images[0]+"?width=675 3x,\n            "+t.product.images[0]+"?width=900 4x\n          "}}),t._v(" "),e("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{media:"(min-width: 415px)","data-srcset":"\n            "+t.product.images[0]+"?width=640 1x,\n            "+t.product.images[0]+"?width=960 1.5x,\n            "+t.product.images[0]+"?width=1280 2x,\n            "+t.product.images[0]+"?width=1920 3x,\n            "+t.product.images[0]+"?width=2560 4x\n          "}}),t._v(" "),e("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{media:"(max-width: 414px)","data-srcset":"\n            "+t.product.images[0]+"?width=286 1x,\n            "+t.product.images[0]+"?width=429 1.5x,\n            "+t.product.images[0]+"?width=572 2x,\n            "+t.product.images[0]+"?width=858 3x,\n            "+t.product.images[0]+"?width=1144 4x\n          "}}),t._v(" "),e("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":t.product.images[0],alt:t.product.title}})])]),t._v(" "),e("div",{staticClass:"product-card__title"},[t._v("\n      "+t._s(t.product.title)+"\n    ")]),t._v(" "),e("div",{staticClass:"product-card__price"},[t._v("\n      "+t._s(t._f("formatPrice")(t.product.price))+"\n    ")])])],1)}),[],!1,null,"26ac1bb4",null);d.default=component.exports},225:function(t,d,e){"use strict";e(218)},226:function(t,d,e){var r=e(49)(!1);r.push([t.i,".products-list[data-v-71eb47d9]{display:flex;flex-wrap:wrap;margin:-1rem}",""]),t.exports=r}}]);