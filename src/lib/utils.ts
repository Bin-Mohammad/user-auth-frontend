import { getRegisteredUrl } from "@/hooks/useQuery"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


interface ErrorSchema {
  [key: string]: any
}



// function to join error strings with a delimter
// It takes an object as input, joins each key error string with specific delimiter i.e. & and return it
export function makeErrorString(zodErrors: ErrorSchema) {
  const errors: Record<string, string> = {}
  // loop throught incoming object
  for (let key in zodErrors) {
    errors[key] = zodErrors[key]; // ['ss', 'dd'] ---> ss&dd
  }

  console.log('errorstringobject:', errors)

  return errors;

  /*
  
  const errors = {
  title : 'Too Short & Must start with n',
  description : "Must be at least 20 characters",
  imgUrl : 'Invalid URL',
  category : 'invalid category',
  pitch : 'This is required field'
  
  };
  
  
  */
}


// function to handle sidbar state value in cookies
// export function setSidebarCurrentStateInCookies(){
//   const x = Cookies.get('sidbar:state');
//   const currentValue = Cookies.get('sidbar:state')?.value === 'true';
//   Cookies.set('sidebar:state', currentValue);
//   console.log('cookies value', currentValue, x);

// }


// Helper function to get a cookie value by name
export const getCookie = (name: string) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) {
    const cookieValue = parts.pop()?.split(';').shift();
    const defaultOpen = cookieValue === 'true';
    return defaultOpen;
  }
  return undefined;
};




// function to generate user friendly names of url 
export function generateSlug(str: String) {
  const slug = str.split(' ').join('-');
  return slug;
}

// function to make text from slug
export function slugToText(slug: string) {
  const text = slug.split('-').join(' ');
  return text;
}


// function to create breadcrumbs list
// const pathname = '/fatawajat/chpaterId/categoryId/topicId/questionId';
// const x1 = generateFatawajatBreadcrumbsList(pathname);

export function generateFatawajatBreadcrumbsList(pathname: string) {
  // refine pathname and get breadcrumbs items names
  // ['fatawajat', 'chapterId', 'categoryId', 'topicId', 'questionId']
  const bdc_ids = pathname.split('/').slice(1);
  const breadcrumbsList: string[] = [];

  bdc_ids.forEach((bdc_id, index) => {

    // skip for bdc_ids[0] i.e. first element /fatawajat and push into array as it is
    if (index == 0) {
      breadcrumbsList.push(bdc_id);
    };

    // fetch bdc_name using bdc_id
    const bdc_item = fetch('api/get-bdc-name-by-bdcId')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fech name')
        }
        return response.json()
      })
      .catch((error) => {
        // handle error gracefully
        console.log('error', error.message);
      });

    const bdc_item_name = bdc_item.then((res) => {
      console.log('res', res)
      return ''
    });
    breadcrumbsList.push(bdc_item_name);
  });



  return breadcrumbsList;





}


// function for name handler
export function generateNameHandler(str: string, handlerType?: 'underscore' | 'hypen') {
  // remove emtpy spaces from both ends
  str = str.trim();

  // identifire for nameHandler
  let nameHandler = '';

  // hypen handler e.g. farz-namaz-k-msail
  if (handlerType === 'hypen') {
    nameHandler = str.toLowerCase().split(' ').join('-');

    return nameHandler;
  }

  // Default handler is with underscore "_" e.g. farz_namaz_k_msail
  nameHandler = str.toLowerCase().split(' ').join('_');
  return nameHandler;
}




// handlers
export async function fetchChapters() {
  const url = getRegisteredUrl({ url: 'GET_ALL_CHAPTERS' });
  const response = await fetch(url);
  const jsonData = await response.json();
  console.log('data:', jsonData);

  return jsonData;
}






// CUSTOM HOOKS

/*
  useQuery 
        This custom hook is, basically, a data fetching function that takes 'A' arguments and return
        'B' object
  
  A  
    @objectId - String - ID of object by which data will be fetch
    @option - Object - option object for url selection

  B
    isLoading - Boolean - loading state of api calls to show loading UIs
    data - Array - fetched data
    error - String - error mesage in case of api call failure
*/

const apiUrls = [
  {
    name: 'GET_ALL_CHAPTERS',
    url: '/api/chapters'
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

interface Options {
  method: 'GET' | 'POST' | 'PATCH' | 'DELETE',
  url: 'GET_ALL_CHAPTERS' |
  'GET_ALL_CATEGORIES_BY_CHAPTER_ID' |
  'GET_ALL_TOPICS_BY_CATEGORY_ID' |
  'GET_ALL_QUESTIONS_BY_TOPIC_ID' |
  'GET_QUESTION_BY_ID'
}

function useQuery(objectId: string, options: Options) {
  // Get required things
  const { method, url } = options;

  // make required things
  let isLoading, data, error;

  // api url
  const URL = apiUrls.find((item, index) => item.name == url)?.url;

  // make api call
  const response = fetch(URL!)
    .then((res) => {
      if (!res.ok) {
        throw new Error('Failed to fetch');
      }
      // parse & return as json
      return res.json();


    }
    ).then((jsonData) => {
      // check for existance
      console.log('jsonData:', jsonData);
      data = jsonData;
    })
    .catch((err) => {
      // handle errors gracefully
      console.log('err:', err);
      error = err.message;
    });



  return { isLoading, data, error }
}




