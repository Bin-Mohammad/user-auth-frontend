import { slugToText } from '@/lib/utils';
import { ChangeEvent, FocusEvent, KeyboardEvent, useState } from 'react';
import { useParams } from 'react-router';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import useQuery from '@/hooks/useQuery';

function Question() {
  // Get params
  const { chapterId, categoryId, topicId, questionId } = useParams();


  // fetch question by id
  const {loading, data, error} =  useQuery<string>({
    url : 'GET_QUESTION_BY_ID'
  });

  const [question, setQuestion] = useState(data);

  const [isEditAble, setIsEditAble] = useState(false);
  const [value, setValue] = useState(slugToText(question!));


  // handle double click
  function toggleEditMode() {
    setIsEditAble((prevState) => !prevState);
  }

  // handle input value change
  function handleOnChange(e: ChangeEvent<HTMLInputElement>) {
    setValue(e.target.value);
    console.log('on change value:', value)

  }

  function handleOnBlur(e: FocusEvent<HTMLInputElement>) {
    setIsEditAble(false);
    console.log('blur event value:', e.target.value);
  }
  function handleOnKeyPress(e: KeyboardEvent<HTMLInputElement>) {
    if (e.key === 'Enter') {
      setIsEditAble(false);
      console.log('currentTarget enter key value:', e.currentTarget.value)
    }
  }


  console.log('adf:', value)

  return (
    <div className='mb-6'>
      <div onDoubleClick={toggleEditMode} className='heading'>
        {!isEditAble ? (
          <h1 className='h2 mb-5 text-right'>
            <span className="count">سوال نمبر</span>
            <span>#</span>
            <span>69</span>
            <span> :</span>
            <span className="question">
              {value}
            </span>
          </h1>
        ) : (
          <input
            dir='rtl'
            type='text'
            className='block w-full p-1 mb-5 text-right text-3xl font-semibold text-gray-800 leading-snug '
            value={value}
            onChange={handleOnChange}
            onKeyUp={(e) => handleOnKeyPress(e)}
            onBlur={handleOnBlur}
            autoFocus
          />
        )}
      </div>
      <div className="content ritch-text-editor">
        <textarea name="answer" id="" className='border block w-full min-h-36  p-4 block w-full p-1 mb-5 text-right text-3xl font-semibold text-gray-800 leading-snug' dir='rtl'>
        </textarea>
      </div>
      <div className="cta flex items-center justify-start gap-3">
        <Button variant={'danger'} size={'sm'} className='transition-none'>Cancel</Button>
        <Button variant={'blue'} size={'sm'}   className='transition-none'>Save</Button>
      </div>
    </div>
  );
}

export default Question;
