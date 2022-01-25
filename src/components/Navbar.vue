<template>
  <nav>
    <v-app-bar class="blue lighten-5" app>
      <v-col class="font-weight-bold gray--text d-flex">
        <v-app-bar-nav-icon
          @click.stop="drawer = !drawer"
          color="grey"
        ></v-app-bar-nav-icon>
        <v-toolbar-title class="d-flex align-center"
          >My organizer</v-toolbar-title
        >
      </v-col>

      <!-- <v-spacer></v-spacer> -->
      <v-menu>
        <template v-slot:activator="{ on, attrs }">
          <v-btn plain color="gray" v-bind="attrs" v-on="on">
            <span class="hidden-sm-and-down">Menu</span>
            <v-icon>mdi-search</v-icon>
          </v-btn>
        </template>
        <v-list>
          <v-list-item v-for="item in items" :key="item">
            <v-list-item-title>
              {{ item }}
            </v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      left
      absolute
      temporary
      color="blue lighten-5"
      
    >
      <v-container mt-9>
        <v-list>
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
        ["mdi-email", "Inbox"],
        ["mdi-account-supervisor-circle", "Supervisors"],
        ["mdi-clock-start", "Clock-in"],
      ],
      items: ["days", "months", "years"],
      drawer: false,
    };
  },
};
</script>

