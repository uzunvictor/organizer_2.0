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
        <v-btn small color="teal" class="mb-3" dark @click="refreshTaskList">
          refresh</v-btn
        >

        <v-sheet color="grey darken-2">
          <v-card
            v-for="item in sortedEvents.slice(0, 10)"
            class="my-2 rounded-lg"
            :key="item.title"
            :style="`border-left: 15px solid ${item.color}`"
            @click="showEvent($event, item)"
          >
            <v-card-text>
              <v-row>
                <v-col cols="5" class="text-h6 font-weight-bold">{{
                  item.name
                }}</v-col>
                <v-col cols="5">{{ item.start }}</v-col>
                <v-col cols="2" class="d-flex justify-end"
                  ><v-icon :color="item.favorited ? 'red' : 'grey'"
                    >mdi-heart</v-icon
                  ></v-col
                >
              </v-row>
            </v-card-text>
          </v-card>
          <v-menu
            v-model="isEdit"
            :close-on-content-click="false"
            :activator="selectedElement"
            offset-x
          >
            <v-card
              :style="`border-top: 10px solid ${selectedEvent.color};`"
              min-width="350px"
              flat
            >
              <v-toolbar color="blue-grey lighten-4" dark flat>
                <v-btn icon>
                  <v-icon
                    :color="selectedEvent.favorited ? 'red' : 'white'"
                    large
                    >mdi-heart</v-icon
                  >
                </v-btn>

                <v-toolbar-title v-html="selectedEvent.name"></v-toolbar-title>
                <v-spacer></v-spacer>
                <mcv-edit-task :eventInfo="selectedEvent" />
                <mcv-delete-task
                  :eventInfo="selectedEvent"
                  @closeCard="isEdit = false"
                />
              </v-toolbar>
              <v-card-text>
                <span v-html="selectedEvent.details"></span>
              </v-card-text>
              <v-card-actions>
                <v-btn text color="secondary" @click="isEdit = false">
                  Cancel
                </v-btn>
              </v-card-actions>
            </v-card></v-menu
          ></v-sheet
        >

        <!-- <v-row>
          <v-expansion-panels class="ma-2 mt-5">
            <v-expansion-panel
              v-for="(event, i) in sortedEvents.slice(0, 10)"
              :key="i"
              class="ma-1 rounded-lg"
            >
              <v-expansion-panel-header
                :style="{ 'border-top': `10px solid ${event.color}` }"
                class="rounded-lg"
                ><v-icon
                  class="d-flex justify-start"
                  style="max-width: 30px"
                  :color="event.favorited ? 'red' : 'grey'"
                  >mdi-heart</v-icon
                >{{ event.name }}</v-expansion-panel-header
              >

              <v-expansion-panel-content>
                {{ event.details }}
                <v-row class="d-flex justify-end"
                  ><mcv-edit-task :eventInfo="event" />
                  <mcv-delete-task :eventInfo="event" />
                </v-row>
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-row> -->
      </v-container>
    </v-sheet>
  </v-col>
</template>
   

<script>
import { mapState } from "vuex";
import McvDeleteTask from "./McvDeleteTask.vue";
import McvEditTask from "./McvEditTask.vue";

export default {
  components: { McvEditTask, McvDeleteTask },
  name: "McvSortedTasks",
  data: () => ({
    sortedListIcons: [0, 1, 2, 3],
    sortedEvents: [],
    isEdit: false,
    selectedEvent: {},
    selectedElement: null,
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
    refreshTaskList() {
      this.$store.dispatch("refreshEvents");
    },

    showEvent(event, item) {
      this.selectedEvent = item;
      this.selectedElement = event.target;

      requestAnimationFrame(() =>
        requestAnimationFrame(() => (this.isEdit = true))
      );

      event.stopPropagation();
    },
  },
};
</script>

