import Vue from 'vue'
import Vuex from 'vuex'
import questions from './questions'
import RegisterIcon from "@/assets/icons/register-icon.png"
import DeliveryIcon from "@/assets/icons/delivery-icon.png"
import ExchangesIcon from "@/assets/icons/exchanges-icon.png"
import RequestsIcon from "@/assets/icons/requests-icon.png"
import ProductsIcon from "@/assets/icons/products-icon.png"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    topicOptions: [
      {
        title: 'Register',
        url: '/smart-service/topics/Register',
        icon: RegisterIcon
      },
      {
        title: 'Delivery',
        url: '/smart-service/topics/Delivery',
        icon: DeliveryIcon
      },
      {
        title: 'Exchanges',
        url: '/smart-service/topics/Exchanges',
        icon: ExchangesIcon
      },
      {
        title: 'Requests',
        url: '/smart-service/topics/Requests',
        icon: RequestsIcon
      },
      {
        title: 'Products',
        url: '/smart-service/topics/Products',
        icon: ProductsIcon
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
