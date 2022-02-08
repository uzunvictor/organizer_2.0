<template>
  <v-app id="main">
    <mcv-navbar />

    <v-main class="grey darken-1">
      <v-container class="pa-0 ma-0" fill-height fluid
        ><router-view></router-view
      ></v-container>
    </v-main>
  </v-app>
</template>

<script>
import McvNavbar from "./components/McvNavbar.vue";

export default {
  name: "App",
  components: {
    McvNavbar,
  },
};
</script>

