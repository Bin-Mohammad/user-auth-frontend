import { Link, useParams } from 'react-router';
import { Card, CardContent } from '../ui/card';
import { generateSlug } from '@/lib/utils';
import { useState } from 'react';
import useQuery from '@/hooks/useQuery';

const topics = ['فرض نماز کے مسائل', 'نفل نماز کے مسائل', 'سنت نماز کے مسائل']; // 
function TopicsList() {
  
  const { chapterId, categoryId } = useParams();

  // fetch all topics by categoryId
  const {loading, data, error} = useQuery<[]>({
    url : 'GET_ALL_TOPICS_BY_CATEGORY_ID'
  });

  const [topics, setTopics] = useState(data);



  return (
    <div className='mb-6'>
      <h1 className='h2 mb-5 text-right mr-10 '>ٹاپکس</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5" dir='rtl'>
        {topics?.map((topic, index) => (
          <div key={index} className=''>
            <Link to={`/fatawajat/${chapterId}/${categoryId}/${generateSlug(topic)}`} className=''>
              <Card dir='rtl' className='min-h-40 flex justify-center items-center'>
                <CardContent className=''>
                  <span className='title text-xl'>
                    {topic}
                  </span>
                  <br />
                  <span className='count'>(15)</span>
                </CardContent>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopicsList;
