import IntroSection from '@/components/IntroSection'
import { useEffect, useState } from 'react'
const Main = () => {

    const [users, setUsers] = useState([]);



    // // Fetch users data
    // async function fetchUsers() {
    //     try {
    //         const response = await fetch('http://localhost:5000/users', {
    //             method: 'GET',
    //         });
    //         const users = await response.json();

    //         if (!response.ok) {
    //             throw new Error('Network Error')
    //         }

    //         console.log('users',users)
    //         return users
    //     } catch (error) {
    //         // handle errors here
    //         console.log('errors:', error)
    //     }
    // }



    // api calls
    // useEffect(() => {
    //     fetchUsers().then((res) => setUsers([...res]))
    // }, [])



    return (
        <main>
            <IntroSection />
        </main>
    )
}

export default Main