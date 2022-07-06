<template>
    <div class="container mx-auto lg:w-2/4">

<div class="flex items-center">
  <div class="flex-grow">
        <Heading class="text-2xl text-green-600 mb-1 mt-6" title="Thawani History sessions" />
        <p class="my-1">Listing your last payment history sessions. The order is from the latests to the oldest.</p>
  </div>
  <div>
    <button class="bg-gray-200 rounded hover:bg-slate-50 shadow cursor-pointer text-gray-500 p-2 px-4 border-none  inline-block">
         <span class="flex items-center"><Filter class="mr-2 h-4 w-4" /> Filter</span>
    </button>
  </div>
</div>

        <!-- divider --> 
        <div class="mt-8"></div>
        <!-- divider -->

        <!-- session box --> 
        <SessionBox />
        <SessionBox />
        <SessionBox />
        <SessionBox />
        
        <div class="mt-4">
            <div class="flex space-x-2 justify-end">
                <button class="px-4 p-2 bg-slate-50 text-green-600 min-w-[120px] border border-solid border-green-500 rounded hover:bg-green-500 hover:text-white cursor-pointer">Previous</button>
                <button class="px-4 p-2 bg-green-500 text-white min-w-[120px] border border-solid border-green-500 rounded hover:bg-green-600 hover:text-white cursor-pointer">Next</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import Heading from "../common/Heading.vue"
import SessionBox from "./Index/SessionsBox.vue"
import Filter from "../icons/Filter.vue"
</script>
