<template>
    <div>
        <Header class="bg-gradient-to-r from-[rgb(0,1,45)] to-[#03025f]"/>
        <div class="w-full flex justify-center">
            <div class="w-10/12 md:w-9/12 text-[#030328]">
                <slot />
            </div>
        </div>
        <Footer />
    </div>
</template>