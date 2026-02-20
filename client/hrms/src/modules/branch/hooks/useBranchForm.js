import useForm from "@/shared/hooks/useForm";
import useBranchStore from "@/modules/branch/store/branch.store";
import { BranchDefault } from "@/entities/branch.entities";

function useBranchForm() {
    const { addBranch, updateBranch, deleteBranch } = useBranchStore();

    console.log("Check if addBranch exists:", addBranch);

    return useForm({
        initialState: BranchDefault,
        createAction: addBranch,
        updateAction: updateBranch,
        deleteAction: deleteBranch,
        idKey: 'branchId',
        
    })
}

export default useBranchForm;