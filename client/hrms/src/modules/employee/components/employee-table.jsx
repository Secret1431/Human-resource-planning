import { Table } from '@/shared/index';
import { useEmployee, useEmployeeForm } from '@/features/employee/hooks/employee';
import { useAuth } from '@/shared/index';

const employeeColumns = [
    { key: '', header: '' }
];

function EmployeeTable() {

    const { user } = useAuth();
    const { employees } = useEmployee();
    const { handleDelete, handleClick } = useEmployeeForm();

    return (
        <Table 
            data={employees}
            columns={employeeColumns}
            onEdit={handleClick}
            onDelete={handleDelete}
            hasRole={user?.role}
        />
    )
}

export default EmployeeTable