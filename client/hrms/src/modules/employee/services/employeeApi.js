import { supabase } from "../../../lib/supabase/supabaseClient";

export async function fetchEmployees(page = 1, limit = 10, search = '', selected = '') {
    const from = (page - 1) * limit;

    let query = supabase
    .from('employees')
    .select('firstname', { count: 'exact'} )
    .range(from, from + limit - 1)
    
    if(search) query = query.ilike('firstname', `%${search}%`);

    if(selected.address) query = query.eq('address', selected.address);

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

export async function createEmployees(employeeData) {
    const { data: { user}, error: employeeError } = await supabase.auth.getUser();
    if(employeeError) throw new Error('Users not found');

    const { data, error } = await supabase
    .from('employees')
    .insert({ ...employeeData, user_id: user.id})
    .select()

    if(error) throw error;
    return data;
};

export async function updateEmployees(employeeId, updateEmployee) {
    const { data: { user}, error: employeeError } = await supabase.auth.getUser();
    if(employeeError) throw new Error('Users not found');

    const { data, error } = await supabase
    .from('employees')
    .update({ ...updateEmployee, user_id: user.id})
    .eq('id', employeeId)
    .select()

    if(error) throw error;
    return data;
}

export async function removeDepartments(employeeId)  {

    const { error } = await supabase
    .from('employees')
    .delete()
    .eq('id', employeeId)
    .select()

    if(error) throw error;
    return error;
}