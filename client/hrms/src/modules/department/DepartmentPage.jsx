import React from "react";

import useDepartment from "./hooks/useDepartment";
import useDebounce from "@/shared/hooks/useDebounce";

import DepartmentForm from "./components/DepartmentForm";
import DepartmentTable from "./components/DepartmentTable";
import DepartmentHeader from "./components/DepartmentHeader";
import DepartmentFooter from "./components/DepartmentFooter";

import Skeleton from "@/shared/components/ui/skeleton";
import AppLayout from "@/shared/components/layout/appLayout";
import ModuleLayout from "@/shared/components/layout/moduleLayout";

function DepartmentPage() {

    const { loading } = useDepartment();
    const debounceLoading = useDebounce(loading, 5000);

    return (
        <AppLayout>
            <ModuleLayout 
                form={DepartmentForm}
                header={DepartmentHeader}
                table={debounceLoading ? <Skeleton /> : <DepartmentTable />}
                footer={DepartmentFooter}
            />
        </AppLayout>
    )
}

export default DepartmentPage