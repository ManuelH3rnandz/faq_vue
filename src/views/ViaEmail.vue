<template>
  <div class="via_email">
    <h1 class="text-uppercase text-center text-md-start text-dark_6 fw-semi mb-2">{{ title }}</h1>
    <h2 class="text-center text-md-start text-dark_3 mb-2 mb-md-3">{{ subtitle }}</h2>
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
      title: 'Support via Email:',
      subtitle: 'Fill in the fields below and send us an email:'
    }
  }
}
</script>

<style scoped>
h1 { font-size: calc(.9rem + .6vw); }
h2 { font-size: .8rem; }
@media (max-width: 992px) {
  h1 { font-size: 1rem; }
  h2 { font-size: .9rem; }
}
</style>


