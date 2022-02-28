<template>
  <div class="was_it_useful">
    <div class="useful_question d-flex align-items-center">
      <span class="fw-semi text-dark_3">{{ question }}</span>
      <button class="btn_answer_option fw-semi text-uppercase" :class="{ 'positive': useful, 'block_event': blockEvent }" @click="positiveAnswer">{{ positive }}</button>
      <button class="btn_answer_option fw-semi text-uppercase" :class="{ 'negative': useless, 'block_event': blockEvent }" @click="negativeAnswer">{{ negative }}</button>
    </div>
    <div class="useful_answer" :class="{ 'opacity-0': !showAnswer }">
      <h4 class="useful_answer_title fw-semi text-dark_3">{{ answer.title }}</h4>
      <p class="useful_answer_subtitle text-dark_3">{{ answer.subtitle }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Useful',
  data () {
    return {
      question: 'Was this answer helpful?',
      positive: 'Yes',
      negative: 'No',
      useful: true,
      useless: true,
      blockEvent: false,
      usefulAnswer: {
        title: 'Glad we were able to help!',
        subtitle: 'You deserve the best service'
      },
      uselessAnswer: {
        title: 'Sorry for not helping...',
        subtitle: 'If you find it necessary, contact us through our other channels!'
      },
      answer: {},
      showAnswer: false
    }
  },
  methods: {
    positiveAnswer () {
      this.useless = false
      this.blockEvent = true
      this.answer = this.usefulAnswer
      this.showAnswer = true
      this.$emit('survey', true)
    },
    negativeAnswer () {
      this.useful = false
      this.blockEvent = true
      this.answer = this.uselessAnswer
      this.showAnswer = true
      this.$emit('survey', false)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.useful_question span { font-size: 0.8125rem; line-height: 1.25rem; }
.btn_answer_option { background: var(--dark_85); color: white; font-size: 0.8125rem; line-height: 1.25rem; border: none; padding: 3px 20px; margin-left: 15px; }
.positive { background: var(--positive); }
.negative { background: var(--negative); }
.useful_answer { margin-top: 25px; min-height: 48px; }
.useful_answer_title { font-size: 1rem; line-height: 1.25rem; }
.useful_answer_subtitle { font-size: 0.8125rem; line-height: 1.25rem; }
</style>
