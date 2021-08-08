<template>
  <layout/>
</template>

<script>
import Layout from './components/Layout.vue'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/css/bootstrap-grid.min.css"
import "bootstrap/dist/css/bootstrap-reboot.min.css"
import "bootstrap/dist/css/bootstrap-utilities.min.css"


import "bootstrap/dist/js/bootstrap.js"

export default {
  name: 'App',
  components: {    
    Layout
  }
}
</script>

<style>
#app {
  margin-top: 60px;
}
</style>
