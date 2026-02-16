import { useEffect } from "react";
import usePositionStore from "../store/positionStore";

function usePosition() {

    const {
        positions, loading, page, limit,
        search, totalPage, setPage, setLimit,
        setSearch, fetchPositions
    } = usePositionStore();

    useEffect(() => {
        fetchPositions()
    }, [page, limit, search, fetchPositions]);

    return {
        positions, loading, page, limit,
        search, totalPage, setPage, setLimit,
        setSearch
    }
}

export default usePosition;