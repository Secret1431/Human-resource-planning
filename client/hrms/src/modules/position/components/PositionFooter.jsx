import Footer from "@/shared/components/tables/footer";
import usePosition from "../hooks/usePosition";

function PositionFooter() {

    const {
        page, limit, totalPage, setPage,
        setLimit
    } = usePosition();

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

export default PositionFooter;