<script setup lang="ts">
const links = [{
    label: 'Home',
    icon: '',
    to: '/'
},
{
    label: 'Agenda',
    icon: '',
    to: '/agenda'
},
{
    label: 'Speakers',
    icon: '',
    to: '/speakers'
},
{
    label: 'Sponsors',
    icon: '',
    to: '/sponsors'
},
{
    label: 'Exhibitors',
    icon: '',
    to: '/exhibitors'
},
{
    label: 'Media center',
    icon: '',
    to: '/mediacenter'
},
{
    label: 'Digital Library',
    icon: '',
    to: '/digitallibrary'
},
{
    label: 'Contact us',
    icon: '',
    to: '/contactus'
}
]
//items for the drop down in navbar
const items = [
    [{
        label: 'item1'
    }],
    [{
        label: 'item2'
    }],
    [{
        label: 'item3'
    }]
]

const isOpen = ref(false)
</script>

<template>
    <div class="bg-gradient-to-r from-[#00012D] to-[#03025f] text-white font-semibold py-4 px-2 md:px-20 space-y-4 text-sm">
        <div class="flex items-center justify-end space-x-4 text-xs">
            <div>
                <NuxtLink to="/register" class="flex items-center md:space-x-2">
                    <span >Register now</span>
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
            <!-- Change this in md -->
            <div class="hidden min-[1400px]:flex w-3/4 lg:justify-evenly lg:items-center">
                <div v-for="link in links">
                    <NuxtLink :to="link.to" active-class="text-[#0058A0]">
                        {{ link.label }}
                    </NuxtLink>
                </div>
                <div class="bg-[#0058A0]  py-2 px-10 clip-para flex items-center space-x-2 cursor-pointer">
                    <UIcon name="ic:baseline-video-camera-front" class="w-6 h-5" />
                    <h1>Live Streaming</h1>
                </div>
            </div>
            <UIcon name='ic:baseline-menu' class="min-[1400px]:hidden w-10 h-10 cursor-pointer" @click="isOpen = true" />
        </div>
        <div class="hidden">
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