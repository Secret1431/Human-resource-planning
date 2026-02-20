import Table from "@/shared/components/tables/table";
import useDepartment from "../hooks/useDepartment";

function DepartmentTable({ onEdit, onDelete }) {

    const { departments } = useDepartment();
    
    const columns = [
        { key: '', header: '' },
        {
            key: '',
            header: '',
            label: 'Actions',
            render: (row) => {
                <>
                    <button
                        onClick={() => onEdit(row)}
                        className="py-2 px-4 bg-green-600 shadow-md rounded-lg"
                    >
                        Edit
                    </button>

                    <button
                        onClick={() => onDelete(row.departmentId)}
                        className="py-2 px-4 bg-red-600 shadow-md rounded-lg"
                    >
                        Delete
                    </button>
                </>
            }
        }
    ];

    return <Table data={departments} columns={columns} />
}

export default DepartmentTable;