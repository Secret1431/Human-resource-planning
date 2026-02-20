import React from "react";

import useLeave from "./hooks/useLeave";
import useDebounce from "@/shared/hooks/useDebounce";

import LeaveForm from "./components/LeaveForm";
import LeaveTable from "./components/LeaveTable";
import LeaveHeader from "./components/LeaveHeader";
import LeaveFooter from "./components/LeaveFooter";

import Skeleton from "@/shared/components/ui/skeleton";
import AppLayout from "@/shared/components/layout/appLayout";
import ModuleLayout from "@/shared/components/layout/moduleLayout";

function LeavePage() {

    const { loading } = useLeave();
    const debounceLoading = useDebounce(loading, 5000);

    return (
        <AppLayout>
            <ModuleLayout
                form={<LeaveForm />}
                header={<LeaveHeader />}
                table={debounceLoading ? <Skeleton /> : <LeaveTable />}
                footer={<LeaveFooter />}
            ></ModuleLayout>
        </AppLayout>
    )
}

export default LeavePage;