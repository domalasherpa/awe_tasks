<script setup>
const speakerApiUrl = 'https://swa-2024-dev.up.railway.app/api/speakers';
const { data:speakers, error, status } = await useFetch(speakerApiUrl);
</script>

<template>
    <NuxtLayout>
        <div class="w-full space-y-10 my-10 md:my-20">
            <div>
                <h1 class="text-4xl font-semibold">Speakers</h1>
            </div>
            <div v-if="status === 'pending'">
                <h1>Loading...</h1>
            </div>
            <div v-else class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-2 gap-y-6">
                <div v-for="speaker in speakers">
                    <SpeakerCard :speaker="speaker" />
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>