import { setItem, getItem } from "@/helpers/storage"

const state = {
    events: getItem("events") === null ? [] : getItem("events")
};

const mutations = {
    updateEventsMutation(state, payload) {
        state.events = payload
    }
};

const actions = {
    setEventsAction(context, credentials) {
        const newEvents = [...context.state.events, credentials]
        context.commit("updateEventsMutation", newEvents)
        setItem("events", context.state.events)

    },

    deleteEventAction({state, commit}, deletedItem) {
        const newEvents = state.events.filter((event) => event.name !== deletedItem)
        commit("updateEventsMutation", newEvents)
    }
};

export default {
    state,
    mutations,
    actions,
}