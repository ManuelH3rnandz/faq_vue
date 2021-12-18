<template>
<div class="message_container" :class="[type]">
  <div class="message_bubble" :class="[(type == 'client') ? 'text-end' : 'text-start']">
    <div class="message_bubble_box">
      {{ msg }}
    </div>
    <div class="message_date">
      {{ msgFrom }} em {{ date }}
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'MessageBubble',
  props: {
    msg: {
      type: String,
      default: ''
    },
    msgFrom: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'client'
    },
  },
  data () {
    return {
      date: ''
    }
  },
  mounted() {
    this.date = this.getDateMessage()
  },
  methods: {
    // getDateMessage for message
    getDateMessage () {
      let now = new Date()
      let dd = now.getDate()
      let mm = now.getMonth()+1
      let yyyy = now.getFullYear()
      let hh = now.getHours()
      let ii = now.getMinutes()
      let ss = now.getSeconds()
      if (dd < 10) { dd = '0' + dd }
      if(mm < 10) { mm = '0' + mm }
      if(hh < 10) { hh = '0' + hh }
      if(ii < 10) { ii = '0' + ii }
      if(ss < 10) { ss = '0' + ss }
      return mm+'/'+dd+'/'+yyyy + ' às ' + hh + ':' + ii + ':' + ss
    }
  }
}
</script>

<style scoped>
.message_container { display: flex; }
.message_container.client { justify-content: flex-end; }
.message_container.system, .message_container.operator { justify-content: flex-start; }

.message_bubble { margin-bottom: 10px; max-width: 90%; }
.message_bubble_box { position: relative; display: inline-flex; padding: 10px; border: solid 1px #32BCAD; font-size: .8rem; line-height: 0.799375rem; border-radius: 3px; }
.client .message_bubble_box  { background: #32BCAD; color: white; }
.system .message_bubble_box { background: #D6D6D6; }
.operator .message_bubble_box { background: white; }
.message_date { font-size: 0.65rem; margin-top: 3px; }

.message_bubble_box::after{ content: ''; position: absolute; left: -9px; top: 50%; width: 0; height: 0; border-top: 10px solid transparent; border-bottom: 10px solid transparent;  border-right:10px solid white; clear: both; transform: translate(0,-50%); }
.client .message_bubble_box::after { display: none; }
.client .message_bubble_box::before { content: ''; position: absolute;  right: -9px; top: 50%; width: 0; height: 0; border-top: 10px solid transparent; border-bottom: 10px solid transparent; border-left: 10px solid #32BCAD; transform: translate(0,-50%); }
.system .message_bubble_box::after { border-right:10px solid #D6D6D6; }
.operator .message_bubble_box::after { border-right:10px solid white; }
.system .message_bubble_box::before, .operator .message_bubble_box::before { content: ''; position: absolute; left: -10px; top: 50%; width: 0; height: 0; border-top: 10px solid transparent; border-bottom: 10px solid transparent;  border-right:10px solid #32BCAD; clear: both; transform: translate(0,-50%); }

</style>


