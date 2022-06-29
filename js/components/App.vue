<template>
    <div class="container mx-auto lg:w-2/4">
        <Heading class="text-2xl text-green-600 mb-1 mt-6" title="Thawani History sessions" />
        <p class="my-1">Listing your last payment history sessions. The order is from the latests to the oldest.</p>

        <!-- divider --> 
        <div class="mt-8"></div>
        <!-- divider -->

        <!-- session box --> 
        <SessionBox />
        <SessionBox />
        <SessionBox />
        <SessionBox />
        
    </div>
</template>

<script setup>
import Heading from "../common/Heading.vue"
import SessionBox from "./Index/SessionsBox.vue"
</script>
