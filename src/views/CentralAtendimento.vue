<template>
  <div class="home">
    <h1 class="text-uppercase fs-3 fw-semi text-dark_2 text-center mb-4"> {{ pageTitle }} </h1>
    <h2 class="fs-4 text-dark_6 text-center mb-5"> {{ pageQuestion }} </h2>
    <div class="d-flex flex-column flex-md-row justify-content-center gap_80">
      <Button :is-intern="true" :text-inside="true" size="big" :link="linkLojaOnline"/>
      <Button :is-intern="false" :text-inside="true" size="big" :link="linkLojaFisica"/>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import onlineIcon from "@/assets/icons/online-icon.png"
import fisicaIcon from "@/assets/icons/icon-fisica.png"

export default {
  name: 'CentralAtendimento',
  components: {
    Button
  },
  data () {
    return {
      pageTitle: 'Central de Atendimento',
      pageQuestion: 'Olá, sua compra foi feita em:',
      linkLojaOnline: {
        title: 'Loja Online',
        url: '/atendimento-inteligente',
        icon: onlineIcon
      },
      linkLojaFisica: {
        title: 'Loja Física',
        url: 'https://www.neoassist.com',
        icon: fisicaIcon
      }
    }
  }
}
</script>

