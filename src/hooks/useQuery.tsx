import { useState, useEffect } from "react";


const apiUrls = [
    {
        name: 'GET_ALL_CHAPTERS',
        url: 'http://localhost:5000/chapters'
    },
    {
        name: 'GET_ALL_CATEGORIES_BY_CHAPTER_ID',
        url: '/api/get-all-categories-by-chapter-id'
    },
    {
        name: 'GET_ALL_TOPICS_BY_CATEGORY_ID',
        url: '/api/get-all-topics-by-category-id'
    },
    {
        name: 'GET_ALL_QUESTIONS_BY_TOPIC_ID',
        url: '/api/get-all-questions-by-topic-id'
    },
    {
        name: 'GET_QUESTION_BY_ID',
        url: '/api/get-question-by-id'
    },
];


interface ApiURLs {
    url: 'GET_ALL_CHAPTERS' |
    'GET_ALL_CATEGORIES_BY_CHAPTER_ID' |
    'GET_ALL_TOPICS_BY_CATEGORY_ID' |
    'GET_ALL_QUESTIONS_BY_TOPIC_ID' |
    'GET_QUESTION_BY_ID'
}





interface QueryResult<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}


export function getRegisteredUrl({ url }: ApiURLs) {

    url = apiUrls.find((item, index) => item.name === url)?.url as any;
    return url;
}




function useQuery<T>({ url }: ApiURLs): QueryResult<T> {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);


    useEffect(() => {
        let isMounted = true; // To handle component unmounting during fetch

        const fetchData = async () => {
            setLoading(true);
            setError(null);
            try {
                const apiUrl = getRegisteredUrl({url})
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status} ${response.statusText}`);
                }
                const result = await response.json();
                if (isMounted) {
                    setData(result.data);
                    console.log('component mounted successfully!')
                    console.log('results:', result.data)

                }
            } catch (err: unknown) {
                if (isMounted) {
                    setError(err instanceof Error ? err.message : "An unknown error occurred");
                }
            } finally {
                if (isMounted) {
                    setLoading(false);
                }
            }
        };

        fetchData();

        return () => {
            isMounted = false; // Cleanup to avoid setting state on an unmounted component
        };
    }, [url]);

    return { data, loading, error };
}

export default useQuery;

