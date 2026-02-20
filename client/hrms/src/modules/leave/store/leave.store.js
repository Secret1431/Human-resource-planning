import { create } from 'zustand';
import * as leaveService from '@/modules/leave/services/leave.service';
import * as employeeService from '@/modules/employee/services/employeeApi';

const useLeaveStore = create((get, set) => ({
    leaves: [],
    employees: [],
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

    fetchLeave: async () => {

        set({ loading: true, error: null });

        try {   
            const { page, limit, search } = get();
            const [leaveRes, empRes] = await Promise.all([
                leaveService.getLeaves(page, limit, search),
                employeeService.fetchEmployees()
            ]);

            set({
                leaves: leaveRes.data,
                employees: empRes.data,
                pagination: leaveRes.pagination
            });

            return leaveRes;

        } catch (err) {
            set({ error: err.message });
            throw err;
        } finally {
            set({ loading: false });
        }
    },

    addLeaves: async (leaveData) => {
        
        set({ loading: true, error: null });

        try {
            const res = await leaveService.createLeaves(leaveData);

            set((state) => ({
                leaves: [...state.leaves, res.data]
            }));

            return res;

        } catch (err) {
            set({ error: err.message });
            throw err;
        } finally {
            set({ loading: false });
        }
    },

    updateLeaves: async (leaveId, updateLeave) => {

        set({ loading: true, error: null });

        try {
            const res = await leaveService.updateLeaves(leaveId, updateLeave);

            set((state) => ({
                leaves: state.leaves.map(l => l.leaveId === leaveId ? res[0] : l)
            }));

            return res;

        } catch (err) {
            set({ error: err.message });
            throw err;
        } finally {
            set({ loading: false });
        }
    },

    deleteLeave: async (leaveId) => {

        set({ loading: true, error: null });

        try {
            await leaveService.removeLeaves(leaveId);

            set((state) => ({
                leaves: state.leaves.filter(l => l.leaveId !== leaveId )
            }));

            return leaveId;
        } catch (err) {
            set({ error: err.message });
            throw err;
        } finally {
            set({ loading: false });
        }
    }
}))

export default useLeaveStore;