<template>
  <div class="topic_layout">
    <h1 class="text-uppercase text-center text-md-start fw-semi fs-3 text-dark_2 mb-3 mb-md-5">{{ pageTitle }}</h1>
    <div class="row desktop">
      <div class="col-md-4 col-12">
        <Search size="small" />
        <h2  class="text-uppercase fs-6 text-dark_6 mb-4">{{ pageSubTitle }}</h2>
        <div class="topic_list">
          <ButtonLarge v-for="option in options" :key="option.title" :link="option" :current="$route.params.topic"/>
        </div>
      </div>
      <div class="col-md-8 col-12 nested_route">
        <router-view :key="$route.fullPath"/>
      </div>
    </div>
    <div class="row mobile">
      <template v-if="$route.name == 'Results' || $route.name == 'Via E-mail' || $route.name == 'Common Questions'">
        <div v-if="$route.name == 'Results' || $route.name == 'Common Questions'" class="col-12">
          <Search size="small" />
        </div>
        <div class="col-12">
          <router-view />
        </div>
      </template>
      <template v-else>
        <div class="col-12">
          <Search size="small" />
          <h2 class="text-uppercase text-center text-md-start fs-6 text-dark_6 mb-4">{{ pageSubTitle }}</h2>
        </div>
        <div class="col-12">
          <template v-for="option in options">
            <ButtonLarge :key="option.title" :link="option" :current="$route.params.topic"/>
            <div :key="option.title + '_container'" class="container_question_mobile">
              <router-view v-if="$route.params.topic == option.title" :key="option.title + '_route'"/>
            </div>
          </template>
        </div>
      </template>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import Search from '@/components/Search.vue'
import ButtonLarge from '@/components/ButtonLarge.vue'

export default {
  name: 'TopicLayout',
  components: {
    Search,
    ButtonLarge
  },
  computed: {
    ...mapState({
      options: 'topicOptions',
    })
  },
  data () {
    return {
      pageTitle: 'FAQ',
      pageSubTitle: 'Most searched topics'
    }
  },
  created () {
    this.getAllQuestion()
  },
  methods: {
    ...mapActions([
      'getAllQuestion'
    ])
  }
}
</script>

<style scoped>
.container_question_mobile { padding: 0 20px; }
.mobile { display: none; }
@media (max-width: 992px) {
  .desktop { display: none; }
  .mobile { display: block; }
}
</style>
