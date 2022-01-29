<template>
  <v-col cols="3">
    <v-sheet height="500" color="blue lighten-4">
      <v-toolbar dark flat color="blue darken-4">
        <!-- <v-toolbar-title class="font-weight-bold">Title</v-toolbar-title>

        <v-spacer></v-spacer>
        <v-tooltip
          v-for="item in sortedListIcons"
          :key="item"
          color="primary"
          bottom
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn v-on="on" v-bind="attrs" icon dark class="ma-2"
              ><v-icon>mdi-heart</v-icon></v-btn
            ></template
          ><span>Sort by categories </span></v-tooltip
        > -->
        <v-text-field solo full-width></v-text-field>
      </v-toolbar>

      <template>
        <v-container>
          <v-row>
            <v-expansion-panels class="ma-2">
              <v-expansion-panel
                v-for="(event, i) in events"
                :key="i"
                class="ma-1"
              >
                <v-hover v-slot="{ hover }">
                  <v-expansion-panel-header
                    :color="hover ? 'white' : 'light-blue lighten-5'"
                    :class="{ 'on-hover': hover }"
                    >{{ event.name }}</v-expansion-panel-header
                  ></v-hover
                >

                <v-expansion-panel-content>
                  {{ event.details }}
                  <v-row class="d-flex justify-end"
                    ><v-btn
                      color="red"
                      dark
                      outlined
                      class="ma-4 mb-1"
                      @click="deleteTask(event.name)"
                      >delete task</v-btn
                    ></v-row
                  >
                </v-expansion-panel-content>
              </v-expansion-panel>
            </v-expansion-panels>
          </v-row></v-container
        >
      </template>
    </v-sheet>
  </v-col>
</template>
   

<script>
import { mapState } from "vuex";

export default {
  name: "McvSortedTasks",
  data: () => ({
    sortedListIcons: [0, 1, 2, 3],
  }),

  computed: {
    ...mapState({
      events: (state) => state.eventsModule.events,
    }),
  },

  methods: {
    deleteTask(task) {
      this.$store.dispatch("deleteEventAction", task);
    },
  },
};
</script>


<style scoped>
.v-expansion-panel-header {
  transition: opacity 0.4s ease-in-out;
}

.v-expansion-panel-header:not(.on-hover) {
  opacity: 0.6;
}
</style>

