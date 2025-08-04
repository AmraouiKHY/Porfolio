

import { Project } from "../typings";

export const fetchProjects = async() => {
    // Use relative URL - no external server needed during build
    const res = await fetch('/api/projects');

    if (!res.ok) {
        throw new Error(`Failed to fetch projects: ${res.status}`);
    }

    const data = await res.json();
    const projects: Project[] = data.projects;

    // console.log('fetching', projects);

    return projects;
}