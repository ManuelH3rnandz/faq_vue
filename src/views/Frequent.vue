<template>
  <div class="questions">
    <h1 class="text-uppercase fs-3 text-dark_3 fw-semi mb-5">Perguntas mais frequentes</h1>
    <Question v-for="question in questionByFrequent" :key="question.id" :info="question" />
    <GoTopics />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Question from '@/components/Question.vue'
import GoTopics from '@/components/GoTopics.vue'
import arrowLogo from "@/assets/icons/topico-icon.png"

export default {
  name: 'Frequent',
  components: {
    Question,
    GoTopics
  },
  computed: {
    ...mapGetters([
      'questionByFrequent'
    ])
  },
  data () {
    return {
      arrowLogo
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>

