import useBranch from "@/features/branch/hooks/useBranch";
import useDebounce from "@/hooks/useDebounce";
import BranchForm from "@/features/branch/components/branch-form";
import BranchHeader from "@/features/branch/components/branch-header";
import BranchTable from "@/features/branch/components/branch-table";
import BranchFooter from "@/features/branch/components/branch-footer";

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