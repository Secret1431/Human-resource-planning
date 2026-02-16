import useForm from '@/shared/hooks/useForm';
import useEmployeeStore from '@/modules/employee/store/employeeStore';
import { EmployeeDefault } from '@/entities/employee.entities';

function useEmployeeForm() {

    const { addEmployee, updateEmployee, deleteEmployee } = useEmployeeStore();
    
    return useForm({
        initialState: EmployeeDefault,
        createAction: addEmployee,
        updateAction: updateEmployee,
        deleteAction: deleteEmployee,
        idKey: 'employeeId'
    });
    
}

export default useEmployeeForm;