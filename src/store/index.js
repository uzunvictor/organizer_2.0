import Vue from "vue"
import Vuex from "vuex"
import eventsModule from "./modules/eventsModule"

Vue.use(Vuex)

export default new Vuex.Store({
    state: {},
    actions: {},
    nutations: {},
    modules: { eventsModule },
})