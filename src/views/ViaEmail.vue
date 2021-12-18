<template>
  <div class="via_email">
    <h1 class="text-uppercase text-center text-md-start text-dark_3 fw-semi mb-2">{{ title }}</h1>
    <h2 class="text-center text-md-start text-dark_3 mb-2 mb-md-4">{{ subtitle }}</h2>
    <Form />
  </div>
</template>

<script>
import Form from '@/components/Form.vue'

export default {
  name: 'ViaEmail',
  components: {
    Form
  },
  data () {
    return {
      title: 'Atendimento via E-mail:',
      subtitle: 'Preencha os campos abaixo e nos envie um e-mail:'
    }
  }
}
</script>

<style scoped>
h1 { font-size: calc(1.3rem + .6vw); }
h2 { font-size: 1.25rem; }
@media (max-width: 992px) {
  h1 { font-size: 1rem; }
  h2 { font-size: .9rem; }
}
</style>


