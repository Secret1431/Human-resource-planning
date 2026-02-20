import { loginUser, registerUsers } from "@/lib/supabase/auth.helpers";
import { useNavigate } from "react-router-dom";
import { AuthDefault } from "@/entities/auth.entities";
import { ROLES } from "@/lib/permission.config";
import { toast } from "react-toastify";
import { useState } from "react";

function useAuthForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState(AuthDefault);
    const [isLogin, setIsLogin] = useState(true);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleLogin = async (e) => {
        e.preventDefault(); // ✅ Prevent form reload

        try {
            let res;

            if (isLogin) {
                res = await loginUser(formData);
            } else {
                res = await registerUsers(formData);
                toast.success(res.message || "");
                setIsLogin(true);
                return;
            }

            const user = res.user;
            if (!user) throw new Error("No users authenticated");

            const role = ROLES.EMPLOYEE;

            if (["Hr", "Manager", "Admin"].includes(role)) {
                navigate("/branch");
            } else {
                navigate("/404");
            }
        } catch (err) {
            toast.error(err.message);
        }
    };

    return { formData, handleChange, handleLogin, isLogin, setIsLogin }; // ✅ include formData
}

export default useAuthForm;