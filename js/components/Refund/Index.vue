<template>
 <div>
   
   <div class="-mt-2">
     <h1 class="uppercase text-3xl font-black my-0">REFUND</h1>
     <h1 class="font-bold text-2xl uppercase m-0 -mt-2">ORDER #{{ session.metadata.order_id }} <small class="bg-gray-100 text-xs text-gray-500 inline-block p-0.5 rounded">complete</small> </h1>
     <p class="mt-1">I want to refund because of the following</p>
   </div>

   <ul>
       <li
         v-for="(reason, index) in refundReasons" 
         :key="reason.title"
         class="p-2 text-sm border border-solid border-green-500 text-green-500 hover:text-white hover:bg-green-500 transition rounded cursor-pointer flex space-x-3 items-center">
          <span>
           <i class="h-3 w-3 block bg-white rounded-full border border-solid border-green-500"></i>
          </span>
          <span>{{ reason.title }}</span>
       </li>
   </ul>

  <textarea name="message" class="placeholder:text-gray-500 border border-solid border-green-500 w-full h-32" placeholder="Write refund reason"></textarea>

  <div class="mt-4 flex space-x-4">
    <button class="block p-2 text-sm border border-solid border-green-500 text-green-500 hover:text-white hover:bg-green-500 transition rounded cursor-pointer w-1/2 bg-white">Close</button>
    <button class="block p-2 bg-green-500 border-none text-white text-sm hover:text-white hover:bg-green-600 transition rounded cursor-pointer w-1/2 ">Refund</button>
  </div>
 </div>
</template>


<script setup>
import { ref } from "vue"


const prop = defineProps(['session'])
const refundReasons = ref([
{
    title : 'I choose the wrong product',
    selected : false
},
{
    title : 'The product is damged',
    selected : false
},
{
    title : 'Other',
    selected : false
}
])
</script>
