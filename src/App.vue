<template>
<body>
  <headerComp/>
  <mainComp/>
  <footerComp/>
</body>
</template>

<script>
import headerComp from './components/headerComp.vue'
import mainComp from './components/mainComp.vue'
import footerComp from './components/footerComp.vue'

export default {
  name: 'App',
  components: {
    headerComp,
    mainComp,
    footerComp
  },
  data() {
    return {
      
    }
  }
}
</script>

<style lang="scss">
  @import './assets/style/general.scss';

</style>
