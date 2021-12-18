<template>
  <div class="chat_container">
    <div class="chat_button d-flex justify-content-center align-items-center" @click="openChat">
      <img :src="chatIcon" alt="Chat Icon">
    </div>
    <Chatbox v-if="reloadChat" :open="openIn" @close="closeChat" @end="endChat" />
  </div>
</template>

<script>
// import { mapGetters } from 'vuex'
import Chatbox from '@/components/Chatbox.vue'
import chatIcon from "@/assets/icons/Chat_Icon_Button.png"


export default {
  name: 'Chat',
  props: {
    open: {
      type: Boolean,
      default: false
    }
  },
  components: {
    Chatbox
  },
  watch: {
    open: function (newValue) {
      console.log('open', newValue)
      if (newValue) {
        this.openChat()
      }
    }
  },
  data () {
    return {
      chatIcon,
      openIn: false,
      reloadChat: true
    }
  },
  methods: {
    openChat () {
      this.openIn = true
      this.reloadChat = true
      this.$emit('reset')
    },
    closeChat () {
      this.openIn = false
    },
    endChat () {
      this.reloadChat = false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chat_button { position: fixed; right: 30px; bottom: 180px; width: 60px; height: 60px; background: var(--chat_btn); border-radius: 50%; z-index: 4; box-shadow: 0px 0px 6px 4px rgba(0,0,0,0.35); cursor: pointer; transition: all .5s; }
.chat_button:hover { background: var(--chat_btn_hover); }

@media (max-width: 992px) {
  .chat_button { right: 10px; bottom: 70px; }
}
</style>


