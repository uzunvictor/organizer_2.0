<template>
  <v-dialog v-model="isDialog" persistent max-width="600px">
    <template v-slot:activator="{ on }">
      <v-btn
        v-on="on"
        icon
        color="green"
        dark
        outlined
        class="mt-4 mb-1 rounded-lg"
        @click="editTask(event.name)"
        ><v-icon>mdi-pencil</v-icon></v-btn
      >
    </template>

    <v-card>
      <v-container>
        <v-row>
          <v-col cols="6"> <span class="text-h6">New Task</span></v-col>
          <v-col cols="6" class="d-flex justify-end"
            ><v-icon
              @click.stop="isFavorited = true"
              :color="isFavorited ? 'red' : 'grey'"
              x-large
              >mdi-heart</v-icon
            >
          </v-col>
        </v-row>
      </v-container>

      <v-card-text>
        <v-container>
          <v-form ref="formRef" @submit.prevent>
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
                <v-row>
                  <v-col cols="4">
                    <v-text-field
                      v-model="formatedStartDate"
                      label="selected start time"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-menu>
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          label="select start date"
                          v-model="startDate"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="startDate"></v-date-picker
                    ></v-menu>
                  </v-col>
                  <v-col cols="4">
                    <v-menu :close-on-content-click="false" ref="startHourRef">
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          label="select start hour"
                          v-model="startHour"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        @click:minute="$refs.startHourRef.save(startHour)"
                        v-model="startHour"
                        format="24hr"
                      ></v-time-picker> </v-menu
                  ></v-col>
                </v-row>
              </v-col>

              <v-col cols="12">
                <v-row>
                  <v-col cols="4">
                    <v-text-field
                      v-model="formatedEndDate"
                      label="selcted end time"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="4">
                    <v-menu>
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          label="select end date"
                          v-model="endDate"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-date-picker v-model="endDate"></v-date-picker
                    ></v-menu>
                  </v-col>
                  <v-col cols="4">
                    <v-menu :close-on-content-click="false" ref="endHourRef">
                      <template v-slot:activator="{ on }">
                        <v-text-field
                          label="select end hour"
                          v-model="endHour"
                          v-on="on"
                        ></v-text-field>
                      </template>
                      <v-time-picker
                        @click:minute="$refs.endHourRef.save(endHour)"
                        v-model="endHour"
                        format="24hr"
                      ></v-time-picker> </v-menu
                  ></v-col>
                </v-row>
              </v-col>

              <v-col cols="8">
                <v-menu>
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      label="color"
                      v-model="color"
                      :rules="inputRules"
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
                </v-menu> </v-col
              ><v-col cols="4"
                ><v-btn :color="color" rounded elevation="0"
                  >Selected color</v-btn
                ></v-col
              >
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
</template>

<script>
// import { setItem } from "../helpers/storage";

export default {
  name: "McvEditTask",

  data: () => ({
    isFavorited: null,
    isDialog: false,
    name: "",
    details: "",
    start: "",
    end: "",
    color: "",

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
  props: {
    eventInfo: {
      type: Object,
      required: true,
    },
  },

  mounted() {
    this.name = this.eventInfo.name;
    this.details = this.eventInfo.details;
    this.start = this.eventInfo.start;
    this.end = this.eventInfo.end;
    this.color = this.eventInfo.color;
    this.isFavorited = this.eventInfo.favorited;
  },
  // computed: {
  //   formatedStartDate() {
  //     return this.startDate + " " + String(this.startHour);
  //   },

  //   formatedEndDate() {
  //     return this.endDate + " " + String(this.endHour);
  //   },
  // },

  // watch: {
  //   startDate() {
  //     this.endDate = this.startDate;
  //   },
  // },

  methods: {
    focusNameInput() {
      setTimeout(() => {
        this.$refs.nameInput.focus();
      });
    },

    saveTask() {
      if (this.$refs.formRef.validate()) {
        const credentials = {
          name: this.name,
          details: this.details,
          start: this.formatedStartDate,
          end: this.formatedEndDate,
          color: this.color,
          favorited: this.isFavorited,
        };

        this.$store.dispatch("setEventsAction", credentials);
        this.name = "";
        this.details = "";
        this.isDialog = false;
      }
    },
  },
};
</script>