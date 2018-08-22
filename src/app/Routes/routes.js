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
      name: 'First Page',
      icon: 'send'
    },
    {
      path: '/secondPage',
      component: SecondPage,
      name: 'Second Page',
      icon: 'move_to_inbox'
    }
]
  
  export default routes