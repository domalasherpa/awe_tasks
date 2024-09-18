<template>
    <div>
        <SpeakerHeader>
            <template #gradient-div>
                <div class="absolute w-full h-full bg-gradient-to-b from-black to-transparent z-0"></div>
            </template>
            <template #speaker-name>
                
            </template>
        </SpeakerHeader>
        <div class="w-full flex justify-center ">
            <div class="w-10/12 md:w-9/12 text-[#030328]">
                <div class="w-full space-y-20 my-20 text-[#030328]">
                    <SpeakerDetails/>
                    <SpeakerSchedule/>
                </div>
            </div>
        </div>
        <Footer />
    </div>
</template>
