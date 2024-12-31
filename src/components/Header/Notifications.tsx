import React from 'react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '../ui/dropdown-menu'
import { Button } from '../ui/button'
import { Bell, User } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'

const Notifications = () => {


    const notifications = [
        {
            icon: User,
            title: 'New Product',
            description: 'A new product is lunching...',
        },
        {
            icon: User,
            title: 'Custom Product',
            description: 'Custom products are very interactive...',
        },
        {
            icon: User,
            title: 'Finance Development',
            description: 'Custom products are very interactive...',
        },
        {
            icon: User,
            title: 'Finance Development',
            description: 'Custom products are very interactive...',
        },
    ];



    return (
        <div className="notifications">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant={'outline'} size={'icon'}>
                        <Bell size={32} />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                    <DropdownMenuLabel>Notifications</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {notifications && notifications.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <>
                                <DropdownMenuItem key={item.title + index}>
                                    <div className='flex items-center gap-3'>
                                        <Avatar className='h-9 w-9'>
                                            <AvatarImage src="https://github.com/shadcn.png" />
                                            <AvatarFallback>
                                                <Icon size={16} />
                                            </AvatarFallback>
                                        </Avatar>
                                        <div className="content flex-1">
                                            <h3 className="title text-base font-semibold">{item.title}</h3>
                                            <p className="description">{item.description}</p>
                                        </div>
                                    </div>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator />
                            </>
                        );

                    })}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default Notifications