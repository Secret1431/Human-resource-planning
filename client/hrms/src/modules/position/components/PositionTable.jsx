import Table from "@/shared/components/tables/table";
import { PERMISSION } from "@/lib/permission.config";
import usePosition from "../hooks/usePosition";

function PositionTable({ onEdit, onDelete, userRole }) {

    const { positions } = usePosition();

    const positionColumns = [
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
                            onClick={() => onDelete(row.branchId)}
                            className="bg-red-600 py-2 px-4 shadow-md rounded-lg border"
                        > Delete </button>
                    )}
                </>
            }
        }
    ];

    return ( <Table data={positions} columns={positionColumns} />)
}

export default PositionTable;