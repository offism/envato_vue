<template>
  <Header/>
  <Services/>
  <Portfolio/>
  <About/> 
  <Team/>
  <Advertisement/> 
  <Contactus/> 
</template>

<script>

import Header from './components/Header/Header.vue'
import Services from './components/Body/Services.vue'
import Portfolio from './components/Body/Portfolio.vue'
import About from './components/Body/About.vue'
import Team from './components/Body/Team.vue'
import Advertisement from './components/Body/Advertisement.vue'
import Contactus from './components/Body/Contactus.vue'

export default {
  name: "App",
  components:{
   Header,
   Services,
   Portfolio,
   About,
   Team,
   Advertisement,
   Contactus 
 }
}

</script>

<style>

</style>
