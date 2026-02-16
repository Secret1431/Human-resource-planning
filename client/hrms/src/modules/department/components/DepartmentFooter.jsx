import Footer from "@/components/tables/footer";
import useDepartment from "../hooks/useDepartment";

function DepartmentFooter() {
    
    const { state } = useDepartment();
    const { page, limit, totalPage, setPage, setLimit } = state();

    return (
        <Footer 
            page={page}
            limit={limit}
            setLimit={setLimit}
            setPage={setPage}
            totalPage={totalPage}
        />
    )
}

export default DepartmentFooter;