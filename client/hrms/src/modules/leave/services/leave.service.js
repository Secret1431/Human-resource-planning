import { supabase } from "@/lib/supabase/supabaseClient";

export async function getLeaves(page = 1, limit = 10, search = '') {
    const from = (page - 1) * limit;
    const to = from + limit - 1;

    let query = supabase
    .from('leaves')
    .select('*', { count: 'exact'} )
    .range(from, to)

    if(search) query = query.ilike('status');

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

export async function createLeaves(leaveData) {

    const { data: { user }, error: leaveError } = await supabase.auth.getUser();
    if(!user || !leaveError) throw new Error('Users not found');

    const { data, error } = await supabase
    .from('leaves')
    .insert({ ...leaveData, user_id: user.id })
    .select()

    if(error) throw error;
    return data;
};

export async function updateLeaves(leaveId, updateLeave) {

    const { data: { user }, error: leaveError } = await supabase.auth.getUser();
    if(!user || !leaveError) throw new Error('Users not found');

    const { data, error } = await supabase
    .from('leaves')
    .update({ ...updateLeave, user_id: user.id })
    .eq('id', leaveId)
    .select()

    if(error) throw error;
    return data;
};

export async function removeLeaves(leaveId) {

    const { error } = await supabase
    .from('leaves')
    .delete()
    .select()

    if(error) throw error;

    return error;
}