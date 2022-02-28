<template>
  <div class="info_question" :class="{ 'is_open': isOpen }">
    <div class="info_question_link d-flex align-items-center" @click="openCloseQuestion">
      <img :src="questionIcon" alt="open_close_question">
      <h4 class="info_question_title fw-semi text-dark_3 mb-0">{{ info.question }}</h4>
    </div>
    <transition name="fade">
      <div v-if="isOpen" class="info_answer">
        <p class="info_answer_content text-dark_3">{{ info.answer }}</p>
        <Useful @survey="AnswerSurvey"/>
      </div>
    </transition>
  </div>
</template>

<script>
import questionIcon from "@/assets/icons/icone-pergunta.png"
import Useful from '@/components/Useful.vue'

export default {
  name: 'Question',
  components: {
    Useful
  },
  props: {
    info: {
      type: Object,
      default: function () {
        return {
          id: 0,
          topic: '',
          question: '',
          answer: '',
          useful: '',
          frequent: false
        }
      }
    }
  },
  data () {
    return {
      questionIcon,
      isOpen: false
    }
  },
  methods: {
    openCloseQuestion () {
      this.isOpen = !this.isOpen
    },
    AnswerSurvey(value) {
      // fazer alguma coisa com o enquente 
      console.log('Answer Survey', value)
    }
  }
}
</script>

<style scoped>
.info_question { margin-bottom: 30px; }
.info_question_link { cursor: pointer; }
.info_question_link img { height: 12px; transition: all .5s; }
.info_question_title { font-size: 1.125rem; margin-left: 14px; }

.info_answer { padding-left: 27px; }
.info_answer_content { font-size: 0.8125rem; line-height: 1.25rem; margin: 25px 0;  }

.is_open .info_question_link img { transform: rotate(90deg); }

.fade-enter-active, .fade-leave-active { transition: opacity 1s; }
.fade-enter, .fade-leave-to { opacity: 0; }
</style>

