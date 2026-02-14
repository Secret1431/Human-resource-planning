import { useForm } from "@/shared/index";
import useBranchStore from "@/store/branchStore";
import { Department } from "@/entities/department.entities";

function useDepartmentForm() {
    const { addBranch, updateBranch, deleteBranch } = useBranchStore();

    return useForm({
        initialState: Department,
        createAction: addBranch,
        updateAction: updateBranch,
        deleteAction: deleteBranch,
        idKey: 'departmentId'
    });
}

export default useDepartmentForm