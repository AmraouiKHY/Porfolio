

import { Skill } from "../typings";

export const fetchSkills = async() => {
    // Use relative URL - no external server needed during build
    const res = await fetch('/api/skills');

    if (!res.ok) {
        throw new Error(`Failed to fetch skills: ${res.status}`);
    }

    const data = await res.json();
    const skills: Skill[] = data.skills;

    // console.log('fetching', skills);

    return skills;
}