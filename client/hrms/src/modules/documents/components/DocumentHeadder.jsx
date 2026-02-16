import Header from "@/shared/components/tables/header";
import useDocument from "../hooks/useDocument";

function DocumentHeader() {

    const { state } = useDocument();
    const { search, setSearch } = state();

    return (
        <Header 
            title='Document'
            search={search}
            setSearch={setSearch}
            button='myModal'
            label='+ Add Document'
        />
    )
}

export default DocumentHeader;