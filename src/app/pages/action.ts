import axios from 'axios';

export async function fetchRepositories(username: string): Promise<any[]> {
    try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_GIT_HUB_API}/${username}/repos?type=public&page=2`);
        return response.data;
    } catch (error) {
        console.error('Failed to fetch repositories:', error);
        return [];
    }
}