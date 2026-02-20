import { useEffect } from "react";
import useLeaveStore from "../store/leave.store";

function useLeave() {

    const {
        leaves, loading, page, limit,
        search, totalPage, setPage, setLimit,
        setSearch, fetchLeaves
    } = useLeaveStore();

    useEffect(() => {
        fetchLeaves()
    }, [page, limit, search, fetchLeaves]);

    return {
        leaves, loading, page, limit,
        search, totalPage, setPage, setLimit,
        setSearch
    };
}

export default useLeave;