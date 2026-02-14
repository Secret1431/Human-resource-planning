import React from "react";

function Table({ columns, data }) {
    return (
        <table className="w-full text-center text-gray-700 font-semibold">
            <thead className="bg-gray-50">
                <tr className="border-b border-gray-200">
                    <th className="py-2 px-4"> <input type='checkbox' /> </th>
                    {columns.map(col => (
                        <th key={col.key} className="py-2 px-4 text-sm uppercase">{col.header}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {data.length > 0 ? (
                    data.map((row, idx) => (
                        <tr key={idx} className="border-b border-gray-200">
                            {columns.map(col => (
                                <td key={col.key} className="py-2 px-4 text-sm uppercase">
                                    {col.render ? col.render(row): row[col.key]}
                                </td>
                            ))}
                        </tr>
                    ))
                ): (
                    <tr>
                        <td colSpan={columns.length + 1}>No data available</td>
                    </tr>
                )}
            </tbody>
        </table>
    )
}

export default Table;