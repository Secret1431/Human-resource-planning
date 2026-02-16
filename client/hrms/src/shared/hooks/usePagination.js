import React from "react";

function usePagination(store) {

    const state = store();
    const { page, limit, totalPage, setPage, setLimit } = state();

    return { page, limit, totalPage, setPage, setLimit }
}

export default usePagination;