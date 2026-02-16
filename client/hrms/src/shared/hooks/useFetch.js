import { useEffect } from "react";

function useFetch(store, fetchKey) {

    const state = store();

    const { search, selected, setSearch, setSelected } = state();
    
    useEffect(() => {
        state[fetchKey]();
    }, [page, limit, search, fetchKey, state]);

    return { search, selected, setSearch, setSelected };
}

export default useFetch;