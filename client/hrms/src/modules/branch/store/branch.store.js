import { create } from "zustand";
import * as branchApi from '@/modules/branch/store/branch.store';

const useBranchStore = create((set, get) => ({
    branches: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10,
    search: '',
    selected: '',
    pagination: { total: 1, totalPage: 1 },

    setLoading: (loading) => set({ loading }),
    setPage: (page) => set({ page }),
    setLimit: (limit) => set({ limit, page: 1 }),
    setSearch: (search) => set({ search, page: 1 }),
    setSelected: (selected) => set({ selected, page: 1 }),
    setTotalPage: (totalPage) => set({ totalPage }),

    fetchBranch: async () => {
        set({ loading: true, error: null });
        try {
            const {page, limit, search, selected} = get();
            const res = await branchApi.fetchAllBranch(page, limit, search, selected);

            set({
                branches: res.data,
                pagination: res.pagination
            });

            return res;
        } catch (err) {
            set({ error: err?.message });
            throw err;
        } finally {
            set({ loading: false })
        }
    },

    addBranch: async (branchData) => {
        set({ loading: true, error: null });
        try {
            const res = await branchApi.createBranch(branchData);

            set((state) => ({
                branches: [ ...state.branches, ...res]
            }));

            return res;
        } catch (err) {
            set({ error: err.message });
            throw err;
        } finally {
            set({ loading: false });
        }
    },

    updateBranch: async (branchId, updateBranch) => {
        set({ loading: true, error: null });
        try {
            const res = await branchApi.updateBranch(branchApi, updateBranch);
            
            set((state) => ({
                branches: state.branches.map(b => b.branchApi === branchId ? res[0] : b)
            }))

            return res;
        } catch (err) {
            set({ error: err.message });
            throw err;
        } finally {
            set({ loading: false })
        }
    },

    deleteBranch: async (branchId) => {
        set({ loading: true, error: null });
        try {
            await branchApi.removeBranch(branchApi);

            set((state) => ({
                branches: state.branches.filter(b => b.branchId !== branchId)
            }))
        } catch (err) {
            set({ error: err.message });
            throw err;
        } finally {
            set({ loading: false })
        }
    }
    
}))

export default useBranchStore