<script setup>
    const api_url = 'https://swa-2024-dev.up.railway.app/api/speakers'
    const {status, data: speakers} = await useFetch(api_url, {
        key: 'speakers'
    })

</script>
<template>
    <div class="w-full space-y-10 md:my-20">
        <div>
            <h1 class="text-4xl font-semibold">Speakers</h1>
        </div>
        <div v-if="status === 'pending'">
            <h1>Loading...</h1>
        </div>
        <div v-else class="grid grid-cols-5 gap-x-2 gap-y-6">
            <div v-for="speaker in speakers">
                <SpeakerCard :speaker="speaker"/>
            </div>
        </div>
    </div>
</template>