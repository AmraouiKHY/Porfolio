import { Education } from "../typings";

export const fetchEducation = async (): Promise<Education[]> => {
  try {
    // Use relative URL - no external server needed during build
    const res = await fetch('/api/education');
    
    if (!res.ok) {
      throw new Error(`Failed to fetch education: ${res.status}`);
    }
    
    const data = await res.json();
    return data.education || [];
  } catch (error) {
    console.error('Error fetching education:', error);
    return [];
  }
};
