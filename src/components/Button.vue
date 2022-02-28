<template>
  <router-link v-if="isIntern" :to="link.url" class="neo_button d-flex flex-column align-items-center" :class="[size]">
    <span class="neo_button_box d-flex flex-column justify-content-center align-items-center">
      <img :src="link.icon" :alt="link.title">
      <span v-if="textInside" class="neo_button_title fs-5 text-white">{{ link.title }}</span>
    </span>
    <span v-if="!textInside" class="neo_button_title fs-5 text-dark_3">{{ link.title }}</span>
  </router-link>
  <a v-else :href="link.url" class="neo_button d-flex flex-column align-items-center" target="_blank" :class="[size]">
    <span class="neo_button_box d-flex flex-column justify-content-center align-items-center">
      <img :src="link.icon" :alt="link.title">
      <span v-if="textInside" class="neo_button_title fs-5 text-white">{{ link.title }}</span>
    </span>
    <span v-if="!textInside" class="neo_button_title fs-5 text-dark_3">{{ link.title }}</span>
  </a>
</template>

<script>
export default {
  name: 'Button',
  props: {
    // isIntern é pra saber se o link do botão vai pra fora do aplicativo ou dentro
    isIntern: {
      type: Boolean,
      default: true
    },
    // textInside é pra saber qual é o tipo do botão
    textInside: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    },
    link: {
      type: Object,
      default: function () {
        return {
          title: '',
          url: '#',
          icon: ''
        }
      }
    }
  }
}
</script>

<style scoped>
.neo_button { text-decoration: none; }
.neo_button:hover .neo_button_box { background: var(--primary_red_hover); }
.neo_button_box { width: 130px; height: 120px; background: var(--primary_red); border-radius: 20px; transition: all .5s; }
.big .neo_button_box { width: 190px; height: 180px; }
.neo_button_box img { height: 45px; }
.big .neo_button_box img { height: 60px; }
.neo_button_title { font-weight: 600; margin-top: 12px; }

@media (max-width: 992px) {
  .neo_button_box { width: 100px; height: 100px; }
  .neo_button_box img { height: 40px; }
  .big .neo_button_box { width: 150px; height: 140px; }
  .big .neo_button_box img { height: 45px; }
  .neo_button_title { margin-top: 2px; }
  
}
</style>
