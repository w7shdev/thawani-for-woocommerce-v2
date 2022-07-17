<template>
    <div class="p-4 py-6 bg-slate-50 rounded-md shadow mb-3">
           <div class="flex justify-between items-center">
            <div>
                <span class="font-bold text-2xl text-gray-900 block">
                <a 
                :href="`./post.php?post=${prop.session.metadata.order_id}&action=edit`"
                class="no-underline hover:underline"
                target="_blank"
                >
                    #{{ prop.session.client_reference_id }} <ExternalLink class="w-4 h-4" />
                </a>
                </span>
                <span class="text-gray-500 block"> {{ timeFromNow(prop.session.created_at) }}</span>
            </div>
            <div>
                <span class="font-bold text-2xl text-gray-900 block">90.000</span>
                <span class="text-gray-500 block text-center">OMR</span>
            </div>
            <div>
                <span class="font-bold text-2xl text-gray-900 block"> {{ prop.session.metadata.customer_name}}</span>
                <span class="text-gray-900 block text-center">
                    <a class="no-underline hover:underline" :href="`tel:` +  prop.session.metadata.phone ">{{ prop.session.metadata.phone }}</a>
                </span>
            </div>
            <div>
                 <payment-status :status="prop.session.payment_status"/>
            </div>
            <div class="relative">
                <button @click="togglePopup" type="button" class="border-none cursor-pointer bg-slate-50 hover:bg-gray-100 p-2 rounded">
                    <Menu />
                </button>
                <div v-if="state.popup"  v-click-outside="closePoupUp" class="absolute p-2 bg-slate-50 rounded shadow min-w-[200px] right-0 top-8 z-10">
                   <div class="flex-1">
                       <div @click="viewDetails" class="flex space-x-2 items-center p-2 rounded cursor-pointer hover:bg-slate-100">
                         <div>
                           <Search />
                         </div>
                         <div>View all details</div>
                       </div>

                       <div class="flex space-x-2 items-center p-2 rounded cursor-pointer hover:bg-slate-100">
                         <div>
                           <Cash />
                         </div>
                         <div>Refund</div>
                       </div>
                   </div>
                </div>
            </div>
           </div>
        </div>
</template>

<script setup>
    import Menu from "../../icons/Menu.vue"
    import Search from "../../icons/Search.vue"
    import Cash from "../../icons/Cash.vue"
    import ExternalLink from "../../icons/ExternalLink.vue"
    import {reactive} from "vue";
    import  { timeFromNow } from "../../modules/datejs"
    import PaymentStatus from "../../common/PaymentStatus.vue"
    import { useSessionStore } from "../../stores/session-store.js"
    import { useOverlayStore } from "../../stores/overlayStore.js"

    const sessionStore = useSessionStore();
    const overlayStore = useOverlayStore();


    const state  = reactive({popup: false});

    const prop = defineProps(["session"]);


    const togglePopup = () => {
        state.popup = !state.popup
    }

    function closePoupUp(){
        state.popup = false;
    }

    function viewDetails() {
        sessionStore.$patch({
                session : prop.session
            })
        overlayStore.toggle(true)
    }

</script>
