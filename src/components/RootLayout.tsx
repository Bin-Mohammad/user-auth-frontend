import NavigationBar from "./NavigationBar"
import Footer from "./Footer"
import { Outlet } from "react-router"
import { AppSidebar } from "./app-sidebar"

import AppBreadcrumbs from './Common/AppBreadcrumbs';
import { SidebarInset } from "./ui/sidebar";

const RootLayout = () => {
  return (
    <>
      <AppSidebar />
      <SidebarInset>
        <NavigationBar />
        <div className="flex-1 flex flex-col">
          <AppBreadcrumbs />
          <div className="p-5 flex-1">
            <Outlet />
          </div>
        </div>
        <Footer />
      </SidebarInset>



    </>
  )
}

export default RootLayout