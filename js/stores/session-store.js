import { defineStore } from "pinia";

export const useSessionStore = defineStore('session', {

    state: () => {
        return {
            session: null
        }
    },
    getters : {
        get : (state) => state.session
    },
    actions: {
        setSession($session){
            this.session = $session;
        }
    }
})
