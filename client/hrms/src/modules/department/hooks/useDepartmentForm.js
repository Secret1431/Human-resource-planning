import { useForm } from "@/shared/index";
import useBranchStore from "@/modules/branch/store/branch.store";
import { DepartmentDefault } from "@/entities/department.entities";

function useDepartmentForm() {
    const { addBranch, updateBranch, deleteBranch } = useBranchStore();

    return useForm({
        initialState: DepartmentDefault,
        createAction: addBranch,
        updateAction: updateBranch,
        deleteAction: deleteBranch,
        idKey: 'departmentId'
    });
}

export default useDepartmentForm