<template>
  <Header/>
  <Services/>
  <Portfolio/>
  <About/> 
</template>

<script>

import Header from './components/Header/Header.vue'
import Services from './components/Body/Services.vue'
import Portfolio from './components/Body/Portfolio.vue'
import About from './components/Body/About.vue'

export default {
  name: "App",
  components:{
   Header,
   Services,
   Portfolio,
   About 
 }
}

</script>

<style>

</style>
