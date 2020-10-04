import MainRoot from '@/views/main/MainRoot';
import CartRoot from '@/views/cart/CartRoot';

export const routes = [
  {
    path: '/',
    name: 'main',
    component: MainRoot,
  },
  {
    path: '/cart',
    name: 'cart',
    component: CartRoot,
  },
  {
    path: '/products',
    name: 'products',
    component: CartRoot,
  },
  {
    path: '/login',
    name: 'login',
    component: CartRoot,
  },
  {
    path: '/contacts',
    name: 'contacts',
    component: CartRoot,
  }
]

