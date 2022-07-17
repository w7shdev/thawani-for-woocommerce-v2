import {defineStore} from "pinia"

export const useOverlayStore = defineStore('overlay',{

    state: () => {
        return {
            isOverlay : false
        }
    },
    getters : {
        overlay : (state) => state.isOverlay
    },
    actions :{
        toggle(state){
            this.isOverlay = state
        }
    }
})
