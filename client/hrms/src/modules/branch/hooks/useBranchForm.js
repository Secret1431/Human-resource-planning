import useForm from "@/hooks/useForm";
import useBranchStore from "@/modules/branch/store/branchStore";
import { Branch } from "@/entities/branch.entities";

function useBranchForm() {
    const { addbranch, updateBranch, deleteBranch } = useBranchStore();

    return useForm({
        initialState: Branch,
        createAction: addbranch,
        updateAction: updateBranch,
        deleteAction: deleteBranch,
        idKey: 'branchId'
    })
}

export default useBranchForm;