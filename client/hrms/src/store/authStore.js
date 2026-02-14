import { create } from "zustand";
import * as authApi from '@/features/auth/api/authApi';

const useAuthStore = create((set) => ({
    users: [],
    user: null,
    isAuthenticated: false,
    loading: false,
    error: null,

    setLoading: (loading) => set({ loading }),
    setUser: (user) => set({ user }),
    logout: () => set({ user: null, isAuthenticated: false }),

    fetchUsers: async () => {
        set({ loading: true, error: null });
        try {
            const res = await authApi.fetchAllUsers();
            set({
                users: res.data 
            });

            return res;
        } catch (err) {
            set({ error: err.message });
            throw err;
        } finally {
            setLoading(false);
        }
    }
}))

export default useAuthStore