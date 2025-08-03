import { Education } from "../typings";

export const fetchEducation = async (): Promise<Education[]> => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000';
    const res = await fetch(`${baseUrl}/api/education`);
    
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
