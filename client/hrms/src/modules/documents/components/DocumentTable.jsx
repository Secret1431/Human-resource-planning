import Table from "@/shared/components/tables/table";
import useDocument from "../hooks/useDocument";
import { PERMISSION } from "@/lib/permission.config";

function DocumentTable({ onEdit, onDelete, currentUserRole }) {

    const { state } = useDocument();
    const { documents } = state();

    const columns = [
        { key: '', header: '' },
        {
            key: 'actions',
            header: 'Actions',
            render: (row) => {
                <>
                    {PERMISSION.EMPLOYEE.EDIT.includes(currentUserRole) && (
                        <button
                            onClick={() => onEdit(row)}
                            className="bg-green-600 py-2 px-4 shadow-md rounded-lg border"
                        >
                            Edit
                        </button>
                    )}

                    {PERMISSION.EMPLOYEE.DELETE.includes(currentUserRole) && (
                        <button
                            onClick={() => onDelete(row.documentId)}
                            className="bg-red-600 py-2 px-4 shadow-md rounded-lg border"
                        >
                            Delete
                        </button>
                    )}
                </>
            }
        }
    ]

    return <Table data={documents} columns={columns} />
}

export default DocumentTable;