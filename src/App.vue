<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Center msg="Hello World"/>
</template>

<script>
import Center from './components/Center.vue'

export default {
  name: 'App',
  components: {
    Center
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
