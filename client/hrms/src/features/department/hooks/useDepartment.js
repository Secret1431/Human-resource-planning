import { useEffect } from "react";
import useDepartStore from '../../../store/departmentStore';

function useDepartment() {
    const { 
        loading,
        page,
        limit,
        search,
        setPage,
        setLimit,
        setSearch,
        totalPage,
        fetchAllDepartments,
        addDepartments,
        editDepartments,
        deleteDepartments
    } = useDepartStore();

    useEffect(() => {
        fetchAllDepartments();
    }, [page, limit, search]);

    return {
        loading,
        page,
        limit,
        search,
        setPage,
        setLimit,
        setSearch,
        totalPage,
        addDepartments,
        editDepartments,
        deleteDepartments
    };
}

export default useDepartment;