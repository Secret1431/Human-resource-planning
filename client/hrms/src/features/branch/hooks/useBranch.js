import useBranchStore from "@/store/branchStore";

function useBranch() {
    const { loading, fetchBranch, addBranch, updateBranch, removeBranch } = useBranchStore();

    return { loading, fetchBranch, addBranch, updateBranch, removeBranch };
}

export default useBranch