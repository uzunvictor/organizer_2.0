<template>
  <v-container>
    <!-- <test-calendar></test-calendar> -->
    <mcv-calendar></mcv-calendar>
  </v-container>
</template>

<script>
import McvCalendar from "../components/McvCalendar.vue";
//import TestCalendar from "../components/testCalendar.vue";

export default {
  name: "Home",
  components: {
    McvCalendar,
    //TestCalendar,
  },
};
</script>

