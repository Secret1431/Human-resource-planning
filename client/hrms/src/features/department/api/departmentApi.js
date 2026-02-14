import { supabase } from "../../../lib/supabase/supabaseClient";

export async function fetchAllDepartments(page = 1, limit = 10, search = '', selected = '') {
    const from = (page - 1) * limit;

    let query = supabase
    .from('departments')
    .select('name', { count: 'exact'} )
    .range(from, from + limit - 1)
    
    if(search) query = query.ilike('name', `%${search}%`);

    if(selected.code) query = query.eq('code', selected.code);

    const { data, count, error } = await query

    if(error) throw error;

    return {
        data,
        pagination: {
            total: count,
            totalPage: Math.ceil(count / limit)
        }
    }
};

export async function createDepartments(departmentData) {
    const { data: { user}, error: departmentError } = await supabase.auth.getUser();
    if(departmentError) throw new Error('Users not found');

    const { data, error } = await supabase
    .from('departments')
    .insert({ ...departmentData, user_id: user.id})
    .select()

    if(error) throw error;
    return data;
};

export async function updateDepartments(departmentId, updateDepartment) {
    const { data: { user}, error: departmentError } = await supabase.auth.getUser();
    if(departmentError) throw new Error('Users not found');

    const { data, error } = await supabase
    .from('departments')
    .update({ ...updateDepartment, user_id: user.id })
    .eq('id', departmentId)
    .select()

    if(error) throw error;
    return data;
}

export async function removeDepartments(departmentId) {

    const { error } = await supabase
    .from('departments')
    .delete()
    .eq('id', departmentId)
    .select()

    if(error) throw error;
    return error;
}