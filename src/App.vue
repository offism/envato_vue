<template>
  <Header/>
  <Services/> 
</template>

<script>

import Header from './components/Header/Header.vue'
import Services from './components/Body/Services.vue'

export default {
  name: "App",
  components:{
   Header,
   Services 
 }
}

</script>

<style>

</style>
