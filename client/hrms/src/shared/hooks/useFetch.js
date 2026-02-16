import { useEffect } from "react";

function useFetch(store, fetchKey, deps = []) {

    const state = store();

    const { search, selected, setSearch, setSelected } = state();
    
    useEffect(() => {
        state[fetchKey]();
    }, [fetchKey, state, ...deps]);

    return { search, selected, setSearch, setSelected };
}

export default useFetch;