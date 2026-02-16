import React from "react";

import useEmployee from "./hooks/useEmployee";
import useDebounce from "@/shared/hooks/useDebounce";

import EmployeeForm from "./components/employee-form";
import EmployeeTable from "./components/employee-table";
import EmployeeHeader from "./components/employee-header";
import EmployeeFooter from "./components/employee-footer";

import Skeleton from "@/shared/components/ui/skeleton";
import AppLayout from "@/shared/components/layout/appLayout";
import ModuleLayout from "@/shared/components/layout/moduleLayout";

function EmployeePage() {

    const { loading } = useEmployee();
    const debounceLoading = useDebounce(loading, 5000);

    return (
        <AppLayout>
            <ModuleLayout
                form={EmployeeForm}
                header={EmployeeHeader}
                table={debounceLoading ? <Skeleton /> : <EmployeeTable />}
                footer={<EmployeeFooter />}
            ></ModuleLayout>
        </AppLayout>
    )
}

export default EmployeePage;