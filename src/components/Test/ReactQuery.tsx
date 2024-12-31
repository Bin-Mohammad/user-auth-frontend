
import { getApiUrl } from "@/types/applicationUrls";
import { useEffect } from "react";
const ReactQuery = () => {

    // const { data: chapters = [], isLoading } = useQuery(['chapters'], fetchChapters);


    async function fetchChapterById() {
        const url = getApiUrl({
            model: 'QUESTIONS',
            urlType: 'DELETE_QUESTION_BY_ID',
            params: {
                questionId: '676e1df1d92a10ee89d28308'
            }
        });
        console.log('url is :', url)
        // const response = fetch(url);
    }

    useEffect(() => {
        fetchChapterById();
    },[])




    return (
        <div>ReactQuery</div>
    )
}

export default ReactQuery