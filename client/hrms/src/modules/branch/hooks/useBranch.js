import { useEffect  } from "react";
import useBranchStore from "@/modules/branch/store/branch.store";

function useBranch() {

    const {
        branches, loading, page, limit,
        search, totalPage, setPage, setLimit,
        setSearch, fetchBranch
    } = useBranchStore();

    useEffect(() => {
        fetchBranch()
    }, [page, limit, search, fetchBranch]);

    return {
        branches, loading, page, limit,
        search, totalPage, setPage, setLimit,
        setSearch
    };
}

export default useBranch