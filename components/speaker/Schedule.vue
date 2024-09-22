<script setup lang="ts">
const route = useRoute()
const router = useRouter()

interface Agenda {
    title: string;
    desc: string;
    startTime: string;
    endTime: string;
}

interface Schedule{
    id: number;
    date: {
        date: string;
        day: string;
    };
    agenda: {
        [key: number]: Agenda[];
    }
}

const schedules: Schedule[] = [
    {
        id: 1,
        date: {
            date: "Oct 20",
            day: "Sunday",
        },
        agenda: {
            0: [
                {
                    title: "Panel Discussion",
                    desc: "translating targets into action through regulatory innovations 20",
                    startTime: "09:30 AM",
                    endTime: "10:00 AM",
                },
                {
                    title: "Keynote",
                    desc: "Towards a safer and more just water future 20",
                    startTime: "09:30 AM",
                    endTime: "10:00 AM",
                },
            ],
            1: [
                {
                    title: "Keynote",
                    desc: "Towards a safer and more just water future 20",
                    startTime: "09:30 AM",
                    endTime: "10:00 AM",
                },
                {
                    title: "Panel Discussion",
                    desc: "translating targets into action through regulatory innovations 20",
                    startTime: "09:30 AM",
                    endTime: "10:00 AM",
                },
            ],
            2: [
                {
                    title: "Keynote",
                    desc: "Towards a safer and more just water future 20",
                    startTime: "09:30 AM",
                    endTime: "10:00 AM",
                },
                {
                    title: "Panel Discussion",
                    desc: "translating targets into action through regulatory innovations 20",
                    startTime: "09:30 AM",
                    endTime: "10:00 AM",
                },
            ],
        }
    },
    {
        id: 2,
        date: {
            date: "Oct 21",
            day: "Monday",
        },
        agenda: {
            0: [
                {
                    title: "Panel Discussion",
                    desc: "translating targets into action through regulatory innovations 21",
                    startTime: "09:30 AM",
                    endTime: "10:00 AM",
                },
                {
                    title: "Keynote",
                    desc: "Towards a safer and more just water future 21",
                    startTime: "09:30 AM",
                    endTime: "10:00 AM",
                },
            ],
            1: [
                {
                    title: "Keynote",
                    desc: "Towards a safer and more just water future 21",
                    startTime: "09:30 AM",
                    endTime: "10:00 AM",
                },
                {
                    title: "Panel Discussion",
                    desc: "translating targets into action through regulatory innovations 21",
                    startTime: "09:30 AM",
                    endTime: "10:00 AM",
                },
            ],
            2: [
                {
                    title: "Keynote",
                    desc: "Towards a safer and more just water future 21",
                    startTime: "09:30 AM",
                    endTime: "10:00 AM",
                },
                {
                    title: "Panel Discussion",
                    desc: "translating targets into action through regulatory innovations 21",
                    startTime: "09:30 AM",
                    endTime: "10:00 AM",
                },
            ],
        }
    },
    {
        id: 3,
        date: {
            date: "Oct 22",
            day: "Tuesday",
        },
        agenda: {
            0: [
                {
                    title: "Panel Discussion",
                    desc: "translating targets into action through regulatory innovations 22",
                    startTime: "09:30 AM",
                    endTime: "10:00 AM",
                },
                {
                    title: "Keynote",
                    desc: "Towards a safer and more just water future 22",
                    startTime: "09:30 AM",
                    endTime: "10:00 AM",
                },
            ],
            1: [
                {
                    title: "Keynote",
                    desc: "Towards a safer and more just water future 22",
                    startTime: "09:30 AM",
                    endTime: "10:00 AM",
                },
                {
                    title: "Panel Discussion",
                    desc: "translating targets into action through regulatory innovations 22",
                    startTime: "09:30 AM",
                    endTime: "10:00 AM",
                },
            ],
            2: [
                {
                    title: "Keynote",
                    desc: "Towards a safer and more just water future 22",
                    startTime: "09:30 AM",
                    endTime: "10:00 AM",
                },
                {
                    title: "Panel Discussion",
                    desc: "translating targets into action through regulatory innovations 22",
                    startTime: "09:30 AM",
                    endTime: "10:00 AM",
                },
            ],
        }
    },
];

const queryDate = computed(():number=>{
    return route.query.date ? parseInt(route.query.date as string): 0;
})
const queryAgenda = computed(():number=>{
    return route.query.agenda ? parseInt(route.query.agenda as string): 0;
})

