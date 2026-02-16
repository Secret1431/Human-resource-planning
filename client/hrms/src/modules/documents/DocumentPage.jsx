import React from "react";

import useDocument from "./hooks/useDocument";
import useDebounce from "@/shared/hooks/useDebounce";

import DocumentForm from "./components/DocumentForm";
import DocumentTable from "./components/DocumentTable";
import DocumentHeader from "./components/DocumentHeadder";
import DocumentFooter from "./components/DocumentFooter";

import Skeleton from "@/shared/components/ui/skeleton";
import AppLayout from "@/shared/components/layout/appLayout";
import ModuleLayout from "@/shared/components/layout/moduleLayout";

function DocumentPage() {

    const { state } = useDocument();
    const { loading } = state();

    const debounceLoading = useDebounce(loading, 5000);

    return (
        <AppLayout>
            <ModuleLayout
                form={DocumentForm}
                header={DocumentHeader}
                table={debounceLoading ? <Skeleton /> : <DocumentTable />}
                footer={<DocumentFooter />}
            ></ModuleLayout>
        </AppLayout>
    )
}

export default DocumentPage;