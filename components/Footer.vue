<script setup>
    const footer_links = [
        [
            {
                label: 'Home',
                icon: '',
                to: '/'
            },
        ],
        [
            {
                label: 'Agenda',
                icon: '',
                to: '/'
            },
            {
                label: 'Speakers',
                icon: '',
                to: '/'
            },
            {
                label: 'Sponsors',
                icon: '',
                to: '/'
            },
            {
                label: 'Add poll',
                icon: '',
                to: '/'
            },
        ],
        [
            {
                label: 'News',
                icon: '',
                to: '/'
            },
            {
                label: 'Gallery',
                icon: '',
                to: '/'
            },
            {
                label: 'Archive',
                icon: '',
                to: '/'
            },
        ],
        [
            {
                label: 'Terms of Use',
                icon: '',
                to: '/'
            },
            {
                label: 'Privacy policy',
                icon: '',
                to: '/'
            },
        ]
    ]

    const social_links = [
        {
            label: 'Instagram',
            icon: 'tabler:brand-instagram',
            to: '/'
        },
        {
            label: 'Facebook',
            icon: 'tabler:brand-facebook',
            to: '/'
        },
        {
            label: 'X',
            icon: 'tabler:brand-x',
            to: '/'
        },
    ]
</script>

<template>
    <div class="bg-gradient-to-r from-[#00012D] to-[#03025f] text-white font-semibold py-20 px-20 space-y-40">
        <div class="md:flex flex-wrap md:justify-between space-y-10">
            <div>
                <img src="/assets/img/logo.png" alt="logo">
            </div>

            <div class="md:flex md:justify-between w-3/5">
                <div v-for="links in footer_links" class="space-y-2">
                    <div v-for="link in links">
                        <NuxtLink to="link.to">
                            {{ link.label }}
                        </NuxtLink>
                    </div>
                </div>
            </div>

            <div class="flex space-x-4">
                <div v-for="link in social_links">
                    <NuxtLink :to="link.to">
                        <UIcon :name="link.icon" class="h-5 w-5"/>
                    </NuxtLink>
                </div>
            </div>
        </div>
        <div>
            <p>Copyright &copy; Innovation Driven Water Sustainability 2024, All rights reserved.</p>
        </div>
    </div>
</template>