<script setup>
const route = useRoute()
const speakerApiUrl = `https://swa-2024-dev.up.railway.app/api/speakers/${route.params.id}`
const { data, error, status } = await useFetch(speakerApiUrl)
</script>
<template>
    <div>
        <SpeakerHeader />
        <div class="w-full flex justify-center ">
            <div class="w-10/12 md:w-9/12 text-[#030328]">
                <div class="w-full space-y-20 my-20 text-[#030328]">
                    <div v-if="status === 'pending'">
                        <h1>Loading...</h1>
                    </div>
                    <div v-else-if="status === 'error'">
                        <h1>Unable to fetch...</h1>
                    </div>
                    <div v-else class="w-full md:flex  border-2 shadow-xl text-sm overflow-clip">
                        <div class="md:w-2/5">
                            <img :src="useApiUrl(data.speaker.profileImage)" alt="profile image"
                                class="w-full h-full object-cover object-center">
                        </div>
                        <div class="md:w-3/5 p-4 md:px-14 md:py-8 space-y-4">
                            <div>
                                <h1 class="font-semibold text-2xl">{{ data.speaker.name }}</h1>
                                <h2 class="font-semibold">{{ data.speaker.designation }}</h2>
                            </div>
                            <p>{{ data.speaker.description }}</p>
                            <div class="space-x-4">
                                <NuxtLink :to="data.speaker.instagramUrl">
                                    <UIcon name="tabler:brand-instagram" class="h-5 w-5 bg-primary-500" />
                                </NuxtLink>
                                <NuxtLink :to="data.speaker.facebookUrl">
                                    <UIcon name="tabler:brand-facebook" class="h-5 w-5 bg-primary-500" />
                                </NuxtLink>
                                <NuxtLink :to="data.speaker.twitterUrl">
                                    <UIcon name="tabler:brand-x" class="h-5 w-5 bg-primary-500" />
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                    <SpeakerSchedule />
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
