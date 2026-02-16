import { useState } from "react";
import { toast } from "react-toastify";

function useForm({
    initialState,
    createAction,
    updateAction,
    deleteAction,
    idKey
}) {
    const [formData, setFormData] = useState(initialState);
    const [editData, setEditData] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;

        const newValue = type === 'checkbox' ? checked : value;
        if(editData) {
            setEditData(prev => ({ ...prev, [name] : newValue }))
        } else {
            setFormData(prev => ({ ...prev, [name] : newValue }))
        }
    };

    const handleClick = (data) => {
        setEditData(data);
        setIsOpen(true);
    };

    const closeModal = () => {
        setIsOpen(false)
        setEditData(null);
        setFormData(initialState);
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const res = editData 
                ? updateAction(editData, editData[idKey])
                : createAction(data)
            const message = editData ? 'Update' : 'Create'
            toast.success(res.message || message);
        } catch (err) {
            toast.error(err.message || '');
        }
    };

    const handleDelete = async (id) => {
        if(window.confirm('Are you sure want to delete this')) {
            try {
                const res = await deleteAction(id);
                toast.success(res.message || '')
            } catch (err) {
                toast.error(err.message || '');
            }
        }
    };

    return {
        isOpen,
        formData,
        editData,
        handleChange,
        handleClick,
        handleSubmit,
        handleDelete,
        closeModal
    }
}

export default useForm;