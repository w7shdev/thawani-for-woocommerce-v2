<template>
    <div><icon :class="classes" /></div>
</template>

<script setup>
import Check from  "../../icons/Check.vue";
import Ex from  "../../icons/Ex.vue";
import Excalmation from  "../../icons/Excalmation.vue";
const prop = defineProps(['status'])
let classes = "";
let icon = Check;

if(prop.status.toLowerCase() === "cancelled")
{
        icon  = Ex; 
        classes = "text-red-500"
}else if (prop.status.toLowerCase() === "paid"){
        icon = Check;
        classes = "text-green-500"
}else {
        icon = Excalmation;
        classes = "text-gray-500"
}
</script>
