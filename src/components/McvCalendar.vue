<template>
  <v-col cols="9" class="pa-10 fill-height">
    <v-sheet height="65" class="d-flex rounded-t-lg">
      <v-toolbar flat color="blue lighten-5" class="rounded-t-lg">
        <v-btn class="ma-2" dark color="indigo" @click="goHome">Home</v-btn>
        <v-btn class="ma-2" dark color="blue darken-2" @click="setTodayDate"
          >Today</v-btn
        >
        <v-btn class="ma-2" icon @click="$refs.calendar.prev()"
          ><v-icon>mdi-chevron-left</v-icon></v-btn
        >
        <v-toolbar-title v-if="$refs.calendar">
          {{ $refs.calendar.title }}
        </v-toolbar-title>

        <v-btn icon class="ma-2" @click="$refs.calendar.next()"
          ><v-icon>mdi-chevron-right</v-icon></v-btn
        >

        <v-spacer></v-spacer>
        <v-select
          background-color="blue lighten-5"
          dense
          outlined
          hide-details
          class="ma-2"
          :items="types"
          v-model="type"
          label="type"
          style="max-width: 150px"
        >
        </v-select>

        <v-select
          background-color="blue lighten-5"
          dense
          outlined
          hide-details
          class="ma-2"
          :items="weekdays"
          v-model="weekday"
          label="week-days"
          style="max-width: 150px"
        >
        </v-select>
        <v-spacer></v-spacer>
        <mcv-new-task></mcv-new-task>
      </v-toolbar>
    </v-sheet>

    <v-sheet class="rounded=xl" height="90%">
      <v-calendar
        ref="calendar"
        color="primary"
        :type="type"
        v-model="focus"
        :weekdays="weekday"
        :events="testEvents"
        @click:date="viewDay"
        @click:event="showEvent"
      >
      </v-calendar>
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
              <v-icon :color="selectedEvent.favorited ? 'red' : 'white'" large
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
        </v-card>
      </v-menu>
    </v-sheet>
  </v-col>
</template>
 
 
<script>
import { mapState } from "vuex";
import McvDeleteTask from "./McvDeleteTask.vue";
import McvEditTask from "./McvEditTask.vue";
import McvNewTask from "./McvNewTask.vue";

export default {
  components: { McvNewTask, McvEditTask, McvDeleteTask },
  name: "McvCalendar",

  data: () => ({
    type: "month",
    types: ["month", "week", "day"],
    weekday: [0, 1, 2, 3, 4, 5, 6],
    weekdays: [
      { text: "Sun - Sat", value: [0, 1, 2, 3, 4, 5, 6] },
      { text: "Mon - Sun", value: [1, 2, 3, 4, 5, 6, 0] },
    ],
    focus: "",
    dateTitle: "",
    testEvents: [],
    isEdit: false,
    selectedEvent: {},
    selectedElement: null,
  }),

  mounted() {
    this.testEvents = this.events;
  },

  watch: {
    events() {
      this.testEvents = this.events;
    },
  },

  computed: {
    ...mapState({
      events: (state) => state.eventsModule.events,
    }),
  },
  methods: {
    setTodayDate() {
      this.focus = "";
    },
    goHome() {
      this.focus = "";
      this.type = "month";
    },

    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },

    showEvent({ nativeEvent, event }) {
      this.selectedEvent = event;
      this.selectedElement = nativeEvent.target;
      console.log(this.selectedEvent, this.selectedElement);

      requestAnimationFrame(() =>
        requestAnimationFrame(() => (this.isEdit = true))
      );

      nativeEvent.stopPropagation();
    },
  },
};
</script>