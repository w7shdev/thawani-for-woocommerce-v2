<template>
    <div>
       <div>
           <h1 class="font-bold text-2xl uppercase m-0">ORDER #{{ session.metadata.order_id }} </h1>
           <span v-if="!state.isLoaded" class="inline-block p-1 h-6 text-center rounded bg-gray-100 text-gray-500 text-base px-4 min-w-[120px] animate-pulse"></span>
           <span v-else class="inline-block p-1 text-center rounded bg-gray-100 text-gray-500 text-base px-4 min-w-[120px]"> {{ state.status }} </span>
       </div>
       <div class="mt-8">
           <h1 class="font-bold text-2xl uppercase m-0">Thawani Status</h1>
           <div class="flex space-x-3">
             <div>
               <ThawaniStatus :status="session.payment_status" />
             </div>
             <div class="text-xl">{{ session.payment_status }}</div>
           </div>
       <button @click="copy()" class="px-4 flex justify-between p-1 items-center w-full mt-2 text-green-500 bg-white text-start min-w-[120px] border border-solid border-green-500 rounded hover:bg-green-600 hover:text-white cursor-pointer"><span>Thawani session ID </span> <span>
       <Copy />
       </span></button>
       <p v-if="isCopied" class="text-green-500 mt-1">The sesssion is copied to your clipboard.</p>
       </div>

       <div class="mt-8 flex justify-between items-start">
        <div>
            <h1 class="font-bold text-2xl uppercase m-0">Customer</h1>
        </div>
        <div>
            <ul class="text-base mt-0">
                <li>{{ session.metadata.customer_name}}</li>
                <li>{{ session.metadata.phone}}</li>
                <li>{{ session.metadata.email}}</li>
            </ul>
        </div>
       </div>
       <button @click="close()" class="px-4 p-2 bg-green-500 block w-full mt-2  text-center text-white min-w-[120px] border border-solid border-green-500 rounded hover:bg-green-600 hover:text-white cursor-pointer">Close</button>
    </div>
</template>

<script setup>
import ThawaniStatus from "./ThawaniStatus.vue"
import Copy from "../../icons/Copy.vue"
import { useOverlayStore } from "../../stores/overlayStore.js"
import { useSessionStore } from "../../stores/session-store.js"
import { onMounted, reactive, ref } from "vue";
import { request } from "../../service/fetch.js"

const sessionStore  = useSessionStore();
const overlayStore = useOverlayStore();
const prop = defineProps(['session'])
let isCopied  = ref(false);
const state  = reactive({
        isLoaded: false,
        status : ""
})

onMounted(async () =>{

    const {status} = await request({order_id : prop.session.metadata.order_id}, 'get_order_status')
    state.isLoaded = true; 
    state.status   = status;

})

function close(){
overlayStore.toggle(false)
sessionStore.$patch({session:null})
}

const copy = async() => {
  try{
        await navigator.clipboard.writeText(prop.session.session_id)
        isCopied.value = true;
    }catch {
      isCopied.value = false
  }
}
</script>
