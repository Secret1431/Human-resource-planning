import React from "react";
import Modal from "./modal";

function Form({title, fields, formData, editData, onSubmit, onChange }) {

    const data = editData || formData;
    
    return (
        <Modal title={title} submitText={title} onSubmit={onSubmit} >
            <form>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {fields.map((f, index) => (
                        <div key={index} className="flex flex-col gap-4">
                            <label className="font-bold text-sm text-gray-700">{f.label}</label>
                            <div className="w-full border border-gray-300 p-2 rounded-xl focus:border-cyan-500">

                                {f.type === 'select' && (
                                    <select
                                        name={f.name}
                                        value={data?.[f.name] || ''}
                                        onChange={onChange}
                                    >
                                        <option value="">select {f.label} </option>
                                        {f.options.map(opt => (
                                            <option key={opt.value} value={opt.value}>{opt.label}</option>
                                        ))}
                                    </select>
                                )}

                                {f.type === 'checkbox' || f.type === 'radio' && (
                                    <input 
                                        type={f.type}
                                        name={f.name}
                                        value={data?.[f.name] || false}
                                        onChange={onChange}
                                    />
                                )}

                                {!['select', 'checkbox', 'radio'].includes(f.type) && (
                                    <input 
                                        type={f.type}
                                        name={f.name}
                                        value={data?.[f.name] || ''}
                                        onChange={onChange}
                                    />
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </form>
        </Modal>
    )
}

export default Form;