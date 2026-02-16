import Footer from "@/shared/components/tables/footer";
import useDocument from "../hooks/useDocument";

function DocumentFooter() {

    const { page, limit, totalPage, setPage, setLimit } = useDocument();

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

export default DocumentFooter;