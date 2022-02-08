<template>
  <v-col cols="3" class="my-0 pa-0 pl-3">
    <v-sheet class="fill-height" color="grey darken-2">
      <v-container>
        <v-text-field
          background-color="blue-grey darken-2"
          hint
          dark
          clearable
          placeholder="Search"
          filled
          rounded
          dense
          single-line
          class="rounded-lg"
          prepend-inner-icon="mdi-magnify"
        >
        </v-text-field>
      </v-container>

      <v-container>
        <v-row>
          <v-expansion-panels inset class="ma-2">
            <v-expansion-panel
              v-for="(event, i) in sortedEvents"
              :key="i"
              class="ma-1 rounded-lg"
              multiple
            >
              <v-hover v-slot="{ hover }">
                <v-expansion-panel-header
                  :class="{ 'on-hover': hover }"
                  :style="{ 'border-top': `10px solid ${event.color}` }"
                  class="rounded-lg"
                  ><v-icon
                    class="d-flex justify-start"
                    style="max-width: 30px"
                    :color="event.favorited ? 'red' : 'grey'"
                    >mdi-heart</v-icon
                  >{{ event.name }}</v-expansion-panel-header
                ></v-hover
              >

              <v-expansion-panel-content>
                {{ event.details }}
                <v-row class="d-flex justify-end"
                  ><mcv-edit-task :eventInfo="event" />
                  <v-btn
                    icon
                    color="red"
                    dark
                    outlined
                    class="ma-4 mb-1 rounded-lg"
                    @click="deleteTask(event.name)"
                    ><v-icon>mdi-delete</v-icon></v-btn
                  ></v-row
                >
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row></v-container
      >
    </v-sheet>
  </v-col>
</template>
   

<script>
import { mapState } from "vuex";
import McvEditTask from "./McvEditTask.vue";

export default {
  components: { McvEditTask },
  name: "McvSortedTasks",
  data: () => ({
    sortedListIcons: [0, 1, 2, 3],
    sortedEvents: [],
  }),

  computed: {
    ...mapState({
      events: (state) => state.eventsModule.sortedEvents,
    }),
  },
  mounted() {
    this.sortedEvents = this.events;
  },
  watch: {
    events() {
      this.sortedEvents = this.events;
    },
  },

  methods: {
    deleteTask(task) {
      this.$store.dispatch("deleteEventAction", task);
    },
    editTask() {
      alert("edit task");
    },
  },
};
</script>


<style scoped>
/* .v-expansion-panel-header {
  transition: opacity 0.4s ease-in-out;
}

.v-expansion-panel-header:not(.on-hover) {
  opacity: 0.6;
} */

/* .v-expansion-panel::before {
  box-shadow: none !important;
} */
</style>

