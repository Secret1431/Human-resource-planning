import Footer from '@/shared/components/tables/footer';
import useBranch from "../hooks/useBranch";

function BranchFooter() {
    const {page, limit, setPage, setLimit, totalPage} = useBranch();

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

export default BranchFooter;