<template>
  <div class="questions">
    <h1 class="text-uppercase fs-5 text-dark_6 fw-semi mb-5">results for: "{{ $route.params.tosearch }}"</h1>
    <template v-if="questions.length != 0">
      <Question v-for="question in questions" :key="question.id" :info="question" />
      <GoTopics />
    </template>
    <template v-else>
      <div class="empty_result">
        {{ emptyMessage }}
      </div>
      <div class="d-flex justify-content-center">
        <router-link to="/smart-service/topics/frequent" class="see_more_frequent d-flex justify-content-center align-items-center mt-4 text-decoration-none">
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
      emptyMessage: 'There are no results for your search.',
      moreFrequentMessage: 'show the most frequently asked questions',
      arrowLogo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.empty_result { border: 2px solid var(--negative); padding: 20px; border-radius: 12px; text-align: center; color: var(--negative); font-weight: bold; font-size: 1.25rem; }
.see_more_frequent { background: var(--send_btn); color: white; font-size: .9rem; font-weight: 600; padding: 10px 15px; border-radius: 7px; cursor: pointer; }
</style>

