<script setup>
    const route = useRoute()
    const id = route.params.id
    const apiUrl = `https://swa-2024-dev.up.railway.app/api/speakers/${id}`;
    const {status, data} = await useFetch(apiUrl, {key:'singleSpeaker'}); 
</script>
<template>
    <div v-if="status=='pending'">
        <h1>Loading...</h1>
    </div>
    <div v-else class="w-full md:flex md:h-[500px] border-2 shadow-xl text-sm overflow-clip">
        <div class="">
            <img :src="data.speaker.profileImage" alt="profile image" class="w-full h-full object-contain object-center">
        </div>
        <div class="md:w-3/5 p-4 md:px-14 md:py-8 space-y-4">
            <div>
                <h1 class="font-semibold text-2xl">{{ data.speaker.name }}</h1>
                <h2 class="font-semibold">{{  data.speaker.designation }}</h2>
            </div>
            <p>{{ data.speaker.description }}</p>
            <div class="space-x-4">
                <NuxtLink :to="data.speaker.instagramUrl">
                    <UIcon name="tabler:brand-instagram" class="h-5 w-5 bg-primary-500"/>
                </NuxtLink>
                <NuxtLink :to="data.speaker.facebookUrl">
                    <UIcon name="tabler:brand-facebook" class="h-5 w-5 bg-primary-500"/>
                </NuxtLink>
                <NuxtLink :to="data.speaker.twitterUrl">
                    <UIcon name="tabler:brand-x" class="h-5 w-5 bg-primary-500"/>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>