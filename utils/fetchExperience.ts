

import { Experience } from "../typings";

export const fetchExperiences = async() => {
    // Use relative URL - no external server needed during build
    const res = await fetch('/api/experience');

    if (!res.ok) {
        throw new Error(`Failed to fetch experiences: ${res.status}`);
    }

    const data = await res.json();
    const experiences: Experience[] = data.experiences;

    // console.log('fetching', experiences);

    return experiences;
}