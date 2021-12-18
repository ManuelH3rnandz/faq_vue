<template>
  <div class="search_container d-flex flex-column" :class="[size]">
    <label for="search" class="search_label text-dark_6">{{ label }}</label>
    <div class="search_input_container">
      <input type="text" id="search" class="text-dark_3 fw-semi" v-model="searchValue" :placeholder="placeholder" @keyup.enter="search">
      <img :src="icon" alt="Search" @click="search">
    </div>
  </div>
</template>

<script>
import searchIcon from "@/assets/icons/Search-icon.png"

export default {
  name: 'Search',
  props: {
    size: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      label: 'Como podemos te ajudar?',
      placeholder: 'Ex.: Como posso acompanhar meu pedido?',
      searchValue: '',
      icon: searchIcon
    }
  },
  methods: {
    search () {
      // esse condicional assim é pra evitar o erro de quando o usuario pesquisa o mesmo na mesma pagina de pesquisa
      if (this.searchValue && this.searchValue != this.$route.params.tosearch) {
        this.$router.push({ name: 'Resultados', params: { tosearch: this.searchValue } })
        this.searchValue = ''
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.search_container { align-items: center; margin-bottom: 100px; }
.search_label { margin-bottom: 48px; text-align: center; font-size: 1.5rem; }
.search_input_container { position: relative; width: 55%; }
.search_input_container input { background-color: rgb(235, 235, 235); border-radius: 26px; width: 100%; height: 74px; font-size: 1.125rem; border: none; padding: 0 26px; }
.search_input_container input::placeholder { color: var(--dark_6); font-weight: 400; }
.search_input_container img { position: absolute; top: 50%; right: 20px; transform: translate(0,-50%); cursor: pointer; }

.small { align-items: flex-start; margin-bottom: 60px; }
.small .search_label { margin-bottom: 15px; text-align: left; font-size: 1.125rem; }
.small .search_input_container { width: 100%; }
.small .search_input_container input { border-radius: 18px; width: 100%; height: 65px; font-size: .85rem; padding: 0 20px; }
.small .search_input_container img { width: 22px; }

@media (max-width: 992px) {
  .search_container { margin-bottom: 60px; }
  .search_container.small { margin-bottom: 30px; }
  .search_input_container { width: 100%; }
  .search_label { margin-bottom: 8px; }
  .search_input_container input { height: 64px; font-size: 1.0125rem; }
  .search_input_container img { width: 25px; }

  .small { align-items: center; }
  .small .search_label { font-size: 1.5rem; margin-bottom: 8px; }
}
</style>

