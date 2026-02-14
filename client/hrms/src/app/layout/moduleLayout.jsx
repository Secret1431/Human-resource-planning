function ModuleLayout({ form, header, table, footer, loading }) {
    return (
        <div className="flex flex-col lg:flex-row items-center w-full max-w-7xl gap-6">
            {form}
            <div className="flex-1 sm:w-1/3 bg-white p-6 sm:p-6 shadow-md rounded-xl border">
                {header}
                {loading}
                {table}
                {footer}
            </div>
        </div>
    )
}

export default ModuleLayout;