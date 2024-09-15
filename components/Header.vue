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
        label:'item1'
    }], 
    [{
        label:'item2'
    }],
    [{
        label:'item3'
    }]

] 

</script>

<template>
    <div class="bg-gradient-to-r from-[#00012D] to-[#03025f] text-white font-semibold py-2 px-20  text-sm">
        <div class="flex items-center justify-end space-x-4">
            <div >
                <NuxtLink to="/register" class="flex items-center space-x-2">
                    <span>Register now</span>
                    <UIcon name="heroicons:arrow-long-right-20-solid" class="w-5 h-5" />
                </NuxtLink>
            </div>
            <div >
                <NuxtLink to="/login" class="flex items-center space-x-2">
                    <span>Login</span>
                    <UIcon name="material-symbols-light:lock-outline" class="w-5 h-5" />
                </NuxtLink>
            </div>
            <UDropdown :items="items" mode="hover" :popper="{ placement: 'bottom-start' }">
                <UButton label="Options" trailing-icon="i-heroicons-chevron-down-20-solid" class="font-bold bg-transparent hover:bg-transparent" />
            </UDropdown>
        </div>
        <div class="flex justify-between">
            <div> 
                <img src="/assets/img/logo.png" alt="">
            </div>
            <!-- Change this in md -->
            <div class="lg:flex w-3/4 lg:justify-evenly lg:items-center">
                <div v-for="link in links">
                    <NuxtLink
                        :to="link.to"
                        active-class="text-[#0058A0]"
                    >
                        {{ link.label }}
                    </NuxtLink>
                </div>
                <div class="bg-[#0058A0]  py-2 px-10 clip-para flex items-center space-x-2 cursor-pointer">
                    <UIcon name="ic:baseline-video-camera-front" class="w-6 h-5"/>
                    <h1>Live Streaming</h1>
                </div>
            </div>
            
        </div>
    </div>
</template>

<style scoped>
.clip-para{
    clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
}
</style>
