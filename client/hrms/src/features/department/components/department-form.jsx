import { Form } from '@/shared/index';
import { useDepartmentForm } from '@/features/department/hooks/useDepartmentForm';

const departmentField = [
    { type: '', name: '', label: '' }
];

function DepartmentForm() {
    const { formData, editData, handleSubmit, handleChange } = useDepartmentForm();

    return (
        <Form 
            title={editData ? 'Update Department' : 'Add Department'}
            fields={departmentField}
            formData={formData}
            editData={editData}
            onChange={handleChange}
            onSubmit={handleSubmit}
            
        />
    )
}

export default DepartmentForm;