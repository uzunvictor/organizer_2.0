<template>
  <v-navigation-drawer width="80" color="grey darken-4" dark app clipped>
    <v-list class="d-flex flex-column" height="100%">
      <v-list-item class="pa-0 my-2" v-for="icon in navIcons" :key="icon.icon"
        ><v-tooltip right
          ><template v-slot:activator="{ on }">
            <v-hover v-slot="{ hover }">
              <v-btn
                large
                class="mx-0 py-10"
                v-on="on"
                :class="{ 'on-hover': hover }"
                :style="{ backgroud: hover ? 'red' : 'green' }"
                @click="icon.action"
                ><v-icon large>{{ icon.icon }}</v-icon></v-btn
              ></v-hover
            ></template
          ><span>{{ icon.tooltip }}</span></v-tooltip
        ></v-list-item
      >
      <v-list-item class="mt-auto pa-0">
        <v-tooltip right>
          <template v-slot:activator="{ on }">
            <v-btn large class="mx-0" v-on="on" width="100%"
              ><v-icon large>mdi-logout</v-icon></v-btn
            > </template
          ><span>Logout</span></v-tooltip
        ></v-list-item
      >
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: "McvNavbar",
  data() {
    return {
      navIcons: [
        {
          icon: "mdi-menu",
          tooltip: "open menu",
          action: this.openMenu,
        },
        {
          icon: "mdi-heart",
          tooltip: "show favorited tasks",
          action: this.showFavorited,
        },
        {
          icon: "mdi-sort-calendar-ascending",
          tooltip: "sort tasks by date: ascending mode",
          action: this.sortEventsAscending,
        },
      ],

      // ["mdi-menu", "mdi-heart", "mdi-sort-calendar-ascending"]}
    };
  },

  methods: {
    openMenu() {
      alert("myconsole");
    },
    showFavorited() {
      // alert("favorited");
      this.$store.dispatch("showFavorited");
    },
    sortEventsAscending() {
      alert("ascending");
    },
  },
};
</script>

<style scoped>
.v-list-item {
  flex: 0;
}

/* .v-btn:hover {
  background-color: red;
} */

.v-btn {
  color: red;
  padding: 12px;
}
</style>