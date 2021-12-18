import Vue from 'vue'
import VueRouter from 'vue-router'
import TopicLayout from '../views/TopicLayout.vue'
import CentralAtendimento from '../views/CentralAtendimento.vue'
import AtendimentoInteligente from '../views/AtendimentoInteligente.vue'
import Perguntas from '../views/Perguntas.vue'
import ViaEmail from '../views/ViaEmail.vue'
import Results from '../views/Results.vue'
import Frequent from '../views/Frequent.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Central Atendimento',
    component: CentralAtendimento
  },
  {
    path: '/atendimento-inteligente',
    name: 'Atendimento Inteligente',
    component: AtendimentoInteligente
  },
  {
    path: '/atendimento-inteligente/topicos',
    component: TopicLayout,
    children: [
      {
        path: 'via-email',
        name: 'Via E-mail',
        component: ViaEmail
      },
      {
        path: 'frequentes',
        name: 'Perguntas Frequentes',
        component: Frequent
      },
      {
        path: ':topic',
        name: 'Perguntas',
        component: Perguntas
      },
      {
        path: 'buscar/:tosearch',
        name: 'Resultados',
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
