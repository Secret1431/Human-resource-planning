import React from "react";

function Auth({ fields, formData, onChange, onSubmit, isLogin }) {

    // Filter fields based on login/register
    const filteredFields = isLogin
        ? fields.filter(f => ["email", "password"].includes(f.name)) // only email & password
        : fields; // all fields for register

    return (
        <form onSubmit={onSubmit}>
            <div className="grid md:grid-cols-1 gap-4">
                {filteredFields.map((f, index) => (
                    <div className="flex flex-col gap-2" key={index}>
                        <label>{f.label}</label>
                        <div className="w-full border border-gray-200 py-2 px-3 focus:ring-1 focus:ring-blue-500">

                            {f.type === 'select' && (
                                <select
                                    name={f.name}
                                    value={formData?.[f.name]}
                                    onChange={onChange}
                                >
                                    <option value="">Select {f.label}</option>
                                    {f.options.map(opt => (
                                        <option key={opt.value} value={opt.value}>{opt.label}</option>
                                    ))}
                                </select>
                            )}

                            {f.type !== 'select' && (
                                <input
                                    type={f.type}
                                    name={f.name}
                                    value={formData[f.name]}
                                    onChange={onChange}
                                />
                            )}
                        </div>
                    </div>
                ))}

                {/* Submit button */}
                <button
                    type="submit"
                    className="bg-indigo-600 text-white py-2 px-4 rounded mt-4"
                >
                    {isLogin ? "Login" : "Register"}
                </button>
            </div>
        </form>
    )
}

export default Auth;