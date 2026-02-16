import { create } from "zustand";
import * as positionRepo from '@/features/position/positionApi';

const usePositionStore = create((set, get) => ({
    positions: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10,
    search: '',
    total: 1,
    totalPage: 1,

    setPage: (page) => set({ page }),
    setLimit: (limit) => set({ limit, page: 1 }),
    setSearch: (search) => set({ search, page: 1 }),
    setTotalPage: (totalPage) => set({ totalPage }),

    fetchPositions: async () => {
        set({ loading: true, error: null });

        try {
            const {page, limit, search} = get();
            const res = await positionRepo.fetAllPositions(page, limit, search);

            set({
                positions: res.data,
                pagination: res.pagination
            });

            return res;
            
        } catch (err) {
            set({ error: err.message });
            throw err;
        } finally {
            set({ loading: false });
        }
    },

    addPosition: async (positionData) => {
        set({ loading: true, error: null });

        try {
            const res = await positionRepo.createPositions(positionData);

            set((state) => ({
                positions: [...state.positions, ...res]
            }));

            return res;

        } catch (err) {
            set({ error: err.message });
            throw err;
        } finally {
            set({ loading: false });
        }
    },

    editPosition: async (positionId, updatePosition) => {
        set({ loading: true, error: null });

        try {
            const res = await positionRepo.updatePositions(positionId, updatePosition);

            set((state) => ({
                positions: state.positions.map(
                    p => p.positionId === positionId ? res[0] : p
                )
            }))

            return res;

        } catch (err) {
            set({ error: err.message });
            throw err;
        } finally {
            set({ loading: false });
        }
    },

    deletePosition: async (positionId) => {
        set({ loading: true, error: null });

        try {
            await positionRepo.removePositions(positionId);

            set((state) => ({
                positions: state.positions.filter(p => p.positionId !== positionId)
            }));

        } catch (err) {
            set({ error: err.message });
            throw err;
        } finally {
            set({ loading: false });
        }
    }
}))

export default usePositionStore;