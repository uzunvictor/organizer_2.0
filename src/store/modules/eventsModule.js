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
    },

    showLastEvents({ state, commit }) {
        const startDate = new Date("1971-01-01").getTime();
        const endDate = new Date("2050-01-01").getTime();
        const newSortedEvents = state.sortedEvents.sort((first, second) => new Date(first.start).getTime() - new Date(second.start).getTime())
        console.log('1', newSortedEvents)
        console.log(startDate, endDate)
        commit("updateSortedEventsMutation", newSortedEvents)
        //filter(e => startDate < new Date(e.start).getTime() && new Date(e.start).getTime() < endDate);

    }
};

export default {
    state,
    mutations,
    actions,
}