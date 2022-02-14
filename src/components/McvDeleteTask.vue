<template>
  <v-btn
    icon
    color="red"
    dark
    outlined
    class="ma-4 mb-3 rounded-lg"
    @click="deleteTask(eventInfo.id)"
    ><v-icon>mdi-delete</v-icon></v-btn
  >
</template>

<script>
export default {
  name: "McvDeleteTask",
  props: {
    eventInfo: {
      type: Object,
      required: true,
    },
  },

  methods: {
    deleteTask(task) {
      this.$store.dispatch("deleteEventAction", task);
      this.$emit("closeCard")
    },
  },
};
</script>

<style>
</style>