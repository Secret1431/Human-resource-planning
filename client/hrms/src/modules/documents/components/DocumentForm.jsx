import Form from "@/shared/components/ui/form";
import useDocumentForm from "../hooks/useDocumentForm";
import { DocumentFields } from "@/entities/document.entities";

function DocumentForm() {

    const { formData, editData, handleChange, handleSubmit, closeModal } = useDocumentForm();

    return (
        <Form 
            title={editData ? 'Update Document' : 'Add Document'}
            fields={DocumentFields}
            formData={formData}
            editData={editData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            closeModal={closeModal}
        />
    )
}

export default DocumentForm;