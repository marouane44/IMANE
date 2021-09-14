export const CommonNavbar = () => import('../..\\components\\CommonNavbar.vue' /* webpackChunkName: "components/common-navbar" */).then(c => wrapFunctional(c.default || c))
export const CartProductsList = () => import('../..\\components\\cart\\CartProductsList.vue' /* webpackChunkName: "components/cart-products-list" */).then(c => wrapFunctional(c.default || c))
export const ProductsListCommonProductsListPage = () => import('../..\\components\\products-list\\CommonProductsListPage.vue' /* webpackChunkName: "components/products-list-common-products-list-page" */).then(c => wrapFunctional(c.default || c))
export const ProductsListProductListCard = () => import('../..\\components\\products-list\\ProductListCard.vue' /* webpackChunkName: "components/products-list-product-list-card" */).then(c => wrapFunctional(c.default || c))
export const ProductsList = () => import('../..\\components\\products-list\\ProductsList.vue' /* webpackChunkName: "components/products-list" */).then(c => wrapFunctional(c.default || c))
export const ProductsListFilter = () => import('../..\\components\\products-list\\ProductsListFilter.vue' /* webpackChunkName: "components/products-list-filter" */).then(c => wrapFunctional(c.default || c))
export const ProductGallery = () => import('../..\\components\\product-details\\ProductGallery.vue' /* webpackChunkName: "components/product-gallery" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
