import { Social } from "../typings";

export const fetchSocials = async () => {
  // Use relative URL - no external server needed during build
  const res = await fetch('/api/socials');

  if (!res.ok) {
    throw new Error(`Failed to fetch socials: ${res.status}`);
  }

  const data = await res.json();
  const socials: Social[] = data.socials;

  // console.log('fetching', socials);

  return socials;
};
