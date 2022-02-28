<template>
  <div class="chat_box" :class="{ 'chat_closed' : !open }">
    <div class="chat_box_header d-flex flex-column justify-content-between">
      <div class="chat_box_header_name_and_icons d-flex align-items-center justify-content-between">
        <div class="d-flex align-items-center ">
          <div class="chat_box_icon">
            <img :src="chatBoxIcon" alt="chat Icon">
          </div>
          <div class="chat_box_title fw-semi text-white">{{ titleBox }}</div>
        </div>
        <div class="close_chat_box" @click="closeChat">
          <img :src="closeIcon" alt="close Icon">
        </div>
      </div>
      <div v-if="messageList.length >= 2" class="chat_box_header_operator_name fw-semi text-white">{{ nameOperator }}</div>
    </div>
    <div id="messages_container" class="chat_box_body">
      <MessageBubble v-for="(msg, index) in messageList" :key="index" :msg="msg.message" :msgFrom="msg.who" :type="msg.type" />
    </div>
    <div class="chat_box_footer">
      <div class="input_container d-flex">
        <input v-model="message" type="text" :placeholder="inputPlaceholder" @keypress.enter="sendMessage">
        <div class="ok_btn text-white text-uppercase d-flex justify-content-center align-items-center" @click="sendMessage">OK</div>
      </div>
      <div class="d-flex justify-content-around chat_controls">
        <div class="end_chat" @click="endChat">
          <img :src="endChatIcon" alt="">
          <span class="fw-semi text-uppercase text-dark_6">{{ endChatMessage }}</span>
        </div>
        <div class="form-check form-switch auto_scroll">
          <input class="form-check-input" type="checkbox" role="switch" id="autoScroll" v-model="autoScroll">
          <label class="form-check-label fw-semi text-uppercase" for="autoScroll">{{ autoScrollMessage }}</label>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import MessageBubble from '@/components/MessageBubble.vue'
import chatBoxIcon from "@/assets/icons/chat_box.png"
import closeIcon from "@/assets/icons/Close.png"
import endChatIcon from "@/assets/icons/end_chat.png"


export default {
  name: 'ChatBox',
  props: {
    open: {
      type: Boolean,
      default: true
    }
  },
  watch: {
    // pra resposta automatica do chat
    messageList: function (newValue) {
      setTimeout(function() {
        if (newValue.length == 1) {
        this.systemAnswer()
      }
      if (newValue.length > 2 && newValue[newValue.length - 1].type == 'client') {
        this.operatorAnswer()
      }
      }.bind(this), 2000)
    }
  },
  components: {
    MessageBubble
  },
  data () {
    return {
      closeIcon,
      chatBoxIcon,
      endChatIcon,
      titleBox: 'Service via chat',
      nameOperator: 'John Dale',
      inputPlaceholder: 'Send a message...',
      endChatMessage: 'End conversation',
      autoScrollMessage: 'Auto Scroll',
      message: '',
      messageList: [],
      autoScroll: true
    }
  },
  mounted() {
    
  },
  methods: {
    sendMessage () {
      if (this.message) {
        this.messageList.push({ message: this.message, type: 'client', who: 'Me' })
        this.message = ''
        this.runAutoScroll()
      }
    },
    closeChat () {
      this.$emit('close')
    },
    endChat () {
      this.messageList = []
      this.$emit('end')
    },
    systemAnswer () {
      let data = new Date()
      let protocol = ("0" + data.getDate()).substr(-2)+("0" + (data.getMonth() + 1)).substr(-2)+data.getFullYear()+Math.floor(1000 + Math.random() * 9000)
      this.messageList.push({ message: 'Thank you for waiting. You are being transferred to an operator. Your protocol number is ' + protocol, type: 'system', who: 'sistema' })
      this.runAutoScroll()
      this.operatorAnswer() 
    },
    operatorAnswer () {
      this.messageList.push({ message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', type: 'operator', who: this.nameOperator })
      this.runAutoScroll()
    },
    runAutoScroll () {
      if (this.autoScroll) {
        var container = this.$el.querySelector("#messages_container")
        container.scrollTop = container.scrollHeight + 300
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chat_box { position: fixed; z-index: 3; right: 90px; bottom: 230px; width: 398px; height: 518px; background: rgb(240, 240, 240); border: solid 1px rgb(192, 192, 192); border-radius: 8px; box-shadow: 0px 5px 6px 0px rgba(0, 0, 0, 0.35); overflow: hidden; transition: all .5s; }
.chat_box.chat_closed { width: 0; height: 0; right: 80px; bottom: 210px; }
.chat_box_header { height: 90px; background: rgb(192, 192, 192); padding: 15px 13px 13px 20px; }
.chat_box_icon { margin-right: 20px; }
.chat_box_title { font-size: 0.95rem; }
.chat_box_header_operator_name { font-size: .75rem; }
.close_chat_box { cursor: pointer; }

.chat_box_body { height: calc(518px - (90px + 112px)); padding: 14px; padding-bottom: 100px; overflow-y: scroll; }

.chat_box_footer { height: 112px; }
.input_container { height: 50px; }
.input_container input { width: calc(100% - 50px); height: 50px; border: none; padding-left: 20px; font-size: .8rem; }
.input_container input:focus, .input_container input:focus-visible { outline: none; }
.ok_btn { width: 50px; height: 50px; background: rgb(102, 102, 102); cursor: pointer; transition: all .5s; }
.ok_btn:hover { background: #32bcad; }
.chat_controls { margin-top: 4px; }
.end_chat { cursor: pointer; }
.end_chat span, .auto_scroll label { font-size: .65rem; cursor: pointer; }
.end_chat img { margin-right: 7px; }
.auto_scroll label { color: #32bcad; }
.form-check-input:checked { background-color: #32bcad; border-color: #32bcad; }
.form-switch .form-check-input { width: 26px; height: 13px; margin-left: -32px; margin-top: 8px; cursor: pointer; }

@media (max-width: 992px) {
  .chat_box { right: 0; bottom: 0; width: 100%; height: 100%; border-radius: 0; z-index: 5; border: none; }
  .chat_box_body { height: calc(100% - (90px + 112px)); }
  .chat_box.chat_closed { right: 54px; bottom: 120px; }
}
</style>
