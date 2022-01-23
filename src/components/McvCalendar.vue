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
          :now="today"
          :type="type"
          v-model="today"
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
    value: "",
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
      const today = new Date();
      const day = today.getDate();
      const month = today.getMonth();
      const year = today.getFullYear();
      return `${year}-${month}-${day}`;
    },
  },

  mounted() {
    console.log(this.today);
  },

  methods: {
    viewDay() {
      console.log("day day");
    },
  },
};
</script>