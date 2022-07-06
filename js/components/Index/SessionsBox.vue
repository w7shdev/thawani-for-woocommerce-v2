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
            <div class="relative">
                <button type="button" class="border-none cursor-pointer bg-slate-50 hover:bg-gray-100 p-2 rounded">
                    <Menu />
                </button>
                <div class="absolute p-2 bg-slate-50 rounded shadow min-w-[200px] right-0 top-8 z-10">
                   <div class="flex-1">
                       <div class="flex space-x-2 items-center p-2 rounded cursor-pointer hover:bg-slate-100">
                         <div>
                           <Search />
                         </div>
                         <div>View all details</div>
                       </div>

                       <div class="flex space-x-2 items-center p-2 rounded cursor-pointer hover:bg-slate-100">
                         <div>
                           <Cash />
                         </div>
                         <div>View all details</div>
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
</script>
