import Vue from 'vue'
import Vuex from 'vuex'
import questions from './questions'
import cadastroIcon from "@/assets/icons/cadastro-icon.png"
import entregaIcon from "@/assets/icons/entrega-icon.png"
import trocasIcon from "@/assets/icons/troca-icon.png"
import pedidosIcon from "@/assets/icons/pedido-icon.png"
import produtosIcon from "@/assets/icons/produto-icon.png"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topicOptions: [
      {
        title: 'Cadastro',
        url: '/atendimento-inteligente/topicos/Cadastro',
        icon: cadastroIcon
      },
      {
        title: 'Entrega',
        url: '/atendimento-inteligente/topicos/Entrega',
        icon: entregaIcon
      },
      {
        title: 'Trocas',
        url: '/atendimento-inteligente/topicos/Trocas',
        icon: trocasIcon
      },
      {
        title: 'Pedidos',
        url: '/atendimento-inteligente/topicos/Pedidos',
        icon: pedidosIcon
      },
      {
        title: 'Produtos',
        url: '/atendimento-inteligente/topicos/Produtos',
        icon: produtosIcon
      }
    ],
    allQuestions: []
  },
  getters: {
    questionByTopic: (state) => (topic) => {
      return state.allQuestions.filter(question => (question.topic == topic))
    },
    questionByWord: (state) => (word) => {
      return state.allQuestions.filter(question => (question.question.toUpperCase().includes(word.toUpperCase())))
    },
    questionByFrequent: (state) => {
      return state.allQuestions.filter(question => (question.frequent))
    },
  },
  mutations: {
    SET_ALL_QUESTIONS (state, questions) {
      state.allQuestions = questions
    }
  },
  actions: {
    getAllQuestion (context) {
      context.commit('SET_ALL_QUESTIONS', questions)
    }
  },
  modules: {
  }
})
