import { createRouter, createWebHistory } from 'vue-router'
import ProductsList from '../views/ProductsListView.vue'
import UserCart from '../views/UserCartView.vue'
import ShopAdmin from '../views/ShopAdminView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', redirect: '/products' },
    { path: '/products', component: ProductsList },
    { path: '/cart', component: UserCart },
    { path: '/admin', component: ShopAdmin }
  ]
})

export default router
