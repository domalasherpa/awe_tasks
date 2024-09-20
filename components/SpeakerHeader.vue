<script setup lang="ts">
const links = [{
    label: 'Home',
    to: '/'
},
{
    label: 'Agenda',
    to: '/agenda'
},
{
    label: 'Speakers',
    to: '/speakers'
},
{
    label: 'Sponsors',
    to: '/sponsors'
},
{
    label: 'Exhibitors',
    to: '/exhibitors'
},
{
    label: 'Media center',
    to: '/mediacenter'
},
{
    label: 'Digital Library',
    to: '/digitallibrary'
},
{
    label: 'Contact us',
    to: '/contactus'
}
]
//items for the drop down in navbar
const items = [{
        label: 'item1',
        label: 'item2',
        label: 'item3'
}]

const isOpen = ref(false);
</script>

<template>
    <div class="relative bg-[url('/assets/img/speaker-header.png')] bg-[85rem_45rem] lg:bg-[center_96rem] text-white font-semibold text-sm min-h-80">
        <div class="absolute w-full h-full bg-gradient-to-b from-black to-transparent"></div>
        <div class="relative z-0 px-4 md:py-8 md:px-20">
            <div class="flex items-center justify-center md:justify-end space-x-4 py-4 text-xs">
                <div>
                    <NuxtLink to="/register" class="flex items-center md:space-x-2">
                        <span>Register now</span>
                        <UIcon name="heroicons:arrow-long-right-20-solid" class="w-5 h-5" />
                    </NuxtLink>
                </div>
                <div>
                    <NuxtLink to="/login" class="flex items-center md:space-x-2">
                        <span>Login</span>
                        <UIcon name="material-symbols-light:lock-outline" class="w-5 h-5" />
                    </NuxtLink>
                </div>
                <UDropdown :items="items" mode="hover" :popper="{ placement: 'bottom-start' }">
                    <UButton label="Options" trailing-icon="i-heroicons-chevron-down-20-solid"
                        class="font-bold bg-transparent hover:bg-transparent" />
                </UDropdown>
            </div>
            <div class="flex justify-between">
                <div>
                    <img src="/assets/img/logo.png" alt="">
                </div>
                <div class="hidden min-[1400px]:flex w-3/4 lg:justify-evenly lg:items-center">
                    <div v-for="link in links">
                        <NuxtLink :to="link.to" active-class="text-[#0058A0]">
                            {{ link.label }}
                        </NuxtLink>
                    </div>
                    <div class="bg-[#0058A0]  py-2 px-4 clip-para flex items-center space-x-2 cursor-pointer">
                        <UIcon name="ic:baseline-video-camera-front" class="w-6 h-5" />
                        <h1>Live Streaming</h1>
                    </div>
                </div>
                <UIcon name="ic:baseline-menu" class="min-[1400px]:hidden w-10 h-10 cursor-pointer" @click="isOpen = true" />
            </div>
        </div>
        <p class="absolute bottom-10 text-xl sm:text-2xl md:text-4xl px-4 md:px-20 ">Speaker Profile</p>
        <div class="xl:hidden">
            <USlideover v-model="isOpen" prevent-close>
                <UCard class="flex flex-col flex-1"
                    :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
                    <template #header>
                        <div class="flex items-center justify-end">
                            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1"
                                @click="isOpen = false" />
                        </div>
                    </template>

                    <Placeholder class="h-full space-y-2">
                        <div v-for="link in links">
                            <NuxtLink :to="link.to" active-class="text-[#0058A0]">
                                {{ link.label }}
                            </NuxtLink>
                        </div>
                        <div class="bg-[#0058A0]  py-2 px-6 clip-para flex w-fit cursor-pointer">
                            <UIcon name="ic:baseline-video-camera-front" class="w-6 h-5" />
                            <h1>Live Streaming</h1>
                        </div>
                    </Placeholder>
                </UCard>
            </USlideover>
        </div>
    </div>
</template>

<style scoped>
.clip-para {
    clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
}
</style>