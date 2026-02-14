import React from "react";
import { Table } from '@/shared/index';

export default function BrancTable({ branches, onEdit, onDelete }) {

    const columns = [
        { key: '', header: '' },
        {
            key: 'actions',
            label: 'Action',
            render: (row) => {
                <>
                    <button 
                        onClick={() => onEdit(row)}
                        className="bg-green-600 py-2 px-4 shadow-md rounded-lg border"
                        >
                            Edit
                        </button>
                    <button
                        onClick={() => onDelete(row.branchId)}
                        className="bg-red-600 py-2 px-4 shadow-md rounded-lg border"
                    >
                        Delete
                    </button>
                </>
            }
        }
    ];

    return <Table data={branches} columns={columns} />
}
