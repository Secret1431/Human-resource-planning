import { supabase } from "./supabaseClient";
import { ROLES } from "@/config/permission.config";

export async function loginUser({ email, password }) {

    const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
    });

    if(error) throw error;
    return { data };
};

export async function registerUsers({ email, password, role = ROLES.EMPLOYEE}) {

    const { data, error } = await supabase.auth.signUp({
        email,
        password
    });

    if(error) throw error;

    const { error: dbError } = await supabase
    .from('users')
    .insert({id: data?.user.userId, email: data.user.email, role})

    if(dbError) return { error: dbError };

    return { user: data.user };
}