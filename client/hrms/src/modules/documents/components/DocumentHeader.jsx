import Header from "@/shared/components/tables/header";
import useDocument from "../hooks/useDocument";

function DocumentHeader() {

    const { search, setSearch } = useDocument();

    return (
        <Header 
            title='Document'
            search={search}
            setSearch={setSearch}
            button='#myModal'
            label='+ Add Document'
        />
    )
}

export default DocumentHeader;