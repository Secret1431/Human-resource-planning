import Footer from "@/components/tables/footer";
import useDepartment from "../hooks/useDepartment";

function DepartmentFooter() {
    const { page, limit, setLimit, setPage, totalPage } = useDepartment();

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