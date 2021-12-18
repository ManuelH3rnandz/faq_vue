<template>
  <div class="d-flex justify-content-center">
    <router-link to="/atendimento-inteligente/topicos/Cadastro" class="go_back_topics d-flex d-md-none justify-content-center align-items-center rounded-circle">
      <img :src="arrowLogo" alt="arrow">
    </router-link>
  </div>
</template>

<script>
import arrowLogo from "@/assets/icons/topico-icon.png"

export default {
  name: 'GoTopics',
  data () {
    return {
      arrowLogo
    }
  }
}
</script>
