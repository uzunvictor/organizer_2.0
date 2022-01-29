import { setItem, getItem, removeItem } from "@/helpers/storage"

const state = {
    events: getItem("events") === null ? [] : getItem("events"),
    sortedEvents: getItem("events") === null ? [] : getItem("events"),
};

const mutations = {
    updateEventsMutation(state, payload) {
        state.events = payload
    },

    updateSortedEventsMutation(state, payload) {
        state.sortedEvents = payload
    }
};

const actions = {
    setEventsAction({ state, commit }, credentials) {
        const newEvents = [...state.events, credentials]
        commit("updateEventsMutation", newEvents)
        commit("updateSortedEventsMutation", newEvents)
        setItem("events", state.events)

    },

    deleteEventAction({ state, commit }, deletedItem) {
        const newEvents = state.events.filter((event) => event.name !== deletedItem)
        commit("updateEventsMutation", newEvents)
        commit("updateSortedEventsMutation", newEvents)
        removeItem(deletedItem)
    },

    showFavorited({ state, commit }) {
        const newEvents = state.sortedEvents.filter((event) => event.favorited === true)
        commit("updateSortedEventsMutation", newEvents)
    }
};

export default {
    state,
    mutations,
    actions,
}