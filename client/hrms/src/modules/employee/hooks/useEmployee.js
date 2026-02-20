import { useEffect } from "react";
import useEmployeeStore from "@/modules/employee/store/employeeStore";

function useEmployee() {

    const {
        employees, loading, page, limit,
        search, totalPage, setPage, setLimit,
        setSearch, fetchEmployees
    } = useEmployeeStore();

    useEffect(() => {
        fetchEmployees()
    }, [page, limit, search, fetchEmployees])
    
    return {
        employees, loading, page, limit,
        search, totalPage, setPage, setLimit,
        setSearch
    };
}

export default useEmployee;