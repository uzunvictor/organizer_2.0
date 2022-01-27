<template>
  <v-row justify="end">
    <v-dialog v-model="isDialog" persistent max-width="600px">
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          outlined
          x-large
          v-bind="attrs"
          v-on="on"
          color="blue"
          class="ma-2 white--text"
          @click="focusNameInput"
        >
          New Task
          <v-icon right dark> mdi-plus </v-icon>
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <span class="text-h6">New Task</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form ref="formRef">
              <v-row>
                <v-col cols="12">
                  <v-text-field
                    ref="nameInput"
                    label="name"
                    v-model="name"
                    :rules="inputRules"
                    required
                  ></v-text-field>
                </v-col>
                <v-col cols="12">
                  <v-text-field
                    label="details"
                    hint="example of helper text only on focus"
                    v-model="details"
                    :rules="inputRules"
                    required
                  ></v-text-field>
                </v-col>

                <v-col cols="12">
                  <v-menu>
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="formatedStartDate"
                        v-bind="attrs"
                        v-on="on"
                        label="chose start date"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="startDate.date"></v-date-picker>
                    <v-time-picker
                      v-model="startDate.hour"
                      format="24hr"
                    ></v-time-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12">
                  <v-menu>
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="formatedEndDate"
                        v-bind="attrs"
                        v-on="on"
                        label="chose end date"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="endDate.date"></v-date-picker>
                  </v-menu>
                </v-col>

                <v-col cols="12">
                  <v-menu>
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        label="color"
                        v-model="color"
                        :rules="inputRules"
                        v-bind="attrs"
                        v-on="on"
                        required
                      ></v-text-field>
                    </template>
                    <v-color-picker
                      class="ma-2"
                      v-model="color"
                      :swatches="swatches"
                      show-swatches
                    ></v-color-picker>
                  </v-menu>
                </v-col>
              </v-row>
            </v-form>
          </v-container>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="isDialog = false">
            Close
          </v-btn>
          <v-btn color="blue darken-1" dark @click="saveTask"> Save </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
// import { setItem } from "../helpers/storage";

export default {
  name: "McvNewTask",

  data: () => ({
    isDialog: false,
    name: "",
    details: "",
    startDate: {
      date: new Date().toISOString().substring(0, 10),
      hour: "00:00",
    },
    endDate: { date: new Date().toISOString().substring(0, 10), hour: "00:30" },
    color: "",
    picker: "",
    inputRules: [
      (v) => v.length >= 3 || "Minimum number of characters required is 3",
    ],
    swatches: [
      ["#FF0000", "#AA0000", "#550000"],
      ["#FFFF00", "#AAAA00", "#555500"],
      ["#00FF00", "#00AA00", "#005500"],
      ["#00FFFF", "#00AAAA", "#005555"],
      ["#0000FF", "#0000AA", "#000055"],
    ],
  }),

  computed: {
    formatedStartDate() {
      return this.startDate.date + " " + String(this.startDate.hour);
    },

    formatedEndDate() {
      return this.endDate.date + " " + String(this.endDate.hour);
    },
  },

  mounted() {
    console.log(this.formatedStartDate);
  },

  methods: {
    focusNameInput() {
      setTimeout(() => {
        this.$refs.nameInput.focus()
      })
    },

    saveTask() {
      if (this.$refs.formRef.validate()) {
        const credentials = {
          name: this.name,
          details: this.details,
          start: this.formatedStartDate,
          end: this.formatedEndDate,
          color: this.color,
        };
        console.log(this.$refs.nameInput.$el);

        this.$store.dispatch("setEventsAction", credentials);
        this.name = "";
        this.details = "";
        this.isDialog = false;
      }
    },
  },
};
</script>