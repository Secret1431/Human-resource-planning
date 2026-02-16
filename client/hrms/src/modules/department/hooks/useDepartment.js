import { useEffect } from "react";
import useDepartmentStore from "../store/department.store";

function useDepartment() {

    const {
        departments, loading, page, limit,
        search, totalPage, setPage, setLimit,
        setSearch, fetchDepartments
    } = useDepartmentStore()

    useEffect(() => {
        fetchDepartments();
    }, [page, limit, search, fetchDepartments]);
    
    return {
        departments, loading, page, limit,
        search, totalPage, setPage, setLimit,
        setSearch
    };
}

export default useDepartment;