import useForm from "@/shared/hooks/useForm";
import usePositionStore from "../store/positionStore";
import { PositionDefault } from "@/entities/position.entities";

function usePositionForm() {

    const { addPositions, updatePositions, removePositions } = usePositionStore();

    return useForm({
        initialState: PositionDefault,
        createAction: addPositions,
        updateAction: updatePositions,
        deleteAction: removePositions,
        idKeys: 'positionId'
    });
}

export default usePositionForm