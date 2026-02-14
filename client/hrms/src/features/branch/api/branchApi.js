import { supabase } from "../../../lib/supabase/supabaseClient";

export async function fetchAllBranch(page = 1, limit = 10, search = '', selectBranch = '') {
    const from = (page - 1) * limit;

    let query = supabase
    .from('branches')
    .select('branchId, name', { count: 'exact' } )
    .range(from, from + limit - 1)

    if(search) {
        query = query.ilike('name', `%${search}%`)
    }

    if(selectBranch.name) query = query.eq('name', selectBranch.name);

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

export async function createBranch(branchData) {
    const { data: { user } } = await supabase.auth.getUser();

    const {data, error} = await supabase
    .from('branches')
    .insert({ ...branchData, user_id: user.id })
    .select()
    .range()

    if(error) throw error;
    return data;
};

export async function updateBranch(branchId, updateBranch) {
    const { data: { user } } = await supabase.auth.getUser();

    const { data, error } = await supabase
    .from('branches')
    .update({ ...updateBranch, user_id: user.id })
    .eq('branchId', branchId)
    .select()

    if(error) throw error;
    return data
}

export async function removeBranch(branchId) {

    const { error } = await supabase
    .from('branches')
    .delete()
    .eq('branchId', branchId)
}