<template>
  <v-app
    id="main"
    :style="{ background: $vuetify.theme.themes.light.background }"
  >
    <mcv-navbar />

    <v-main class="grey lighten-2">
      <v-container class="pa-0 ma-0" fill-height fluid
        ><router-view></router-view
      ></v-container>
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

