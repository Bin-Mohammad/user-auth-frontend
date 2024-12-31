// Data Models
type DataModel = 'CHAPTERS' | 'CATEGORIES' | 'TOPICS' | 'QUESTIONS';

// URL Types
type ChapterUrls =
    'GET_ALL_CHAPTERS' |
    'GET_CHAPTER_BY_ID' |
    'CREATE_NEW_CHAPTER' |
    'UPDATE_CHAPTER_BY_ID' |
    'DELETE_CHAPTER_BY_ID';

type CategoryUrls =
    'GET_ALL_CATEGORIES' |
    'GET_CATEGORY_BY_ID' |
    'CREATE_NEW_CATEGORY' |
    'UPDATE_CATEGORY_BY_ID' |
    'DELETE_CATEGORY_BY_ID';

type TopicUrls =
    'GET_ALL_TOPICS' |
    'GET_TOPIC_BY_ID' |
    'CREATE_NEW_TOPIC' |
    'UPDATE_TOPIC_BY_ID' |
    'DELETE_TOPIC_BY_ID';

type QuestionsUrls =
    'GET_ALL_QUESTIONS' |
    'GET_QUESTION_BY_ID' |
    'CREATE_NEW_QUESTION' |
    'UPDATE_QUESTION_BY_ID' |
    'DELETE_QUESTION_BY_ID';

// Mapping Data Models to URL Types
interface UrlMapping {
    CHAPTERS: ChapterUrls;
    CATEGORIES: CategoryUrls;
    TOPICS: TopicUrls;
    QUESTIONS: QuestionsUrls;
}

// API URLs structured
const apiUrls: { [K in DataModel]: { name: UrlMapping[K]; url: string }[] } = {
    CHAPTERS: [
        { name: 'GET_ALL_CHAPTERS', url: '/chapters' },
        { name: 'GET_CHAPTER_BY_ID', url: '/chapter/:chapterId' },
        { name: 'CREATE_NEW_CHAPTER', url: '/chapters/create' },
        { name: 'UPDATE_CHAPTER_BY_ID', url: '/chapters/update/:chapterId' },
        { name: 'DELETE_CHAPTER_BY_ID', url: '/chapters/delete/:chapterId' },
    ],
    CATEGORIES: [
        { name: 'GET_ALL_CATEGORIES', url: '/categories' },
        { name: 'GET_CATEGORY_BY_ID', url: '/category/:categoryId' },
        { name: 'CREATE_NEW_CATEGORY', url: '/categories/create' },
        { name: 'UPDATE_CATEGORY_BY_ID', url: '/categories/update/:categoryId' },
        { name: 'DELETE_CATEGORY_BY_ID', url: '/categories/delete/:categoryId' },
    ],
    TOPICS: [
        { name: 'GET_ALL_TOPICS', url: '/topics' },
        { name: 'GET_TOPIC_BY_ID', url: '/topic/:topicId' },
        { name: 'CREATE_NEW_TOPIC', url: '/topics/create' },
        { name: 'UPDATE_TOPIC_BY_ID', url: '/topics/update/:topicId' },
        { name: 'DELETE_TOPIC_BY_ID', url: '/topics/delete/:topicId' },
    ],
    QUESTIONS: [
        { name: 'GET_ALL_QUESTIONS', url: '/questions' },
        { name: 'GET_QUESTION_BY_ID', url: '/question/:questionId' },
        { name: 'CREATE_NEW_QUESTION', url: '/questions/create' },
        { name: 'UPDATE_QUESTION_BY_ID', url: '/questions/update/:questionId' },
        { name: 'DELETE_QUESTION_BY_ID', url: '/questions/delete/:questionId' },
    ],

};


type ModelParams = 'chapterId' | 'categoryId' | 'topicId' | 'questionId';

// Function to handle URL logic
interface GetApiURLsFunctionProps<T extends DataModel> {
    model: T,
    urlType: UrlMapping[T],
    params?: Partial<Record<ModelParams, string | number>> // Dynamic parameters
}



// Extend the function to accept dynamic parameters
export function getApiUrl<T extends DataModel>(
    { model, urlType, params }: GetApiURLsFunctionProps<T>,
): string | undefined {
    const urlsForModel = apiUrls[model];
    const matchedUrl = urlsForModel.find((url) => url.name === urlType)?.url;

    if (!matchedUrl) {
        return undefined;
    }

    // Replace dynamic parameters in the URL
    if (params) {
        return matchedUrl.replace(/:([a-zA-Z]+)/g, (_, key) => {
            if (key in params) {
                return encodeURIComponent(String(params[key as ModelParams]));
            }
            throw new Error(`Missing parameter: ${key}`);
        });
    }

    return matchedUrl; // Return URL as-is if no params are provided
}




/*
EXAMPLE USAGE
const api = getApiUrl({
  model : 'CHAPTERS',
  urlType : 'UPDATE_CHAPTER_BY_ID',
  params : {
      chapterId : '123',
  }
});

OUTPUT:
/chapters/123
*/

