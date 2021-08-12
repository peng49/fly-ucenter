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
body {
  background: #f5f6f7 !important;
}

a {
  text-decoration: none;;
}

#app {
  margin-top: 75px;
}
</style>
