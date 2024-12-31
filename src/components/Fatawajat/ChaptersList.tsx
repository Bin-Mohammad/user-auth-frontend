import { Link } from 'react-router';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { Delete, Edit } from 'lucide-react';
import useQuery from '@/hooks/useQuery';
import ChapterForm from './Forms/ChapterForm';
import { LoadingSpinner } from '../LoadingSpinner';
import { useState, useEffect } from 'react';
import { AlertDialog } from '@radix-ui/react-alert-dialog';
import { AlertModal } from '../Common/AlertModal';
import { getApiUrl } from '@/types/applicationUrls';

// import { useQuery } from '@tanstack/react-query'


// update chapter Schema
export interface Chapter {
  _id: string,
  name: string,
  title: string,
  slug: string,
  description: string,
  isPublished: boolean,
  createdAt: string,
  updatedAt: string,
  __v: number,
  tree: ChapterTree

}
interface ChapterTree {
  totalCategories: number,
  topicsCount: number,
  totalQuestions: number
}



function ChaptersList() {



  // fetch chapters data
  const { data, error, loading } = useQuery<Chapter[]>({
    url: 'GET_ALL_CHAPTERS'
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [deleteChapter, setDeleteChapter] = useState<{ state: boolean, chapter: Chapter | null }>({
  //   state: false,
  //   chapter: null
  // });
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [chapters, setChapters] = useState<Chapter[] | null>(null);
  const [updateChapter, setUpdateChapter] = useState<Chapter>();


  useEffect(() => {

    setChapters(data);
  }, [data]);



  // function to update chapt er
  function handleUpdateChapter(chapter: Chapter) {
    // get current chapter required things
    const { _id: chapterId } = chapter;
    // loop thorugh all chapters and set current chapter to state
    chapters?.forEach((item) => {
      // check for _id
      if (item._id === chapterId) {
        setUpdateChapter({ ...item });
        setIsModalOpen(true);
      }
    });

  }

  return (
    <div className='mb-6 h-full'>
      {/* <AlertModal deleteChapter={deleteChapter} setDeleteChapter={setDeleteChapter} /> */}
      <div className='mb-5 flex justify-between items-center'>
        <ChapterForm isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} updateChapter={updateChapter} />
        <h1 className='h2  text-right mr-10 '>ابواب کی فہرست</h1>
      </div>
      <div className="content h-full w-full">
        {loading ? (
          <div className='h-full w-full flex justify-center items-center'>
            <LoadingSpinner className='mb-[150px]' />
          </div>
        ) : error ? (
          <div className='h-full w-full flex justify-center items-center'>
            <p>Error while fetching data from backedn. Try Again</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5" dir='rtl'>
            {chapters?.length as any > 0 ? (
              chapters?.map((chapter, index) => (
                <div className='card' key={index + Math.random()}>
                  <Card dir='rtl'>
                    <Link key={chapter.title} to={`/fatawajat/${chapter._id}/`}>
                      <CardHeader className='cursor-pointer'>
                        <CardTitle>
                          <span>{index + 1}. </span>
                          <span>{chapter.title}</span>
                        </CardTitle>
                        <CardDescription>یہاں پر کچھ وضاحت ائے گی۔۔یہاں پر کچھ وضاحت ائے گی۔۔یہاں پر کچھ وضاحت ائے گی۔</CardDescription>
                      </CardHeader>
                    </Link>

                    <Separator className='mb-6' />
                    <CardContent className=' select-none '>
                      <div>
                        <span className="text">اقسام کی تعداد:</span>
                        <span className="count">8</span>
                      </div>
                      <div>
                        <span className="text">اسباق کی تعداد:</span>
                        <span className="count">30</span>
                      </div>
                      <div>
                        <span className="text">سوالات کی تعداد:</span>
                        <span className="count">150</span>
                      </div>
                    </CardContent>
                    <Separator className='mb-6' />

                    <CardFooter dir='ltr'>
                      <div className='flex items-center gap-2 w-full justify-between'>
                        <div className='flex items-center gap-2'>
                          <Button variant={'outline'} size={'icon'}><Delete /></Button>
                          <Button variant={'outline'} size={"icon"} onClick={() => handleUpdateChapter(chapter)}><Edit /></Button>
                        </div>
                        <div className="" dir='ltr'>
                          10 hours ago
                        </div>
                      </div>
                    </CardFooter>
                  </Card>
                  {/* <div className='p-4 border flex justify-center items-center min-h-40 rounded '>
                  </div> */}
                </div>
              ))
            ) : (
              <div className="no-saved-chapters border w-full h-full">
                <h1 className='h-7'>No Saved Chapters</h1>
              </div>
            )}

          </div>
        )}
      </div>

    </div>
  );




}

export default ChaptersList;
