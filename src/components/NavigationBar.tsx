import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';


export const NavigationBar = () => {
    const isUserLogedIn = true;
  return (
    <header className='py-[22px] bg-gray-100 shadow-lg border'>
    <div className='container mx-auto flex justify-between items-center'>
        <div className="logo">
                <img src={'/logo.png'} alt="user" className='max-w-[143px] ' />
        </div>
        <div className="user-auth">
            {isUserLogedIn ? (
                <div className='flex items-center gap-8'>
                    <button className="create hover:underline font-semibold text-xl leading-6">
                            Create
                    </button>
                    <button className="logout hover:underline  font-semibold text-xl leading-6 text-[#EF4444]">Logout</button>
                    <Avatar className=''>
                        <AvatarImage src={'https://github.com/shadcn.png'} alt='shadcn'></AvatarImage>
                        <AvatarFallback>HS</AvatarFallback>
                    </Avatar>
                </div>) : (
                <button className="login">Login</button>
            )}
        </div>
    </div>
</header>
  )
}
