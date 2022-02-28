<template>
  <footer>
    <div class="container">
      <div class="row">
        <div class="col-12 d-flex justify-content-center align-items-center">
          <div class="footer_message fw-semi text-dark_3">{{ footerMessage }}</div>
          <router-link to="/smart-service/topics/via-email" class="footer_link mx-3">
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
import emailLogo from "@/assets/icons/icon-email.png"
import chatLogo from "@/assets/icons/icon-chat.png"

export default {
  name: 'FooterApp',
  components: {
    Chat
  },
  computed: {
    // to control where the chat button appears
    isInAtendimento () {
      if (this.$route.name == 'Questions' || this.$route.name == 'Via E-mail' || this.$route.name == 'Results' || this.$route.name == 'Common Questions') {
        return true
      } else {
        return false
      }
    }
  },
  data () {
    return {
      emailLogo,
      chatLogo,
      footerMessage: 'If you want, you can also send us an email or talk to one of our agents via chat.',
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
.footer_message { max-width: 140px; font-size: 0.625rem; line-height: 0.7375rem; }
.footer_link { cursor: pointer; }
.footer_link img { width: 40px; }

@media (max-width: 992px) {
  footer { margin-top: 90px; }
  .footer_link img { width: 35px; }
}
</style>

