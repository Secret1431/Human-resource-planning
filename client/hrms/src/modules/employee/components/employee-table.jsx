import Table from "@/shared/components/tables/table";
import useEmployee from "../hooks/useEmployee";
import { PERMISSION } from "@/lib/permission.config";

function EmployeeTable({ onEdit, onDelete, userRole }) {

    const { employees } = useEmployee();

    const employeeColumns = [
        { key: '', header: '' },
        {
            key: 'actions',
            header: 'Actions',
            render: (row) => {
                <>
                    {PERMISSION.EMPLOYEE.EDIT.includes(userRole) && (
                        <button
                            onClick={() => onEdit(row)}
                            className="bg-green-600 py-2 px-4 shadow-md rounded-lg border"
                        > Edit </button>
                    )}

                    {PERMISSION.EMPLOYEE.DELETE.includes(userRole) && (
                        <button
                            onClick={() => onDelete(row.employeeId)}
                            className="bg-red-600 py-2 px-4 shadow-md rounded-lg border"
                        > Delete </button>
                    )}
                </>
            }
        }
    ];

    return ( <Table data={employees} columns={employeeColumns} />)
}

export default EmployeeTable