import Form from "@/shared/components/ui/form";
import usePositionForm from "../hooks/usePositionForm";
import { PositionFields } from "@/entities/position.entities";

function PositionForm() {

    const {
        formData, editData, handleChange, handleSubmit,
        isOpen, closeModal
    } = usePositionForm();

    return (
        <Form 
            title={editData ? 'Update Position' : 'Add Position'}
            fields={PositionFields}
            formData={formData}
            editData={editData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            isOpen={isOpen}
            closeModal={closeModal}
        />
    )
}

export default PositionForm