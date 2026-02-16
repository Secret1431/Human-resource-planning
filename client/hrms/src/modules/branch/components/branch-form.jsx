import Form from "@/components/ui/form";
import useBranchForm from "../hooks/useBranchForm";

function BranchForm() {

    const { formData, editData, isOpen, closeModal, handleChange, handleSubmit } = useBranchForm();
    
    const fields = [
        { type: '', name: '', label: '' }
    ];

    return (
        <Form 
            title={editData ? 'Edit Branch' : 'Add Branch'}
            fields={fields}
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