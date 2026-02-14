import { create } from "zustand";
import * as departmentRepo from '@/features/department/api/departmentApi';
import * as employeeRepo from '@/features/employee/api/employeeApi';
import * as branchRepo from '@/features/branch/api/branchApi';

const useDepartmentStore = create((set, get) => ({
    departments: [],
    employees: [],
    branches: [],
    loading: false,
    error: null,
    page: 1,
    limit: 10,
    search: '',
    selected: '',

    setLoading: (loading) => set({ loading }),
    setPage: (page) => set({ page }),
    setLimit: (limit) => set({ limit, page: 1 }),
    setSearch: (search) => set({ search, page: 1 }),
    setSelected: (selected) => set({ selected, page: 1 }),
    setTotalPage: (totalPage) => set({ totalPage }),

    fetchDepartments: async () => {
        set({ loading: true, error: null });
        try {
            const {page, limit, search, selected} = get()
            const [depRes, empRes, branchRes] = await Promise.all([
                departmentRepo.fetchAllDepartments(page, limit, search, selected),
                employeeRepo.fetchEmployees(),
                branchRepo.fetchAllBranch()
            ]);

            set({
                departments: depRes.data,
                employees: empRes.data,
                branches: branchRes.data,
                pagination: depRes.pagination
            });

            return depRes
        } catch (err) {
            set({ errpr: err.message });
            throw err;
        } finally {
            set({ loading: false });
        }
    },

    addDepartments: async (departmentData) => {
        set({ loading: true, error: null });
        try {
            const res = await departmentRepo.createDepartments(departmentData);

            set((state) => ({
                departments: [...state.departments, ...res]
            }))

            return res;
        } catch (err) {
            set({ error: err.message });
            throw err;
        } finally {
            set({ loading: false });
        }
    },

    editDepartments: async (departmentId, updateDepartment) => {
        set({ loading: true, error: null });
        try {
            const res = await departmentRepo.updateDepartments(departmentId, updateDepartment);

            set((state) => ({
                departments: state.departments.map(
                d => d.departmentId === departmentId ? res[0] : d )
            }));

            return res;

        } catch (err) {
            set({ error: err.message });
            throw err;
        } finally {
            set({ loading: false });
        }
    },

    deleteDepartments: async (departmentId) => {
        set({ loading: true, error: null });
        try {
            await departmentRepo.removeDepartments(departmentId);

            set((state) => ({
                departments: state.departments.map(a => a.departmentId !== departmentId )
            }));
            
        } catch (err) {
            set({ error: err.message });
            throw err;
        } finally {
            set({ loading: false });
        }
    }
}))

export default useDepartmentStore