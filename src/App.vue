<template>
  <v-app
    id="main"
    :style="{ background: $vuetify.theme.themes.light.background }"
  >
    <mcv-navbar />

    <v-main class="grey lighten-2">
      <v-container class="px-0 mx-0"><router-view></router-view></v-container>
    </v-main>
  </v-app>
</template>

<script>
import McvNavbar from "./components/McvNavbar.vue";
//import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    McvNavbar,
  },
};
</script>

