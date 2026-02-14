import { Header } from "@/shared/index";
import { useFetch } from '@/shared/index';

function DepartmentHeader() {

    const { search, setSearch } = useFetch();

    return (
        <Header 
            search={search}
            setSearch={setSearch}
            button='#myModal'
            label='Add Department'
        />
    )
};

export default DepartmentHeader;