<template>
  <div class="questions">
    <h1 class="text-uppercase fs-3 text-dark_3 fw-semi mb-5">resultados para: "{{ $route.params.tosearch }}"</h1>
    <template v-if="questions.length != 0">
      <Question v-for="question in questions" :key="question.id" :info="question" />
      <GoTopics />
    </template>
    <template v-else>
      <div class="empty_result">
        {{ emptyMessage }}
      </div>
      <div class="d-flex justify-content-center">
        <router-link to="/atendimento-inteligente/topicos/frequentes" class="see_more_frequent d-flex justify-content-center align-items-center mt-4 text-decoration-none">
          {{ moreFrequentMessage }}
        </router-link>
      </div>
    </template>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Question from '@/components/Question.vue'
import GoTopics from '@/components/GoTopics.vue'
import arrowLogo from "@/assets/icons/topico-icon.png"

export default {
  name: 'Results',
  components: {
    Question,
    GoTopics
  },
  computed: {
    ...mapGetters([
      'questionByWord'
    ]),
    questions () {
      return this.questionByWord(this.$route.params.tosearch)
    }
  },
  data () {
    return {
      emptyMessage: 'Não há resultados para sua busca',
      moreFrequentMessage: 'mostrar as perguntas mais frequentes',
      arrowLogo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.empty_result { border: 2px solid var(--negative); padding: 20px; border-radius: 12px; text-align: center; color: var(--negative); font-weight: bold; font-size: 1.25rem; }
.see_more_frequent { background: var(--send_btn); color: white; font-weight: 600; padding: 10px 15px; border-radius: 7px; cursor: pointer; }
</style>

