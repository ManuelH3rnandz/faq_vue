import Vue from 'vue'
import VueRouter from 'vue-router'
import TopicLayout from '../views/TopicLayout.vue'
import FAQ from '../views/FAQ.vue'
import SmartService from '../views/SmartService.vue'
import Questions from '../views/Questions.vue'
import ViaEmail from '../views/ViaEmail.vue'
import Results from '../views/Results.vue'
import Frequent from '../views/Frequent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'FAQ',
    component: FAQ
  },
  {
    path: '/smart-service',
    name: 'Smart Service',
    component: SmartService
  },
  {
    path: '/smart-service/topics',
    component: TopicLayout,
    children: [
      {
        path: 'via-email',
        name: 'Via E-mail',
        component: ViaEmail
      },
      {
        path: 'frequent',
        name: 'Common Questions',
        component: Frequent
      },
      {
        path: ':topic',
        name: 'Questions',
        component: Questions
      },
      {
        path: 'results/:tosearch',
        name: 'Results',
        component: Results
      }
    ]
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
