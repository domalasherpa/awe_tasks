<script setup>
  const props = defineProps({
    speaker: Object
  })
  
</script>

<template>
    <NuxtLink :to="{name: 'speaker-id', params: {id:speaker.id}}">
        <div class="space-y-2 bg-white text-xs">
            <div class="border-2  h-40 md:h-60 overflow-clip">
                <img :src="speaker.profileImage" :alt="speaker.name" class="w-full h-full object-cover object-center">
            </div>
            <div class="border-b-2 md:py-2 border-[#3384BC]">
                <h1 class="font-semibold text-[#030328] sm:text-md lg:text-xl h-14">{{ speaker.name }}</h1>
            </div>
            <div class="">
                <p class="text-[#252643]">{{ speaker.designation  }}</p>
                <p class="font-semibold text-[#030328]">{{ speaker.companyName }}</p>
            </div>
        </div>
    </NuxtLink>
</template>