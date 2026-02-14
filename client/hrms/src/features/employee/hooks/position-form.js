import { useForm } from '@/shared/index';
import useEmployeeStore from '@/store/employeeStore';

function usePositionForm() {

    const { addEmployee, updateEmployee, deleteEmployee } = useEmployeeStore();
    
    return useForm({
        createAction: addEmployee,
        updateAction: updateEmployee,
        deleteAction: deleteEmployee,
        idKey: 'employeeId'
    });
    
}

export default usePositionForm;