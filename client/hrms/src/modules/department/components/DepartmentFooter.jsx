import Footer from "@/shared/components/tables/footer";
import useDepartment from "../hooks/useDepartment";

function DepartmentFooter() {
    
    const { page, limit, totalPage, setPage, setLimit } = useDepartment();

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