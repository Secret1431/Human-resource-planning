import { Header } from "@/shared/index";
import useDepartment from "../hooks/useDepartment";

function DepartmentHeader() {

    const { state } = useDepartment();
    const { search, setSearch } = state();

    return (
        <Header 
            search={search}
            setSearch={setSearch}
            button='#myModal'
            label='Add Department'
        />
    )
};

export default DepartmentHeader;