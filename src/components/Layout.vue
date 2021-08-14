<template>
  <Header></Header>
  <main>
    <Sidebar />
    <div class="container-fluid bg-white p-4">
      <router-view :key="key" />
    </div>
  </main>
</template>

<script>
import Header from "./common/Header.vue";
import Sidebar from "./common/Sidebar.vue";

export default {
  name: "Layout",
  components: {
    Header,
    Sidebar,
  },
  computed: {
    key() {
      console.log(this.$route)
      return this.$route.path;
    },
  },
};
</script>
<style>
main {
  display: flex;
  min-height: 500px;
}
</style>


