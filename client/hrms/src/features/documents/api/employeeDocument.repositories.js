import { supabase } from "../api/supabaseClient";

export async function fetchAllDocuments (page = 1, limit = 10, search = '') {
    const from = (page - 1) * limit;

    let query = supabase
    .from('documents')
    .select('*', { count: 'exact'} )
    .range(from, from + limit - 1)

    if(search) query = query.ilike('fileName', `%${search}%`);

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

export async function createDocuments(documentData) {
    const { data: { user }, error: documentError } = await supabase.auth.getUser();
    if(documentError) throw new Error('User is not authenticated');

    const { data, error } = await supabase
    .from('documents')
    .insert({ ...documentData, user_id: user.id })
    .select()

    if(error) throw error;
    return data;
};

export async function updateDocuments (documentId, updateDocument) {
    const { data: { user}, error: documentError } = await supabase.auth.getUser();
    if(documentError) throw new Error('User is not authenticated');

    const { data, error } = await supabase
    .select('documents')
    .update({ ...updateDocument, user_id: user.id })
    .eq('id', documentId)
    .select()

    if(error) throw error;
    return data;
}

export async function removeDocuments (documentId)  {

    const { error } = await supabase
    .from('documents')
    .delete()
    .eq('id', documentId)
    .select()

    if(error) throw error;
    return error;
}