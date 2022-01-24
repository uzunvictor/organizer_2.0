<template>
  <v-row class="fill-height">
    <v-col>
      <v-sheet height="54" class="d-flex">
        <v-btn class="ma-2" icon>
          <v-icon>mdi-chevron-left</v-icon>
        </v-btn>

        <v-select
          dense
          outlined
          hide-details
          class="ma-2"
          :items="types"
          v-model="type"
          label="type"
        >
        </v-select>

        <v-select
          dense
          outlined
          hide-details
          class="ma-2"
          :items="weekdays"
          v-model="weekday"
          label="week-days"
        >
        </v-select>
        <v-btn icon class="ma-2"><v-icon>mdi-chevron-right</v-icon></v-btn>
      </v-sheet>

      <v-sheet height="600">
        <v-calendar
          color="primary"
          :now="today"
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
      return new Date().toISOString().substring(0, 10);
    },
  },

  mounted() {
    console.log(this.today);
  },

  methods: {
    viewDay({date, year}) {
      this.focus = date;
      this.type = "day"
      console.log(year)
    },
  },
};
</script>