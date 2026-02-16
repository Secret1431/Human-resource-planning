import useForm from "@/shared/hooks/useForm";
import useDocumentStore from "../store/document.store";
import { DocumentDefault } from "@/entities/document.entities";

function useDocumentForm() {

    const { addDocuments, updateDocuments, removeDocuments } = useDocumentStore();

    return useForm({
        initialState: DocumentDefault,
        createAction: addDocuments,
        updateAction: updateDocuments,
        deleteAction: removeDocuments,
        idKey: 'documentId'
    });
}

export default useDocumentForm;