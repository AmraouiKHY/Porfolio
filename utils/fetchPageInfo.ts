

import { PageInfo } from "../typings";

export const fetchPageInfo = async() => {
    // Use absolute URL for server-side (build time) and relative URL for client-side
    const baseUrl = typeof window === 'undefined' ? 'http://localhost:3001' : '';
    const res = await fetch(`${baseUrl}/api/pageInfo`);

    if (!res.ok) {
        throw new Error(`Failed to fetch page info: ${res.status}`);
    }

    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    // console.log('fetching', pageInfo);

    return pageInfo;
}