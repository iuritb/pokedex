<template>
  <v-app id="app">
    <nav-bar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "./components/layout/NavBar.vue";
import SideBar from "./components/layout/SideBar.vue";

export default {
  name: "App",
  components: {
    NavBar,
    SideBar,
  },
  data: () => ({
    //
  }),
};
</script>


<style lang="scss">
#app {
  font-family: "Press Start 2P", cursive;
  font-weight: 400;
  line-height: 1.6;
  color: #fff;
  margin: 0;
  padding: 0;
  background-image: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.8) 0%,
      rgba(0, 0, 0, 0.8) 100%
    ),
    url("../src/assets/img/background/background.png");
  background-size: cover;
  position: relative;
}
</style>

