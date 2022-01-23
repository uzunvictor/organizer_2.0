<template>
  <v-app
    id="main"
    :style="{ background: $vuetify.theme.themes.light.background }"
  >
    <Navbar />

    <v-main class="mx-4 mb-4">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from "./components/Navbar.vue";

export default {
  name: "App",
  components: {
    Navbar,
  },
};
</script>

