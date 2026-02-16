import useDepartment from "@/features/department/hooks/useDepartment";
import useDebounce from "@/hooks/useDebounce";
import AppLayout from "@/components/layout/appLayout";
import ModuleLayout from "@/components/layout/moduleLayout";
import Skeleton from "@/components/ui/skeleton";
import DepartmentForm from "@/features/department/components/department-form";
import DepartmentHeader from "@/features/department/components/department-header";
import DepartmentTable from "@/features/department/components/department-table";
import DepartmentFooter from "@/features/department/components/department-footer";

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