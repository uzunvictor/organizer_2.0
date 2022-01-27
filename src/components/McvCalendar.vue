<template>
  <v-row class="fill-height">
    <mcv-sorted-tasks></mcv-sorted-tasks>

    <v-col cols="8">
      <v-sheet height="65" class="d-flex">
        <v-toolbar flat color="blue lighten-5" class="rounded-lg">
          <v-btn class="ma-2" dark color="primary" @click="setTodayDate"
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

      <v-sheet height="600" class="rounded=xl">
        <v-calendar
          ref="calendar"
          color="primary"
          :type="type"
          v-model="focus"
          :weekdays="weekday"
          :events="testEvents"
          @click:date="viewDay"
        >
        </v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>
 
 
<script>
import { mapState } from "vuex";
import McvNewTask from "./McvNewTask.vue";
import McvSortedTasks from "./McvSortedTasks.vue";
//import { getItem } from "@/helpers/storage";

export default {
  components: { McvNewTask, McvSortedTasks },
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
      this.type = "month";
    },

    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
  },
};
</script>