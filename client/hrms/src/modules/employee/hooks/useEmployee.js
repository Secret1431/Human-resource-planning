import { useEffect } from "react";
import useEmployeeStore from "@/modules/employee/store/employeeStore";

function useEmployee() {

    const {
        employees, loading, page, limit,
        search, totalPage, setPage, setLimit,
        setSearch, fetchEmployee
    } = useEmployeeStore();

    useEffect(() => {
        fetchEmployee()
    }, [page, limit, search, fetchEmployee])
    
    return {
        employees, loading, page, limit,
        search, totalPage, setPage, setLimit,
        setSearch
    };
}

export default useEmployee;