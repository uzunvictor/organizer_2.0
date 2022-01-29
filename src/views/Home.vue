<template>
  <v-row class="fill-height">
    <mcv-sorted-tasks></mcv-sorted-tasks>
    <v-container>
    <mcv-calendar></mcv-calendar>
    </v-container>
  </v-row>
</template>

<script>
import McvCalendar from "../components/McvCalendar.vue";
import McvSortedTasks from "../components/McvSortedTasks.vue";

export default {
  name: "Home",
  components: {
    McvCalendar,
    McvSortedTasks,
  },
};
</script>

