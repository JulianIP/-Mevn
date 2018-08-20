import Vue from 'vue'
import App from './App.vue'
import VueMaterial from 'vue-material'
import VueResource from 'vue-resource'
import VueRouter from 'vue-router'
import 'vue-material/dist/vue-material.css'

// Rutas
import routes from './routes/routes'

// Configuración de ruteo
const router = new VueRouter({
    routes,
    linkExactActiveClass: 'nav-item active'
})

Vue.use(VueMaterial)
Vue.use(VueResource)
Vue.use(VueRouter)

new Vue({
    render: h => h(App),
    router,
    data: {
        routes: routes.slice(1,routes.length)
    }
}).$mount('#app');