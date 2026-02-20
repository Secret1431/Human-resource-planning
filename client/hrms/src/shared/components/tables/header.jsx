import React from "react";

function Header({ title, search, setSearch, label, modalTarget}) {
    return (

        <div className="relative w-full p-2 -top-10 bg-linear-to-r from-cyan-400 to-indigo-600 shadow-lg rounded-md border border-gray-300">
            <div className="flex items-center justify-between relative text-white">

                <div className="flex-none">
                    <button
                        type="button"
                        data-bs-toggle="modal"
                        data-bs-target={modalTarget}
                        className="bg-white text-blue-500 py-2 px-3 shadow-md rounded"
                    >
                        {label}
                    </button>
                </div>

                <h3>
                    {title}
                </h3>

                <div className="flex-none">
                    <input type="search"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        placeholder="search..."
                            className="border-b bg-transparent hover:border-cyan-500 transition-colors outline-none"
                    />
                </div>
            </div>
        </div>

    )
}

export default Header;