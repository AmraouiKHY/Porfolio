

interface BaseEntity {
    _id: string;
}

export interface PageInfo extends BaseEntity {
    name: string;
    role: string;
    heroImage: string;
    backgroundInformation: string;
    profilePic: string;
    phoneNumber: string;
    email: string;
    address: string;
}

export interface Technology extends BaseEntity {
    title: string;
    image: string;
}

export interface Skill extends BaseEntity {
    title: string;
    image: string;
    progress: number;
}

export interface Experience extends BaseEntity {
    company: string;
    companyImage: string;
    dateStarted: string;
    dateEnded: string | null;
    isCurrentlyWorkingHere: boolean;
    jobTitle: string;
    points: string[];
    technologies: Technology[];
}

export interface Education extends BaseEntity {
    institution: string;
    degree: string;
    dateStarted: string;
    dateEnded: string | null;
    isCurrentlyStudying: boolean;
    description: string;
    institutionLogo: string;
    institutionWebsite: string;
}

export interface Project extends BaseEntity {
    title: string;
    linkToBuild: string;
    githubLink?: string;
    image: string;
    summary: string;
    technologies: Technology[];
}

export interface Social extends BaseEntity {
    title: string;
    url: string;
}