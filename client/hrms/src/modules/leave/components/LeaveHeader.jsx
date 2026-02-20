import Header from "@/shared/components/tables/header";
import useLeave from "../hooks/useLeave";

function LeaveHeader() {

    const { search, setSearch } = useLeave();

    return (
        <Header 
            search={search}
            setSearch={setSearch}
            button='#myModal'
            label='Add Leave'
        />
    )
}

export default LeaveHeader;