import useForm from "@/hooks/useForm";
import useBranchStore from "@/modules/branch/store/branch.store";
import { BranchDefault } from "@/entities/branch.entities";

function useBranchForm() {
    const { addbranch, updateBranch, deleteBranch } = useBranchStore();

    return useForm({
        initialState: BranchDefault,
        createAction: addbranch,
        updateAction: updateBranch,
        deleteAction: deleteBranch,
        idKey: 'branchId'
    })
}

export default useBranchForm;