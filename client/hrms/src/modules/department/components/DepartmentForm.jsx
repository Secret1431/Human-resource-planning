import Form from "@/shared/components/forms/form";
import useDepartmentForm from "../hooks/useDepartmentForm";
import useBranch from "@/modules/branch/hooks/useBranch";
import { DepartmentFields } from "@/entities/department.entities";

function DepartmentForm() {
    
    const { branches } = useBranch();

    const { 
        formData, 
        editData, 
        handleSubmit, 
        handleChange, 
        isOpen, 
        closeModal 
    } = useDepartmentForm();

    return (
        <Form 
            title={editData ? 'Update Department' : 'Add Department'}
            fields={DepartmentFields( branches )}
            formData={formData}
            editData={editData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            isOpen={isOpen}
            closeModal={closeModal}
        />
    )
}

export default DepartmentForm;