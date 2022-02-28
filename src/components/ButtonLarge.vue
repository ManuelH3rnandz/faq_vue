<template>
  <router-link :to="link.url" class="topic_button d-flex justify-content-between align-items-center" :class="{ 'topic_active': (link.title == current) }">
    <span>{{ link.title }}</span>
    <img :src="topicoIcon" alt="tópico">
  </router-link>
</template>

<script>
import topicoIcon from "@/assets/icons/topico-icon.png"

export default {
  name: 'ButtonLarge',
  props: {
    link: {
      type: Object,
      default: function () {
        return {
          title: '',
          url: '#',
          icon: ''
        }
      }
    },
    current: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      topicoIcon
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.topic_button { background: var(--primary_red); border-radius: 8px; height: 50px; padding: 0 23px 0 35px; text-decoration: none; margin-bottom: 15px; transition: all .5s; }
.topic_button span { font-size: 1.1rem; color: white; }
.topic_button img { width: 10px; transition: all .5s; }

.topic_button:hover, .topic_active { background: var(--primary_red_hover); }

@media (max-width: 992px) {
  .topic_active img { transform: rotate(90deg); }
}
</style>

