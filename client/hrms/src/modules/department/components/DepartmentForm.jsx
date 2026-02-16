import Form from "@/components/ui/form";
import useDepartmentForm from "../hooks/useDepartmentForm";
import { DepartmentFields } from "@/entities/department.entities";

function DepartmentForm() {
    
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
            fields={DepartmentFields}
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