import { Table } from '@/shared/index';
import { useDepartment, useDepartmentForm } from '@/features/department/index';
import { useAuth } from '@/shared/index';

const departmentColumn = [
    { key: '', header: '' }
];

function DepartmentTable() {
    const { user } = useAuth();
    const { departments } = useDepartment();
    const { deleteAction, updateAction } = useDepartmentForm();

    return (
        <Table 
            data={departments}
            columns={departmentColumn}
            onEdit={updateAction}
            onDelete={deleteAction}
            hasRole={user?.role}
        />
    )
}

export default DepartmentTable