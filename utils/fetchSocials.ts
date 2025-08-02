import { Social } from "../typings";

export const fetchSocials = async () => {
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';
  const res = await fetch(`${baseUrl}/api/socials`);

  const data = await res.json();
  const socials: Social[] = data.socials;

  // console.log('fetching', socials);

  return socials;
};
