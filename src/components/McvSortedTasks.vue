<template>
   <v-col cols="4">
      <v-sheet height="665" color="blue lighten-4" class="rounded-xl">
        <v-toolbar flat color="blue darken-4" class="rounded-lg d-flex flex-row-reverse">
          <v-btn icon dark class="ma-2" v-for="item in sortedListIcons" :key="item"><v-icon>mdi-heart</v-icon></v-btn>
        </v-toolbar>
      </v-sheet>
    </v-col>
</template>

<script>
export default {
    name: "McvSortedTasks",
    data: () => ({
      sortedListIcons: [0,1,2,3],
    })

}
</script>
