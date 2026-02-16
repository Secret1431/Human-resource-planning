import Form from "@/components/ui/form";
import useBranchForm from "../hooks/useBranchForm";
import { BranchFields } from "@/entities/branch.entities";

function BranchForm() {

    const { formData, editData, isOpen, closeModal, handleChange, handleSubmit } = useBranchForm();

    return (
        <Form 
            title={editData ? 'Edit Branch' : 'Add Branch'}
            fields={BranchFields}
            formData={formData}
            editData={editData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            isOpen={isOpen}
            closeModal={closeModal}
        />
    )
}

export default BranchForm;