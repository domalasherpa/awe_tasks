<script setup lang="ts">
definePageMeta({
  colorMode: 'light',
})

import type { AsyncData, AsyncDataRequestStatus } from '#app';

const speakerApiUrl = 'https://swa-2024-dev.up.railway.app/api/speakers'

interface Speaker{
    id: number,
    name: string,
    designation: string,
    companyName: string,
    profileImage: string
}

const { data:speakers, status} = await useFetch(speakerApiUrl) as AsyncData<{data: Speaker}, AsyncDataRequestStatus>

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
            <div v-else-if="status === 'error'">
                <h1>Error fetching data. Please try again later.</h1>
            </div>
            <div v-else class="grid max-[400px]:grid-cols-1 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-2 gap-y-6">
                <div v-for="speaker in speakers">
                    <SpeakerCard :speaker="speaker" />
                </div>
            </div>
        </div>
    </NuxtLayout>
</template>