import { useState } from "react";
import { Modal } from "bootstrap";
import { toast } from "react-toastify";

function useForm({
    initialState,
    createAction,
    updateAction,
    deleteAction,
    idKey,
}) {
    const [formData, setFormData] = useState(initialState);
    const [editData, setEditData] = useState(null);

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        const newValue = type === "checkbox" ? checked : value;

        if (editData) {
            setEditData(prev => ({ ...prev, [name]: newValue }));
        } else {
            setFormData(prev => ({ ...prev, [name]: newValue }));
        }
    };

    const handleClick = (item) => {
        setEditData(item);
        openModal();
    };

    const openModal = () => {
        const modalElement = document.getElementById('myModal');
        const modal = Modal.getOrCreateInstance(modalElement);
        modal.show();
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const res = editData
                ? await updateAction(editData[idKey], editData)
                : await createAction(formData);

            toast.success(
                res?.message ||
                (editData ? "Updated successfully" : "Created successfully")
            );
        } catch (err) {
            toast.error(err?.message || "Something went wrong");
        }
    };

    const handleDelete = async (id) => {
        if (!id) return;

        if (window.confirm("Are you sure you want to delete this?")) {
            try {
                const res = await deleteAction(id);

                toast.success(res?.message || "Deleted successfully");
            } catch (err) {
                toast.error(err?.message || "Delete failed");
            }
        }
    };

    return {
        formData,
        editData,
        handleChange,
        handleClick,
        handleSubmit,
        handleDelete,
    };
}

export default useForm;
