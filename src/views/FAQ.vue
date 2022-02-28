<template>
  <div class="home">
    <h1 class="text-uppercase fs-3 fw-semi text-dark_2 text-center mb-4"> {{ pageTitle }} </h1>
    <h2 class="fs-4 text-dark_6 text-center mb-5"> {{ pageQuestion }} </h2>
    <div class="d-flex flex-column flex-md-row justify-content-center gap_80">
      <Button :is-intern="true" :text-inside="true" size="big" :link="linkOnlineStore"/>
      <Button :is-intern="false" :text-inside="true" size="big" :link="linkPhysicalStore"/>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import onlineIcon from "@/assets/icons/online-icon.png"
import physicalIcon from "@/assets/icons/icon-fisica.png"

export default {
  name: 'FAQ',
  components: {
    Button
  },
  data () {
    return {
      pageTitle: 'FAQ',
      pageQuestion: 'Hi, your purchase was made at:',
      linkOnlineStore: {
        title: 'Online Store',
        url: '/smart-service',
        icon: onlineIcon
      },
      linkPhysicalStore: {
        title: 'Physical Store',
        url: 'https://www.google.com',
        icon: physicalIcon
      }
    }
  }
}
</script>

