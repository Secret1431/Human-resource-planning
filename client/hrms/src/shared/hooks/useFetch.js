import { useEffect } from "react";

function useFetch(store, fetchKey) {

    const state = store();

    const {
        page,
        limit,
        search,
        selected,
        totalPage,
        setPage,
        setLimit,
        setSearch,
        setSelected
     } = state();
    
    useEffect(() => {
        state[fetchKey]();
    }, [page, limit, search, fetchKey, state]);


    return {
        page,
        limit,
        search,
        selected,
        totalPage,
        setPage,
        setLimit,
        setSearch,
        setSelected
    };
}

export default useFetch;