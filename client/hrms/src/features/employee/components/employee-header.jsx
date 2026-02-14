import { Header, useFetch } from '@/shared/index';

function EmployeeHeader() {

    const { search, setSearch } = useFetch();

    return (
        <Header 
            title='Employee Table'
            search={search}
            setSearch={setSearch}
            button='#myModal'
            label='Add Employee'
        />
    )
}

export default EmployeeHeader