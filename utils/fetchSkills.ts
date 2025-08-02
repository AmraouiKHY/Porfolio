

import { Skill } from "../typings";

export const fetchSkills = async() => {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/skills`);

    const data = await res.json();
    const skills: Skill[] = data.skills;

    // console.log('fetching', skills);

    return skills;
}