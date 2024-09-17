<script setup lang="ts">
const props = defineProps({
    classStyle: String
})

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

const isOpen = ref(false);
const hamIconName = computed(() => {
    return isOpen.value === false ? 'ic:baseline-menu' : 'ic:outline-close';
})
const toggle = () => {
    isOpen.value = !isOpen.value;
}

</script>

<template>
    <div :class="classStyle"
        class="relative bg-[url('/assets/img/speaker-header.png')] bg-[center_96rem] text-white font-semibold text-sm ">
        <div class="absolute w-full h-full bg-gradient-to-b from-black to-transparent"></div>
        <div class="py-8 px-20">
            <div class="flex items-center justify-center md:justify-end space-x-4">
                <div>
                    <NuxtLink to="/register" class="flex items-center space-x-2">
                        <span>Register now</span>
                        <UIcon name="heroicons:arrow-long-right-20-solid" class="w-5 h-5" />
                    </NuxtLink>
                </div>
                <div>
                    <NuxtLink to="/login" class="flex items-center space-x-2">
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
                <div class="hidden lg:flex w-3/4 lg:justify-evenly lg:items-center">
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
                <UIcon :name="hamIconName" class="lg:hidden w-10 h-10 cursor-pointer" @click="toggle" />
            </div>
            <div v-if="isOpen">
                <div v-for="link in links">
                    <NuxtLink :to="link.to" active-class="text-[#0058A0]">
                        {{ link.label }}
                    </NuxtLink>
                </div>
                <div class="bg-[#0058A0]  py-2 px-6 clip-para flex w-fit cursor-pointer">
                    <UIcon name="ic:baseline-video-camera-front" class="w-6 h-5" />
                    <h1>Live Streaming</h1>
                </div>
            </div>
            <slot />
        </div>
        
    </div>
</template>

<style scoped>
.clip-para {
    clip-path: polygon(5% 0%, 100% 0%, 95% 100%, 0% 100%);
}
</style>
