const speakerApiUrl = 'https://swa-2024-dev.up.railway.app/api/speakers';

export default function useSpeaker() {
    const getSpeakers = async () => {
        const { data, error, status } = await useFetch(speakerApiUrl);
        return { data, error, status };
    }

    const getSingleSpeaker = async (id) => {
        const speaker = `${speakerApiUrl}/${id}`;
        const { data, error, status } = await useFetch(speaker);
        return { data, error, status };
    }

    return {
        getSpeakers,
        getSingleSpeaker
    }
}