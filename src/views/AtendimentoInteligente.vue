<template>
  <div class="home">
    <h1 class="text-uppercase fs-3 fw-semi text-dark_2 text-center mb-md-5 mb-4"> {{ pageTitle }} </h1>
    <Search />
    <h2 class="fs-4 fw-semi text-dark_6 text-center mb-5"> {{ pageSubTitle }} </h2>
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
      pageTitle: 'Central de Atendimento',
      pageSubTitle: 'Navegue pelos assuntos mais buscados:'
    }
  },
  mounted () {
    // obter as perguntas aqui pra ter elas no store,
    // pra quando passar pra seguente routa já só filtrar elas
    // e não fazer o usuario esperar pra elas carregarem
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
