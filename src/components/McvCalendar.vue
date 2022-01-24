<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="65" class="d-flex">
        <v-toolbar flat>
          <v-btn class="ma-2" dark color="primary" @click="setTodayDate"
            >Today</v-btn
          >
          <v-btn class="ma-2" icon @click="previousMonth"
            ><v-icon>mdi-chevron-left</v-icon></v-btn
          >
          <v-toolbar-title v-if="$refs.calendar">
            {{ $refs.calendar.title }}
          </v-toolbar-title>

          <v-btn icon class="ma-2" @click="nextMonth"
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
    currentDate: new Date(),
    month: new Date().getMonth(),
    year: new Date().getFullYear(),
    months: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    weekday: [0, 1, 2, 3, 4, 5, 6],
    weekdays: [
      { text: "Sun - Sat", value: [0, 1, 2, 3, 4, 5, 6] },
      { text: "Mon - Sun", value: [1, 2, 3, 4, 5, 6, 0] },
    ],
    focus: "",
    events: [],
    colors: ["blue", "indigo", "deep-purple", "cyan", "green", "orange"],
    names: [
      "Meeting",
      "Holiday",
      "Travel",
      "Event",
      "Birthday",
      "Conference",
      "Party",
    ],
  }),

  computed: {
    today() {
      return this.currentDate.toISOString().substring(0, 10);
    },
    currentMonth() {
      return this.months[this.month];
    },
  },

  mounted() {
    this.$refs.calendar.checkChange();
    console.log("this.refs", this.$refs.calendar.title);
  },

  methods: {
    previousMonth() {
      if (this.month === 0) {
        this.month = 11;
        this.year--;
      } else this.month--;
      this.currentDateNumber = "01";
      this.$refs.calendar.prev();
    },

    nextMonth() {
      if (this.month === 11) {
        this.month = 0;
        this.year++;
      } else this.month++;
      this.currentDateNumber = "01";
      this.$refs.calendar.next();
    },

    setTodayDate() {
      this.focus = "";
    },

    viewDay({ date, year }) {
      this.focus = date;
      this.type = "day";
      console.log(year);
    },
  },
};
</script>