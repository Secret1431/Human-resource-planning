import React from "react";

import useBranch from "./hooks/useBranch";
import useDebounce from "@/shared/hooks/useDebounce";

import BranchForm from "./components/BranchForm";
import BranchTable from "./components/BranchTable";
import BranchHeader from "./components/BranchHeader";
import BranchFooter from "./components/BranchFooter";

import Skeleton from "@/shared/components/ui/skeleton";
import AppLayout from "@/shared/components/layout/appLayout";
import ModuleLayout from "@/shared/components/layout/moduleLayout";

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