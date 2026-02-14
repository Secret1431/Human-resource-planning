import { Footer } from '@/shared/index';
import { useDepartment } from '@/features/department/hooks/useDepartment';

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