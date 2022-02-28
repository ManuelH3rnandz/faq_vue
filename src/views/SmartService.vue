<template>
  <div class="home">
    <h1 class="text-uppercase fs-3 fw-semi text-dark_2 text-center mb-md-5 mb-4"> {{ pageTitle }} </h1>
    <Search />
    <h2 class="fs-5 fw-semi text-dark_6 text-center mb-5"> {{ pageSubTitle }} </h2>
    <div class="d-flex flex-wrap justify-content-center gap_40">
      <Button v-for="option in options" :key="option.title" :is-intern="true" :text-inside="false" :link="option"/>
    </div>
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Button from '@/components/Button.vue'
import Search from '@/components/Search.vue'


export default {
  name: 'AtendimentoInteligente',
  components: {
    Button,
    Search
  },
  computed: {
    ...mapState({
      options: 'topicOptions',
    })
  },
  data () {
    return {
      pageTitle: 'FAQ',
      pageSubTitle: 'Browse the most searched topics:'
    }
  },
  mounted () {
    // get the questions here to have them in the store,
    // for when going to the next route, just filter them
    // and not make the user wait for them to load 
    this.getAllQuestion()
  },
  methods: {
    // getAllQuestion --> here to make a filter in input search if i have time at the end
    ...mapActions([
      'getAllQuestion'
    ])
  }
}
</script>
