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
        const newEvents = state.events.filter((event) => event.id !== deletedItem)
        commit("updateEventsMutation", newEvents)
        commit("updateSortedEventsMutation", newEvents)
        removeItem(deletedItem)
        setItem("events", newEvents)
    },

    refreshEvents({ commit }) {
        const newEvents = getItem("events") || [];
        commit("updateSortedEventsMutation", newEvents)
    },

    showFavorited({ state, commit }) {
        const newEvents = state.sortedEvents.filter((event) => event.favorited === true)
        commit("updateSortedEventsMutation", newEvents)
    },

    showLastEvents({ state, commit }) {
        const newSortedEvents = state.sortedEvents.sort((first, second) => new Date(first.start).getTime() - new Date(second.start).getTime())
        commit("updateSortedEventsMutation", newSortedEvents)


    }
};

export default {
    state,
    mutations,
    actions,
}