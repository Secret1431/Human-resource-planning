import Auth from "@/shared/components/forms/authForm";
import { AuthFields } from "@/entities/auth.entities";

function AuthForm({ formData, onChange, onSubmit, isLogin, onToggle }) {
    return (
        <div>
            <Auth
                fields={AuthFields}
                formData={formData}
                onChange={onChange}
                onSubmit={onSubmit}
                isLogin={isLogin} // ✅ pass here
            />

            <div className="text-center">
                <a
                onClick={onToggle}
                className=""
            >
                {isLogin ? "Switch to Register" : "Switch to Login"}
            </a>
            </div>
            
        </div>
    )
}

export default AuthForm;