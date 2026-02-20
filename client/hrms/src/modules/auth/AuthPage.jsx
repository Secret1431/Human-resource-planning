import React from "react";
import Image from '../../assets/Gemini_Generated_Image_922ez8922ez8922e.png'
import useAuthForm from "./hooks/useAuthForm";
import AuthForm from "./components/AuthForm";

function AuthPage() {

    const { formData, handleChange, handleLogin, isLogin, setIsLogin } = useAuthForm();

    return (
        <div className="flex min-h-screen bg-linear-to-r from-cyan-100 to-indigo-100">
            <div className="flex-1 flex flex-col">
                <div className="flex justify-center px-3 sm:px-6 py-6 mt-2">
                    <div className="flex flex-col sm:flex-row justify-center w-full  gap-1">
                        <div className="flex-1 sm:w-1/3 bg-white/90 md:p-4 shadow-sm rounded-xl border">
                            <img 
                                src={Image}
                                alt="Images"
                                className="w-full h-96 object-cover"
                            />
                        </div>

                        <div className="flex-1 sm:w-1/3 bg-white p-3 md:p-4 shadow-sm rounded-xl border">
                            <div className="mb-4">
                                <h2 className="text-2xl font-bold text-slate-200">Welcome Back</h2>
                                <p className="text-slate-500 text-sm">Villia Corp Portal</p>
                            </div>
                            <AuthForm 
                                formData={formData}
                                onChange={handleChange}
                                onSubmit={handleLogin}
                                isLogin={isLogin}
                                onToggle={() => setIsLogin(!isLogin)}
                            />
                        </div>  
                    </div>    
                </div>    
            </div>            
        </div>
    )
}

export default AuthPage;