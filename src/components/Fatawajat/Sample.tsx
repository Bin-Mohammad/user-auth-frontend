import useQuery from '@/hooks/useQuery';
import React from 'react'

const Sample = () => {

    // fetch data

    const {loading, data, error} = useQuery({
        url: 'GET_QUESTION_BY_ID'
    });
    
    const [_data, setData] = React.useState(data);

    return (
    <div>Sample</div>
  )
}

export default Sample