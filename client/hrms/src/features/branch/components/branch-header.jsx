import Header from '../../../shared/components/tables/header';
import useBranch from '../hooks/useBranch';

function BranchHeader() {
    const {search, setSearch} = useBranch();
    return (
        <Header 
            title='Branch'
            button='#myModal'
            label='Add branch'
            search={search}
            setSearch={setSearch}
        />
    )
}

export default BranchHeader;