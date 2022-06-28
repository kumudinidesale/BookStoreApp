import { createRouter, createWebHistory } from 'vue-router'
import Home from './components/HomePage.vue'
import Cart from './components/Cart.vue'
import Login from './components/login.vue'
import PlaceOrder from './components/PlaceOrder.vue'
const routes= [
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/login',
        name: 'Login',
        component: Login
    },
    {
        path: '/placeOrder',
        name: 'PlaceOrder',
        component: PlaceOrder
    },
];
const router = createRouter({
     history: createWebHistory(),
     routes
     })
     export default router