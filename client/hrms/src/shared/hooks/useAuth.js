import { useEffect } from "react";
import useAuthStore  from '@/modules/auth/store/auth.store';
import { supabase } from "@/lib/supabase/supabaseClient";

function useAuth() {
    const { user, setUser } = useAuthStore();

    useEffect(() => {
        if(!user) return;
        supabase.auth.getUser().then(({ data }) => {
            if(data?.user) setUser(data.user)
        })
    }, [user, setUser]);
}

export default useAuth;