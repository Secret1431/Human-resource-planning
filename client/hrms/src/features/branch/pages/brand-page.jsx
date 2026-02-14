import { useBranch } from '@/features/branch/index';
import { useDebounce } from '@/shared/index';
import { BranchForm, BranchHeader, BranchTable, BranchFooter } from '@/features/branch/index';
import { AppLayout, ModuleLayout, Skeleton } from '@/shared/index';

function BranchPage() {
    const { loading } = useBranch();
    const debounceLoading = useDebounce(loading, 5000);

    return (
        <AppLayout>
            <ModuleLayout 
                form={<BranchForm />}
                header={<BranchHeader />}
                table={debounceLoading ? <Skeleton /> : <BranchTable />}
                footer={<BranchFooter />}
            />
        </AppLayout>
    )
}

export default BranchPage