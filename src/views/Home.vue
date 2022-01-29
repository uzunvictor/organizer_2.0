<template>
  <v-row class="fill-height my-0 py-0">
    <mcv-sorted-tasks></mcv-sorted-tasks>

    <mcv-calendar></mcv-calendar>
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

