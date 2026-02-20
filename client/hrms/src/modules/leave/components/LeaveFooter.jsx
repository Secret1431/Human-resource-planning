import Footer from "@/shared/components/tables/footer";
import useLeave from "../hooks/useLeave";

function LeaveFooter() {

    const { page, limit, setPage, setLimit, totalPage } = useLeave();

    return (
        <Footer 
            page={page}
            limit={limit}
            setPage={setPage}
            setLimit={setLimit}
            totalPage={totalPage}
        />
    )
}

export default LeaveFooter;