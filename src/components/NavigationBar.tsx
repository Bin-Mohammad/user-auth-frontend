

import AdminAccount from './Header/AdminAccount';
import Notifications from './Header/Notifications';
import { Separator } from './ui/separator';

import { SidebarInset, SidebarTrigger } from "./ui/sidebar"



const NavigationBar = () => {
    return (

        <header className="flex h-16 shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-b border-b-gray-200 px-4  ">
            <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-2 ">
                    <SidebarTrigger className="-ml-1" />
                    <Separator orientation="vertical" className="mr-2 h-4" />
                    <h1 className='text-base'>Fatawa e Mohammadiya </h1>
                </div>
                <div className="right flex items-center gap-4">
                    <Notifications />
                    <AdminAccount />
                </div >
            </div>
        </header >

    )
}

export default NavigationBar;