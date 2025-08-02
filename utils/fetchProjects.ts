

import { Project } from "../typings";

export const fetchProjects = async() => {
    const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/projects`);

    const data = await res.json();
    const projects: Project[] = data.projects;

    // console.log('fetching', projects);

    return projects;
}