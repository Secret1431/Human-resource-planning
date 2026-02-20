import useForm from "@/shared/hooks/useForm";
import useLeaveStore from "../store/leave.store";
import { LeaveDefault } from "@/entities/leave.entities";

function useLeaveForm() {

    const { addLeaves, updateLeaves, deleteLeaves } = useLeaveStore();

    return useForm({
        initialState: LeaveDefault,
        createAction: addLeaves,
        updateAction: updateLeaves,
        deleteAction: deleteLeaves,
        idKey: 'leaveId'
    })
}

export default useLeaveForm;