const currentDateTab = ref<number>(queryDate.value);
const currentAgendaTab = ref<number>(queryAgenda.value);

watch([currentDateTab, currentAgendaTab], ([currentDate, currentAgenda])=>{
    router.push({
        path: route.path,
        query: {'date': currentDate, 'agenda': currentAgenda}
    })
})


watchEffect(()=>{
    currentDateTab.value = queryDate.value;
    currentAgendaTab.value = queryAgenda.value;
})

const onDateClicked = (dateId: number) : void => {
    currentDateTab.value = dateId;
    currentAgendaTab.value = 0;
}

const onAgendaClicked = (agendaId: number) : void => {
    currentAgendaTab.value = agendaId;
}

const selectedAgendas = computed(():Agenda[] => {
    return schedules[currentDateTab.value].agenda[currentAgendaTab.value];
})

</script>
<template>
    <div class="space-y-20">
        <div class="text-center">
            <h1 class="text-4xl font-semibold">Speaker's Schedules</h1>
            <p class="">
                Eu tempor sunt anim esse ullamco aliquip labore do in non ipsum
                exercitation.
            </p>
        </div>
        <div class="space-y-2">
            <div class="hidden md:flex justify-end">
                <div class="flex shadow-xl">
                    <div v-for="(schedule, index) in schedules" :key="schedule.id" @click="onDateClicked(index)"
                        :class="{'active': currentDateTab === index}"
                        class="border-2 py-2 px-10 cursor-pointer">
                        <p>{{ schedule.date.date }}</p>
                        <p>{{ schedule.date.day }}</p>
                    </div>
                </div>
            </div>

            <div class="flex md:hidden space-x-2">
                <div class="shadow-lg px-2 py-2">
                    <select v-model="currentDateTab" class="bg-white outline-none">
                        <option v-for="(schedule, index) in schedules" :value="index">{{ schedule.date.date }}</option>
                    </select>
                </div>
                <div class="shadow-lg px-2 py-2">
                    <select v-model="currentAgendaTab" class="bg-white outline-none">
                        <option value="0">Conference Agenda</option>
                        <option value="1">Workshop Agenda</option>
                        <option value="2">Round Table Agenda</option>
                    </select>
                </div>
            </div>

            <div class="md:flex space-x-2 w-full">
                <div class="hidden md:block">
                    <div class="py-2 px-6 cursor-pointer"
                        :class="{ 'active-poly': currentAgendaTab === 0,'active': currentAgendaTab===0, 'inactive': currentAgendaTab !== 0 }"
                        @click="() => onAgendaClicked(0)">
                        <h1>Conference Agenda</h1>
                    </div>
                    <div class="py-2 px-6 cursor-pointer"
                        :class="{ 'active-poly': currentAgendaTab === 1, 'active':currentAgendaTab===1, 'inactive': currentAgendaTab !== 1 }"
                        @click="() => onAgendaClicked(1)">
                        <h1>Workshop Agenda</h1>
                    </div>
                    <div class="py-2 px-6 cursor-pointer"
                        :class="{ 'active-poly': currentAgendaTab === 2, 'active':currentAgendaTab===2, 'inactive': currentAgendaTab !== 2 }"
                        @click="() => onAgendaClicked(2)">
                        <h1>Round Table Agenda</h1>
                    </div>
                </div>
                <div class="w-full space-y-1 shadow-xl">
                    <div v-for="agenda in selectedAgendas" class="border-2 p-4 space-y-2">
                        <h1 class="font-semibold text-lg">
                            {{ agenda.title }}
                        </h1>
                        <p class="text-primary">
                            {{ agenda.desc }}
                        </p>
                        <p><span>{{ agenda.startTime }}</span>&minus;<span>{{ agenda.endTime }}</span></p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.active {
    background-color: #020129;
    color: white;
}

.inactive {
    color: #020129;
    background-color: #F5F9FC;
    clip-path: polygon(95% 0,
            95% 35%,
            95% 0%,
            95% 65%,
            95% 100%,
            0 100%,
            0 0,
            0 0);
}

.active-poly {
    clip-path: polygon(95% 0,
            95% 35%,
            100% 50%,
            95% 65%,
            95% 100%,
            0 100%,
            0 0,
            0 0);
}
</style>
