<template>
    <div class="p-4 py-6 bg-slate-50 rounded-md shadow mb-3">
           <div class="flex justify-between items-center">
            <div>
                <span class="font-bold text-2xl text-gray-900 block">#89</span>
                <span class="text-gray-500 block">Yesterday , 1am </span>
            </div>
            <div>
                <span class="font-bold text-2xl text-gray-900 block">90.000</span>
                <span class="text-gray-500 block">OMR</span>
            </div>
            <div>
                <span class="font-bold text-2xl text-gray-900 block">Ali Al hinai</span>
                <span class="text-gray-900 block">+968 9422 2244</span>
            </div>
            <div>
                <button type="button" class="text-green-500 p-1 border-2 border-solid bg-stone-50 outline-none border-green-500 px-8 text-center inline-block rounded-full">Paid</button>
            </div>
            <div>
                <button type="button" class="border-none cursor-pointer bg-slate-50 hover:bg-gray-100 p-2 rounded">
                    <Menu />
                </button>
            </div>
           </div>
        </div>
</template>

<script setup>
    import Menu from "../../icons/Menu.vue"
</script>
