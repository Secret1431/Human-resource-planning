import useResponsive from "@/shared/hooks/useReponsive";
import useAuthStore from "@/modules/auth/store/auth.store";
import Sidebar from "./sidebar";
import Navbar from "./navbar";

function AppLayout({ children }) {
    const { user } = useAuthStore();
    const { isMobile }= useResponsive();

    return (
        <div className='flex min-h-screen bg-gray-100 font-mono'>
            {!isMobile && <span><Sidebar userRole={user?.role} /></span>}
            <div className='flex-1 flex flex-col'>
                <Navbar />
                <div className='flex justify-center px-3 sm:px-6 py-6 mt-10'>{children}</div>
            </div>
        </div>
    )
}

export default AppLayout;