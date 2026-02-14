import useEmployeeStore from "@/store/employeeStore";

function useEmployee() {

    const {
        positions,
        addPosition,
        updatePosition,
        deletePosition
    } = useEmployeeStore();

    return {
        positions,
        addPosition,
        updatePosition,
        deletePosition
    };
}

export default useEmployee;