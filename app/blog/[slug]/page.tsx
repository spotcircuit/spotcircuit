import { notFound } from 'next/navigation';

export const revalidate = 60;

interface PageProps {
    params: { slug: string };
    searchParams?: { [key: string]: string | string[] | undefined };
}

// Temporarily disabled Ghost blog integration
export default function BlogPost() {
    // Redirect to 404 for now since we're not fetching real posts
    notFound();
    
    // This function will never return anything as notFound() throws an error
    return null;
}
