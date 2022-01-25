<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="65" class="d-flex">
        <v-toolbar flat>
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
        </v-toolbar>
      </v-sheet>

      <v-sheet height="600">
        <v-calendar
          ref="calendar"
          color="primary"
          :type="type"
          v-model="focus"
          :weekdays="weekday"
          :events="events"
          @click:date="viewDay"
        >
        </v-calendar>
      </v-sheet>
    </v-col>
  </v-row>
</template>
 
 
<script>
export default {
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
    events: [],
  }),

  mounted() {
    this.events = [];
  },

  methods: {
    setTodayDate() {
      this.focus = "";
    },

    viewDay({ date }) {
      this.focus = date;
      this.type = "day";
    },
  },
};
</script>