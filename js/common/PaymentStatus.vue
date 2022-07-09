<template>
    <span class="block min-w-[100px] rounded-full border p-1 text-center bg-slate-50 border-solid " :class="classes">
        {{ prop.status }}
    </span>
</template>
<script setup>

const prop = defineProps(['status'])

let classes = ""; 

if(prop.status.toLowerCase() == "cancelled")
   classes = "text-red-500 border-red-500"
else if (prop.status.toLowerCase() == "paid")
   classes = "text-green-500 border-green-500"
else 
   classes = "text-gray-500 border-gray-500"

</script>
