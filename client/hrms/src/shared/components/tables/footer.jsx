import React from "react";

const Footer = ({page, limit, setPage, setLimit, totalPage}) => {

    const gotoPage = (newPage) => {
        if(newPage >= 1 && newPage <= totalPage) {
            setPage(newPage)
        }
    };
    
    return (
        <div className="flex flex-col sm:flex-row justify-between items-center mt-48 p-2 bg-white shadow-md rounded-lg text-gray-700 font-medium">
            <div className="flex items-center gap-2 mb-1 sm:mb-0">
                <span >Row per page</span>
                <select
                    value={limit}
                    onChange={(e) => setLimit(Number(e.target.value))}
                    className="py-1 px-3 border rounded-md bg-white text-gray-700"
                >
                    <option value={10}>10</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                    <option value={300}>300</option>
                </select>
            </div>

            <div className="flex items-center gap-2">
                <button
                    onClick={() => gotoPage(page - 1)}
                    disabled={page===1}
                    className="p-1 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                <span>Page {page} of {totalPage}</span>

                <button
                    onClick={() => gotoPage(page + 1)}
                    disabled={page===totalPage}
                    className="p-1 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div>
        </div>
    )
}

export default Footer;