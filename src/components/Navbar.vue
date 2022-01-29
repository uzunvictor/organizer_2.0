<template>
  <nav>
    <v-app-bar class="blue" dark flat bottom app>
      <v-col class="font-weight-bold gray--text d-flex">
        <v-app-bar-nav-icon
          @click="drawer = !drawer"
          color="white"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="d-flex align-center"
          >My organizer</v-toolbar-title
        >
      </v-col>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      left
      dark
      absolute
      temporary
      color="blue darken-4"
    >
      <v-container>
        <v-list>
          <v-list-item class="blue lighten-1 rounded-lg" @click="drawer = false">
            <v-list-item-icon><v-icon>mdi-menu</v-icon></v-list-item-icon>
            <v-list-item-content><v-list-item-title class="text-h6 font-weight-bold">Some item</v-list-item-title></v-list-item-content>
          </v-list-item>
          <v-list-item
            v-for="([icon, text], index) in drawerItems"
            :key="index"
            link
          >
            <v-list-item-icon
              ><v-icon>{{ icon }}</v-icon></v-list-item-icon
            >

            <v-list-item-content>
              <v-list-item-title>{{ text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-container>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
  data() {
    return {
      drawerItems: [
        ["mdi-email", "some item"],
        ["mdi-account-supervisor-circle", "some item"],
        ["mdi-clock-start", "some item"],
      ],
      items: ["days", "months", "years"],
      drawer: false,
    };
  },
};
</script>

