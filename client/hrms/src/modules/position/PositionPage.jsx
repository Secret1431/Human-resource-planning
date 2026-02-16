import React from "react";

import usePosition from "./hooks/usePosition";
import useDebounce from "@/shared/hooks/useDebounce";

import PositionForm from "./components/PositionForm";
import PositionTable from "./components/PositionTable";
import PositionHeader from "./components/PositionHeader";
import PositionFooter from "./components/PositionFooter";

import Skeleton from "@/shared/components/ui/skeleton";
import AppLayout from "@/shared/components/layout/appLayout";
import ModuleLayout from "@/shared/components/layout/moduleLayout";

function PositionPage() {

    const { loading } = usePosition();
    const debounceLoading = useDebounce(loading, 5000);

    return (
        <AppLayout>
            <ModuleLayout
                form={PositionForm}
                header={PositionHeader}
                table={debounceLoading ? <Skeleton /> : <PositionTable />}
                footer={<PositionFooter />}
            ></ModuleLayout>
        </AppLayout>
    )
}

export default PositionPage