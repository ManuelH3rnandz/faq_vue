<template>
  <div class="formulario">
    <form v-if="!formSent" action="#" @submit="validForm" class="form row needs-validation">
      <div class="col-md-12">
        <label for="subject" class="form-label"><span>*</span>{{ subjectLabel }}</label>
        <select v-model="subject" class="form-select" id="subject">
          <option selected disabled>{{ subjectPlaceholder }}</option>
          <option v-for="option in options" :key="option.title" :value="option.title">{{ option.title }}</option>
        </select>
        <div class="invalid-feedback" :class="{ 'opacity-0': !subjectError }"> {{ subjectLabel | invalidMessage }} </div>
      </div>
      <div class="col-md-12">
        <label for="name" class="form-label"><span>*</span>{{ nameLabel }}</label>
        <input v-model="name" type="text" class="form-control" id="name" :placeholder="namePlaceholder">
        <div class="invalid-feedback" :class="{ 'opacity-0': !nameError }"> {{ nameLabel | invalidMessage }} </div>
      </div>
      <div class="col-md-12">
        <label for="email" class="form-label"><span>*</span>{{ emailLabel }}</label>
        <input v-model="email" type="email" class="form-control" id="email" :placeholder="emailPlaceholder">
        <div class="invalid-feedback" :class="{ 'opacity-0': !emailError }"> {{ emailLabel | invalidMessage }} </div>
      </div>
      <div class="col-md-12">
        <label for="attachment" class="form-label">{{ attachmentLabel }}</label>
        <div class="form-control d-flex align-items-center">
          <input type="file" class="" id="attachment">
        </div>
      </div>
      <div class="col-md-12">
        <label for="message" class="form-label"><span>*</span>{{ messageLabel }}</label>
        <textarea  v-model="message" type="text" class="form-control" id="message" rows="4" :placeholder="messagePlaceholder"></textarea>
        <div class="invalid-feedback" :class="{ 'opacity-0': !messageError }"> {{ messageLabel | invalidMessage }} </div>
      </div>
      <div class="col-12">
        <p class="form-label from_footer_label"><span>*</span>{{ footerMessage }}</p>
      </div>
      <div class="col-12 d-flex justify-content-end">
        <input type="submit" :value="sendButton" class="from_send text-uppercase text-white">
      </div>
      <GoTopics class="mt-4" />
    </form>

    <div v-else class="form_sent d-flex flex-column align-items-center">
      <div class="sent_message">
        <p class="sent_protocolo mb-0">{{ sentMessage }} {{ protocol }}. <span>{{ sentMessageReturn }}</span></p>
      </div>
      <router-link to="/atendimento-inteligente" class="go_home text-uppercase text-decoration-none d-flex align-items-center">
        <img :src="goBackIcon" :alt="goHomeMessage">
        <span>{{ goHomeMessage }}</span>
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import GoTopics from '@/components/GoTopics.vue'
import goBackIcon from "@/assets/icons/icone-pergunta.png"

export default {
  name: 'Form',
  components: {
    GoTopics
  },
  filters: {
    invalidMessage(value) {
      return 'O campo ' + value + ' é obrigatório!'
    }
  },
  computed: {
    ...mapState({
      options: 'topicOptions',
    })
  },
  data () {
    return {
      // labels, placeholders and messages
      subjectLabel: 'Assunto',
      subjectPlaceholder: 'Selecione um assunto:',
      nameLabel: 'Nome',
      namePlaceholder: 'Insira seu nome',
      emailLabel: 'E-mail',
      emailPlaceholder: 'Insira seu e-mail',
      attachmentLabel: 'Anexos',
      messageLabel: 'Mensagem',
      messagePlaceholder: 'Sobre o que deseja falar?',
      footerMessage: 'Campos de preenchimento obrigatório.',
      sendButton: 'Enviar Formulário',
      sentMessage: 'Seu e-mail foi enviado com sucesso! Seu número de protocolo é',
      sentMessageReturn: 'Aguarde, em breve entraremos em contato!',
      goHomeMessage: 'Retornar à tela inicial',
      goBackIcon,
      // vars to use
      subject: '',
      subjectError: false,
      name: '',
      nameError: false,
      email: '',
      emailError: false,
      emailInvalid: false,
      attachment: [],
      message: '',
      messageError: false,
      formSent: false,
      protocol: ''
    }
  },
  methods: {
    makeProtocol () {
      let data = new Date()
      this.protocol = ("0" + data.getDate()).substr(-2)+("0" + (data.getMonth() + 1)).substr(-2)+data.getFullYear()+Math.floor(1000 + Math.random() * 9000)
    },
    validForm (e) {
      // reset Errors
      this.subjectError = false
      this.nameError = false
      this.emailError = false
      this.messageError = false
      this.emailInvalid = false

      // check Fields
      if (!this.subject) {
        this.subjectError = true
      }

      if (!this.name) {
        this.nameError = true
      }

      if (!this.email) {
        this.emailError = true
      } else if (!this.validEmail(this.email)) {
        this.emailInvalid = true
      }

      if (!this.message) {
        this.messageError = true
      }

      if (this.subject && this.name && this.validEmail(this.email) && this.message) {
        this.makeProtocol()
        this.formSent = true
      }

      e.preventDefault()
    },
    validEmail (email) {
      return email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/) //eslint-disable-line
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form .col-md-12 { margin-bottom: 8px; }
.form .col-md-12:last-of-type { margin-top: 25px; margin-bottom: 0; }
.form-label { color: var(--dark_3); }
.form-label span { color: var(--mandatory_field); margin-right: 5px; }
.form-control, .form-select { min-height: 50px; border: none; border-radius: 8px; background: var(--bg_field); padding: 0 20px; }
.form-control::placeholder, #attachment { color: var(--dark_2); }
textarea.form-control { padding: 16px 20px; resize: none; }
.invalid-feedback { display: block; font-style: italic; font-weight: 600; font-size: 0.8125rem; }

#attachment::-webkit-file-upload-button { background: rgb(194, 194, 194); color: var(--dark_2); border-radius: 3px; border: none; padding: 5px 28px; }

.from_footer_label { font-size: 0.8125rem; }
.from_footer_label span { color: var(--negative); }

.from_send { background: var(--send_btn); border: none; border-radius: 3px; padding: 18px 20px; font-weight: 600; }

/* .form_sent { } */
.sent_message { border-radius: 3px; background: var(--send_btn); padding: 20px 16px; margin-bottom: 30px; }
.sent_protocolo { font-size: 1rem; line-height: 1.625rem; font-weight: 600; color: white; }
.sent_protocolo span { font-weight: 400; }
.go_home { font-size: 1rem; font-weight: 600; color: var(--negative); }
.go_home img { transform: scaleX(-1); margin-right: 11px; height: 20px; transition: all .5s; }

@media (max-width: 992px) {
  .form .col-md-12 { margin-bottom: 3px; }
  .form-control, .form-select { min-height: 40px; border-radius: 5px; }
  .invalid-feedback { margin-bottom: -1px; }
  .from_send { width: 100%; }
}
</style>
