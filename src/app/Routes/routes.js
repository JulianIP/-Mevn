// Vistas
import FirstPage from '../Pages/FirstPage.vue'
import SecondPage from '../Pages/SecondPage.vue'

const routes = [
    {
      path: '/',
      component: FirstPage,
      redirect: '/firstPage'
    },
    {
      path: '/firstPage',
      component: FirstPage,
      name: 'First Page'
    },
    {
      path: '/secondPage',
      component: SecondPage,
      name: 'Second Page'
    }
]
  
  export default routes