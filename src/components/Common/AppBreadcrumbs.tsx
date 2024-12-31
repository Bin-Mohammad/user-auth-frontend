
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from '@/components/ui/breadcrumb';
import { Home } from 'lucide-react';
import { Link, useLocation } from 'react-router';
import { generateFatawajatBreadcrumbsList } from '../../lib/utils'
const AppBreadcrumbs = () => {

    const location = useLocation();
    const pathname = location.pathname;
    const { breadcrumbsList } = createBreadcrumbs(pathname);

    function createBreadcrumbs(pathname: string) {

        let breadcrumbsList: string[] = [];

        // chec for /fatawajat route
        if (pathname.includes('/fatawajat_removethispart')) {
            breadcrumbsList = generateFatawajatBreadcrumbsList(pathname);
        } else {

            const bdList = pathname
                .split("/")
                .slice(1)
                .map((part) => decodeURIComponent(part))
                .map((v, i) => {
                    if (v.includes('-')) {
                        return v.split('-').join(' ');
                    }
                    return v;
                });
            // Decode each part of the URL

            console.log("breadcrumbsList:", bdList);
            breadcrumbsList = [...bdList]
        }

        return { breadcrumbsList };
    }


    // function to make text from slug
    function slugToText(slug: string) {

    }

    return (
        <div className='px-5 mt-5 sticky top-0'>
            <div className="breadcrumbs py-2 px-5 bg-gray-100 ">
                <Breadcrumb>
                    <BreadcrumbList key={Math.random()}>
                        <BreadcrumbItem>
                            <BreadcrumbLink href="/" asChild>
                                <Link to={'/'} className='flex items-center gap-1'> <Home size={20} />Home</Link>
                            </BreadcrumbLink>
                        </BreadcrumbItem>

                        <BreadcrumbSeparator />
                        {breadcrumbsList && breadcrumbsList.map((item, index) => (
                            <>
                                {index != (breadcrumbsList.length - 1) ? (
                                    <>
                                        <BreadcrumbItem key={Math.random()}>
                                            <BreadcrumbLink href={`/${item}`} className='capitalize' asChild>
                                                <Link to={`/${item}`}>{item}</Link>
                                            </BreadcrumbLink>
                                        </BreadcrumbItem>
                                        <BreadcrumbSeparator key={index + 3 + item} />
                                    </>
                                ) : (

                                    <BreadcrumbItem className='capitalize'>
                                        <BreadcrumbPage>{item}</BreadcrumbPage>
                                    </BreadcrumbItem>
                                )}
                            </>
                        ))}


                    </BreadcrumbList>
                </Breadcrumb>

            </div>
        </div>
    )
}

export default AppBreadcrumbs