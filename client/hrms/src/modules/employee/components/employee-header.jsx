import Header from "@/shared/components/tables/header";
import useEmployee from "../hooks/useEmployee";

function EmployeeHeader() {

    const { search, setSearch } = useEmployee();

    return (
        <Header 
            search={search}
            setSearch={setSearch}
            button='#myModal'
            label='+ Add Employee'
        />
    )
}

export default EmployeeHeader;