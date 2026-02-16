import { useEffect } from "react";
import useDocumentStore from "../store/document.store";

function useDocument() {

    const {
        documents, loading, page, limit,
        search, totalPage, setPage, setLimit,
        setSearch, fetchDocuments 
    } = useDocument();

    useEffect(() => {
        fetchDocuments();
    }, [page, limit, search, fetchDocuments]);

    return {
       documents, loading, page, limit, 
       search, totalPage, setPage, setLimit, 
       setSearch
    };
}

export default useDocument;