<template>
  <Header></Header>
  <main>
    <Sidebar/>
    <div class="container-fluid bg-white p-4">
        <Posts/>
    </div>
  </main>
</template>

<script>
import Header from "./common/Header.vue";
import Sidebar from "./common/Sidebar.vue";
import Posts from "./user/Posts"

export default {
  name: "Layout",
  components: {
    Header,
    Sidebar,
    Posts
  },
};
</script>
<style>
main {
  display: flex;
  min-height: 500px;
}
</style>


