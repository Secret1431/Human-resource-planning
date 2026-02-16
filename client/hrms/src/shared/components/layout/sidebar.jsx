import { useState } from "react";
import { useNavigate } from "react-router-dom";
// import { supabase } from "../../api/supabase";
import useGlobalStore from "../../lib/theme/index";
import { ROLES } from '../../config/permission.config';

function Sidebar({ hasRole }) {
    const { theme } = useGlobalStore();
    const [isOpen, setIsOpen] = useState(true);
    const navigate = useNavigate();

    // const handleLogout = async () => {
    //     await supabase.auth.signOut();
    //     navigate('/');
    // };

    const allItems = [
        { label: 'Attendance', path: '/attendance', icon: '', roles: [ROLES.HR, ROLES.MANAGER] }
    ];

    const items = allItems.filter(item => {
        if(!item.roles) return true;
        return item.roles.some(role => role.toLowerCase() === hasRole?.toLowerCase())
    });

    return (
        <div className={`flex min-h-screen ${theme === 'dark' ? 'bg-gray-900' : 'bg-white text-gray-900'}`}>
            
            <div className={`flex flex-col bg-cyan-800 text-white transition-all duration-300 ${
                isOpen ? 'w-60' : 'w-16'
            } `}>
                <div className="flex justify-between items-center border-b py-3 px-4 border-gray-300">
                    {isOpen && <span className="text-sm text-gray-400 font-bold">HRMS</span>}
                    <div className="flex gap-2">
                        <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="flex flex-col gap-1 "
                    >
                        <span className="w-5 h-0.5 bg-white"></span>
                        <span className="w-5 h-0.5 bg-white"></span>
                        <span className="w-5 h-0.5 bg-white"></span>
                        
                    </button>
                    </div>
                </div>

                <nav className="flex-1 mt-4 space-y-2">
                    {items.map(item => (
                        <button
                            key={item.label}
                            onClick={() => navigate(item.path)}
                            className="flex flex-col gap-1 "
                        >
                            {!isOpen && (
                                <span className="text-sm font-bold">{item.label}</span>
                            )}
                        </button>
                    ))}
                </nav>

                {/* <div className="border-t border-gray-300 p-3">
                    {isOpen && (
                        <button
                        onClick={handleLogout}
                    >
                        Logout
                    </button>
                    )}
                </div> */}
            </div>

            <main className="flex-1">
                
            </main>
        </div>
    )
}

export default Sidebar;