<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-4 col-md-12 d-flex justify-content-start justify-content-md-end">
          <a href="https://www.neoassist.com" class="link_to_neoassist" target="_blank">
            <img :src="neoLogo" alt="NeoAssist">
          </a>
        </div>
        <div class="col-8 col-md-12 d-flex justify-content-center align-items-center">
          <div class="footer_message fw-semi text-dark_3">{{ footerMessage }}</div>
          <router-link to="/atendimento-inteligente/topicos/via-email" class="footer_link mx-3">
            <img :src="emailLogo" alt="E-mail">
          </router-link>
          <div class="footer_link" @click="openChat">
            <img :src="chatLogo" alt="Chat">
          </div>
        </div>
      </div>
    </div>
    <Chat v-if="isInAtendimento" :open="isOpenChat" @reset="resetBtn" />
  </footer>
</template>

<script>
import Chat from '@/components/Chat.vue'
import neoLogo from "@/assets/icons/neoassist.png"
import emailLogo from "@/assets/icons/icon-email.png"
import chatLogo from "@/assets/icons/icon-chat.png"

export default {
  name: 'FooterApp',
  components: {
    Chat
  },
  computed: {
    // pra controlar onde aparece o chat fixo
    isInAtendimento () {
      if (this.$route.name == 'Perguntas' || this.$route.name == 'Via E-mail' || this.$route.name == 'Resultados' || this.$route.name == 'Perguntas Frequentes') {
        return true
      } else {
        return false
      }
    }
  },
  data () {
    return {
      neoLogo,
      emailLogo,
      chatLogo,
      footerMessage: 'Caso queira, você também pode nos enviar um e-mail ou falar com um de nossos atendentes via chat.',
      isOpenChat: false
    }
  },
  methods: {
    openChat () {
      this.isOpenChat = true
    },
    // resetBtn pra conseguir abrir sempre o chat seja o botão fixo ou o icone no footer
    resetBtn () {
      this.isOpenChat = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer { margin-top: 50px; }
.footer_message { max-width: 180px; font-size: 0.625rem; line-height: 0.9375rem; }
.footer_link { cursor: pointer; }
.footer_link img { width: 45px; }

@media (max-width: 992px) {
  footer { margin-top: 90px; }
  .footer_link img { width: 35px; }
  .link_to_neoassist IMG { width: 100px; }
}
</style>

