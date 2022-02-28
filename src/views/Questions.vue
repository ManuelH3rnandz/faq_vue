<template>
  <div class="questions">
    <h1 class="text-uppercase fs-5 text-dark_6 fw-semi mb-5">{{ $route.params.topic }}</h1>
    <Question v-for="question in questions" :key="question.id" :info="question" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Question from '@/components/Question.vue'


export default {
  name: 'Perguntas',
  components: {
    Question
  },
  computed: {
    ...mapGetters([
      'questionByTopic'
    ]),
    questions () {
      return this.questionByTopic(this.$route.params.topic)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
@media (max-width: 992px) {
  h1 { display: none; }
}
</style>

