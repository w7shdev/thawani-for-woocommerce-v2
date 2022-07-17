import { defineStore } from "pinia";

export const useSessionStore = defineStore('session', {

    state: () => {
        return {
            session: null,
            isRefend : false
        }
    },
    getters : {
        get : (state) => state.session,
        hasRefund: (state) => state.isRefend
    },
    actions: {
        setSession($session){
            this.session = $session;
        },
        setRefund(state){
            this.isRefend = state
        }
    }
})
