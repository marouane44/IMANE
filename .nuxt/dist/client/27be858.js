(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{231:function(e,t,d){var content=d(239);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,d(50).default)("2ba55cec",content,!0,{sourceMap:!1})},238:function(e,t,d){"use strict";d(231)},239:function(e,t,d){var r=d(49)(!1);r.push([e.i,"@media screen and (max-width:768px){.product-gallery[data-v-309ad1c3]{width:100%}}@media screen and (min-width:769px){.product-gallery[data-v-309ad1c3]{width:100%}}@media screen and (min-width:960px){.product-gallery[data-v-309ad1c3]{width:50%}}@media screen and (min-width:1152px){.product-gallery[data-v-309ad1c3]{width:50%}}.product-gallery__preview[data-v-309ad1c3]{background:#f5f4f2;padding:5rem;border-radius:5px}.product-gallery__preview img[data-v-309ad1c3],.product-gallery__preview picture[data-v-309ad1c3]{width:100%}.product-gallery__thumbs[data-v-309ad1c3]{display:flex;flex-wrap:wrap}.product-gallery__thumbs-item[data-v-309ad1c3]{max-width:70px;padding:.5rem;margin:.5rem .5rem 1.5rem 0;background:#f5f4f2;border-radius:5px;cursor:pointer}.product-gallery__thumbs-item[data-v-309ad1c3]:first-child{margin-left:0}",""]),e.exports=r},241:function(e,t,d){"use strict";d.r(t);var r={name:"ProductGallery",props:{product:{type:Object,required:!0}},data:function(){return{selectedImage:""}},computed:{activeImage:function(){return this.selectedImage?this.selectedImage:this.product.images?this.product.images[0]:""}},methods:{showImage:function(img){this.selectedImage=img}}},c=(d(238),d(29)),component=Object(c.a)(r,(function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("div",{staticClass:"product-gallery"},[d("div",{staticClass:"product-gallery__preview"},[d("picture",[d("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{media:"(min-width: 1152px)","data-srcset":"\n          "+e.activeImage+"?width=368 1x,\n          "+e.activeImage+"?width=552 1.5x,\n          "+e.activeImage+"?width=736 2x,\n          "+e.activeImage+"?width=1104 3x,\n          "+e.activeImage+"?width=1472 4x\n        "}}),e._v(" "),d("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{media:"(min-width: 960px)","data-srcset":"\n          "+e.activeImage+"?width=272 1x,\n          "+e.activeImage+"?width=408 1.5x,\n          "+e.activeImage+"?width=544 2x,\n          "+e.activeImage+"?width=816 3x,\n          "+e.activeImage+"?width=1088 4x\n        "}}),e._v(" "),d("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{media:"(min-width: 769px)","data-srcset":"\n          "+e.activeImage+"?width=513 1x,\n          "+e.activeImage+"?width=770 1.5x,\n          "+e.activeImage+"?width=1026 2x,\n          "+e.activeImage+"?width=1539 3x,\n          "+e.activeImage+"?width=2052 4x\n        "}}),e._v(" "),d("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{media:"(min-width: 415px)","data-srcset":"\n          "+e.activeImage+"?width=576 1x,\n          "+e.activeImage+"?width=864 1.5x,\n          "+e.activeImage+"?width=1152 2x,\n          "+e.activeImage+"?width=1728 3x,\n          "+e.activeImage+"?width=2304 4x\n        "}}),e._v(" "),d("source",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{media:"(max-width: 414px)","data-srcset":"\n          "+e.activeImage+"?width=222 1x,\n          "+e.activeImage+"?width=333 1.5x,\n          "+e.activeImage+"?width=444 2x,\n          "+e.activeImage+"?width=666 3x,\n          "+e.activeImage+"?width=888 4x\n        "}}),e._v(" "),d("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":e.activeImage,alt:e.product.title}})])]),e._v(" "),d("div",{staticClass:"product-gallery__thumbs"},e._l(e.product.images,(function(image){return d("div",{key:image,staticClass:"product-gallery__thumbs-item",on:{click:function(t){return e.showImage(image)}}},[d("img",{directives:[{name:"lazy-load",rawName:"v-lazy-load"}],attrs:{"data-src":image+"?width=54",alt:e.product.title}})])})),0)])}),[],!1,null,"309ad1c3",null);t.default=component.exports}}]);