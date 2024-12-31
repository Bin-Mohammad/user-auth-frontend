import { Link, useParams } from 'react-router';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../ui/card';
import { Separator } from '../ui/separator';
import { Button } from '../ui/button';
import { Delete, Edit } from 'lucide-react';
import { generateSlug } from '@/lib/utils';
import { useState } from 'react';
import useQuery from '@/hooks/useQuery';

const categories = [
  'نماز', 'روزہ', 'حج',
  'نماز', 'روزہ', 'حج',
];

function CategoriesList() {
  const { chapterId } = useParams();


  // fetch categories by chapter id
  const {loading, data, error} = useQuery<[]>({
    url : 'GET_ALL_CATEGORIES_BY_CHAPTER_ID'
  });


  const [categories, setCategories] = useState(data);




  return (
    <div className='mb-6'>
      <h1 className='h2 mb-5 text-right mr-10 '>کیٹیگریز</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-5" dir='ltr'>
        {categories?.map((category, index) => {
          return (
            <div key={index} className=''>
              <Link dir='rtl' key={category} to={`/fatawajat/${chapterId}/${generateSlug(category)}`} >
                <Card dir='rtl' className='min-h-40 flex justify-center items-center'>
                  <CardContent className=''>
                    <span className='title text-xl'>
                      {category}
                    </span>
                    <br />
                    <span className='count'>(15)</span>
                  </CardContent>
                </Card>
              </Link>
            </div>
          );

        })}
      </div>
    </div>
  );
}

export default CategoriesList;
