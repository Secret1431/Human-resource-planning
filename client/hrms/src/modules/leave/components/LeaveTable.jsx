import Table from "@/shared/components/tables/table";
import useLeave from "../hooks/useLeave";
import { PERMISSION } from "@/lib/permission.config";

function LeaveTable({ onEdit, onDelete, userRole }) {

    const { leaves } = useLeave();

    const leaveColumns = [
        { key: '', header: '' },
        {
            key: 'actions',
            header: 'Action',
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
                            onClick={() => onDelete(row.leaveId)}
                            className="bg-red-600 py-2 px-4 shadow-md rounded-lg border"
                        > Delete </button>
                    )}
                </>
            }
        }
    ];

    return ( <Table data={leaves} columns={leaveColumns} />)
}

export default LeaveTable;