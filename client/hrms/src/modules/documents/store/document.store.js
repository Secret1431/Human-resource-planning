import { create } from "zustand";
import * as employeeRepo from '@/features/employee/employeeApi';
import * as documentRepo from '@/features/documents/employeeDocument.repositories';

const useDocumentStore = create((set, get) => ({
    employees: [],
    documents: [],
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

    fetchDocuments: async () => {
        set({ loading: true, error: null });

        try {
            const {page, limit, search, selected} = get()
            const [docRes, empRes] = await Promise.all([
                documentRepo.fetchAllDocuments(page, limit, search, selected),
                employeeRepo.fetchEmployees(),
            ]);

            set({
                documents: docRes.data,
                employees: empRes.data,
                pagination: empRes.pagination
            });

            return docRes;

        } catch (err) {
            set({ errpr: err.message });
            throw err;
        } finally {
            set({ loading: false });
        }
    },

    addDocuments: async (documentData) => {
        set({ loading: true, error: null });

        try {
            const res = await documentRepo.createDocuments(documentData);

            set((state) => ({
                documents: [ ...state.documents, ...res]
            }))

            return res;

        } catch (err) {
            set({ error: err.message });
            throw err;
        } finally {
            set({ loading: false });
        }
    },

    editDocuments: async (documentId, updateDocument) => {
        set({ loading: true, error: null });

        try {
            const res = await documentRepo.updateDocuments(documentId, updateDocument);

            set((state) => ({
                documents: state.documents.map(d => d.employeeId === employeeId ? res[0] : d)
            }));

            return res;

        } catch (err) {
            set({ error: err.message });
            throw err;
        } finally {
            set({ loading: false });
        }
    },

    deleteDocuments: async (documentId) => {
        set({ loading: true, error: null });

        try {
            await documentRepo.removeDocuments(documentId);

            set((state) => ({
                documents: state.documents.map(a => a.documentId !== documentId )
            }));
            
        } catch (err) {
            set({ error: err.message });
            throw err;
        } finally {
            set({ loading: false });
        }
    }
}))

export default useDocumentStore