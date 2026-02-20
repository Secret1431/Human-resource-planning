import Form from "@/shared/components/forms/form";
import useEmployeeForm from "../hooks/useEmployeeForm";
import useBranch from "@/modules/branch/hooks/useBranch";
import useDepartment from "@/modules/department/hooks/useDepartment";
import { EmployeeFields } from "@/entities/employee.entities";

function EmployeeForm() {

    const { branches } = useBranch();
    const { departments } = useDepartment();
    const {
        formData, editData, handleChange, handleSubmit,
        isOpen, closeModal
    } = useEmployeeForm();

    return (
        <Form 
            title={editData ? 'Update Employee' : 'Add Employee'}
            fields={EmployeeFields(branches, departments)}
            formData={formData}
            editData={editData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            isOpen={isOpen}
            closeModal={closeModal}
        />
    )
}

export default EmployeeForm;