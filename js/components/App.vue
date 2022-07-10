<template>
    <div class="container mx-auto lg:w-[750px]">

<div class="flex items-center">
  <div class="flex-grow">
        <Heading class="text-2xl text-green-600 mb-1 mt-6" title="Thawani History sessions" />
        <p class="my-1">Listing your last payment history sessions. The order is from the latests to the oldest.</p>
        <p class="mt-1 text-gray-500"> Total Results : {{ state.results }} </p>
  </div>
  <div class="relative">
    <button @click="filterPopupToggle()" class="bg-gray-200 rounded hover:bg-slate-50 shadow cursor-pointer text-gray-500 p-2 px-4 border-none  inline-block">
         <span class="flex items-center"><Filter class="mr-2 h-4 w-4" /> Filter</span>
    </button>

    <div v-if="state.filterPopup" v-click-outside="filterPopupToggle" class="absolute top-8 right-0 min-w-[200px] rounded shadow bg-slate-50 text-gray-500 py-2 px-4 z-10">
       <div class="flex justify-between items-center">
         <div>
            Per page
         </div>
         <div>
            <select name="perpage" v-model="limit" class="min-w-[120px]">
              <option> 10 </option>
              <option> 25 </option>
              <option> 40 </option>
              <option> 50 </option>
            </select>
         </div>
       </div>
       <div class="flex justify-end mt-2">
         <button @click="setLimit()" type="button" class="px-4 p-2 bg-green-500 text-white min-w-[120px] border border-solid border-green-500 rounded hover:bg-green-600 hover:text-white cursor-pointer">Update</button> 
       </div>                         
    </div>
  </div>
</div>

        <!-- divider --> 
        <div class="mt-8"></div>
        <!-- divider -->

        <!-- session box --> 
        <div v-if="state.sessionList.length < 1 ">
          No result   
        </div>
        <div v-else> 
            <SessionBox v-for="session in state.sessionList" :session="session" :key="session.session_id"/>
        </div>
        
        <div class="mt-4">
            <div v-if="state.sessionList.length > 0" class="flex space-x-2 justify-end">
                <button v-if="page > 1" @click="prevPage()" class="px-4 p-2 bg-slate-50 text-green-600 min-w-[120px] border border-solid border-green-500 rounded hover:bg-green-500 hover:text-white cursor-pointer">Previous</button>
                <button @click="nextPage()" class="px-4 p-2 bg-green-500 text-white min-w-[120px] border border-solid border-green-500 rounded hover:bg-green-600 hover:text-white cursor-pointer">Next</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import Heading from "../common/Heading.vue"
import SessionBox from "./Index/SessionsBox.vue"
import Filter from "../icons/Filter.vue"
import { request } from  "../service/fetch.js"
import {reactive , ref , onMounted } from "vue";

const limit  = ref(10)
const page   = ref(1)
const state  = reactive({ 
    filterPopup : false,
    results : 0,
    sessionList : [],
    isSessionAvailable : false
})

async function doSessionRequest()
{
    const response  = await request({
                        skip : page.value,
                        limit: limit.value
                        }, "get_all_sessions");
    const parsedResponse = JSON.parse(response);
    state.results = parsedResponse.data.length;

    if(state.results > 0) {
        state.isSessionAvailable = true; 
    }
    state.sessionList = parsedResponse.data;
}


onMounted( async () => {
    await doSessionRequest();
})

async function setLimit(){
    state.sessionList = [];
    filterPopupToggle()
    await doSessionRequest();
}

async function prevPage()
{
    state.sessionList = [];
    if(page.value <= 1){
        page.value = 1
    }else{
        page.value -= 1; 
    }
    await doSessionRequest();
}


async function nextPage()
{
    state.sessionList = [];
    page.value += 1; 
    await doSessionRequest();
}

function filterPopupToggle(){
    state.filterPopup = !state.filterPopup
}
</script>
