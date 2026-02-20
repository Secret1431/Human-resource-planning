import { create } from "zustand";
import * as employeeRepo from '@/modules/employee/services/employeeApi';
import * as departmentRepo from '@/modules/department/services/department.service';
import * as branchRepo from '@/modules/branch/services/branch.service';

const useEmployeeStore = create((set, get) => ({
    employees: [],
    departments: [],
    positions: [],
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

    fetchEmployees: async () => {
        set({ loading: true, error: null });
        try {
            const {page, limit, search, selected} = get()
            const [empRes, depRes, branchRes] = await Promise.all([
                employeeRepo.fetchEmployees(page, limit, search, selected),
                departmentRepo.fetchAllDepartments(),
                branchRepo.getBranch()
            ]);

            set({
                employees: empRes.data,
                departments: depRes.data,
                branches: branchRes,
                pagination: empRes.pagination
            });

            return depRes
        } catch (err) {
            set({ errpr: err.message });
            throw err;
        } finally {
            set({ loading: false });
        }
    },

    addEmployees: async (employeeData) => {
        set({ loading: true, error: null });
        try {
            const res = await employeeRepo.createEmployees(employeeData);

            set((state) => ({
                employees: [ ...state.branches, ...res]
            }))

            return res;
        } catch (err) {
            set({ error: err.message });
            throw err;
        } finally {
            set({ loading: false });
        }
    },

    editEmployees: async (employeeId, updateEmployee) => {
        set({ loading: true, error: null });
        try {
            const res = await employeeRepo.updateEmployees(employeeId, updateEmployee);

            set((state) => ({
                employees: state.employees.map(a => a.employeeId === employeeId ? res[0] : a)
            }));

            return res;

        } catch (err) {
            set({ error: err.message });
            throw err;
        } finally {
            set({ loading: false });
        }
    },

    deleteEmployees: async (employeeId) => {
        set({ loading: true, error: null });
        try {
            await employeeRepo.removeDepartments(employeeId);

            set((state) => ({
                employees: state.employees.map(a => a.employeeId !== employeeId )
            }));
            
        } catch (err) {
            set({ error: err.message });
            throw err;
        } finally {
            set({ loading: false });
        }
    }
}))

export default useEmployeeStore