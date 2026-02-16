import { supabase } from "@/lib/supabase/supabaseClient";

export async function fetAllPositions(page = 1, limit = 10, search = '') {
    const from = (page - 1) * limit;

    let query = supabase
    .from('positions')
    .select('*', { count: 'exact'} )
    .range(from, from + limit - 1)

    if(search) query = query.ilike('title', `%${search}%`);

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

export async function createPositions(positionData) {

    const { data: { user }, error: positionError } = await supabase.auth.getUser();
    if(positionError) throw new Error('User is not authenticated');

    const { data, error } = await supabase
    .from('positions')
    .insert({ ...positionData, user_id: user.userId })
    .select()

    if(error) throw error;
    return data;
}

export async function updatePositions(positionId, updatePosition) {

    const { data: { user}, error: positionError } = await supabase.auth.getUser();
    if(positionError) throw new Error('User is not authenticated');

    const { data, error } = await supabase
    .from('positions')
    .update({ ...updatePosition, user_id: user.userId })
    .eq('id', positionId)
    .select()

    if(error) throw error;
    return data;
};

export async function removePositions(positionId) {

    const { error } = await supabase
    .from('positions')
    .delete()
    .eq('id', positionId)
    .select()

    if(error) throw error;
    return error;
}