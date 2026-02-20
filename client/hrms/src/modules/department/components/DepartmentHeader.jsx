import Header from "@/shared/components/tables/header";
import useDepartment from "../hooks/useDepartment";

function DepartmentHeader() {

    const { search, setSearch } = useDepartment();

    return (
        <Header 
            search={search}
            setSearch={setSearch}
            modalTarget='#myModal'
            label='Add Department'
        />
    )
};

export default DepartmentHeader;