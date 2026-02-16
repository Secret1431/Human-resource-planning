import Header from "@/shared/components/tables/header";
import usePosition from "../hooks/usePosition";

function PositionHeader() {

    const { search, setSearch } = usePosition();

    return (
        <Header 
            title='Position Form'
            search={search}
            setSearch={setSearch}
            button='#myModal'
            label='+ Add Position'
        />
    )
}

export default PositionHeader;