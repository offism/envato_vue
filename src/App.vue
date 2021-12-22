<template>
  <Header/>
  <Services/>
  <Portfolio/> 
</template>

<script>

import Header from './components/Header/Header.vue'
import Services from './components/Body/Services.vue'
import Portfolio from './components/Body/Portfolio.vue'

export default {
  name: "App",
  components:{
   Header,
   Services,
   Portfolio 
 }
}

</script>

<style>

</style>
