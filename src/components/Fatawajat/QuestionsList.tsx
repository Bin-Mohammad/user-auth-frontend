import { generateSlug } from '@/lib/utils';
import { Link, useParams } from 'react-router';
import { Card, CardContent } from '../ui/card';
import useQuery from '@/hooks/useQuery';
import { useState } from 'react';


const questions = [
  'فرض نماز کا بہترین وقت قرآنِ کریم نے کون سا بتلایا ہے؟',
  'فرض نماز قضاء ہوجانے پر کیا کرنا چاہیے؟',
  'جماعت کے ساتھ فرض نماز پڑھنا ضروری ہے یا انفرادی طور پر بھی جائز ہے؟جماعت کے ساتھ فرض نماز پڑھنا ضروری ہے یا انفرادی طور پر بھی جائز ہے؟'
]; // Example questions

function QuestionsList() {
  const { chapterId, categoryId, topicId } = useParams();

  // fetch all questions by topic id
  const { loading, data, error } = useQuery<[]>({
    url: 'GET_ALL_QUESTIONS_BY_TOPIC_ID'
  });

  const [questions, setQuestions] = useState(data);


  return (
    <div className='mb-6'>
      <h1 className='h2 mb-5 text-right mr-10 '>سوالات</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5" dir='rtl'>
        {questions?.map((question, index) => (
          <div key={index} className=''>
            <Link to={`/fatawajat/${chapterId}/${categoryId}/${topicId}/${generateSlug(question)}`} className=''>
              <Card dir='rtl' className='min-h-40 flex justify-center items-center'>
                <CardContent className=''>
                  <span className='title text-xl'>
                    {question}
                  </span>
                  <br />
                </CardContent>
              </Card>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionsList;
