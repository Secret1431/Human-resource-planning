import Form from "@/shared/components/ui/form";
import useLeaveForm from "../hooks/useLeaveForm";
import { LeaveField } from "@/entities/leave.entities";

function LeaveForm() {

    const {
        formData, editData, handleSubmit, handleChange,
        isOpen, closeModal
    } = useLeaveForm();
    
    return (
        <Form  
            title={editData ? 'Update Leave' : 'Add Leave'}
            fields={LeaveField}
            formData={formData}
            editData={editData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            isOpen={isOpen}
            closeModal={closeModal}
        />
    )
}

export default LeaveForm;