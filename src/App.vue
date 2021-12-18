<template>
  <div id="app">
    <div class="container">
      <router-view/>
    </div>
    <FooterApp @open="openChat"/>
  </div>
</template>

<script>
import FooterApp from '@/components/FooterApp.vue'

export default {
  components: {
    FooterApp
  },
  methods: {
    openChat () {
      console.log('this is going to open the chat')
    }
  }
}
</script>

<style>
#app { width: 100%; min-height: 100vh; padding: 80px 0; }

@media (max-width: 992px) {
  #app { padding: 20px 0; }
}
</style>
