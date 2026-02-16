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

    // Handle input change
    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        const newValue = type === "checkbox" ? checked : value;

        if (editData) {
            setEditData(prev => ({ ...prev, [name]: newValue }));
        } else {
            setFormData(prev => ({ ...prev, [name]: newValue }));
        }
    };

    // Open modal for edit
    const handleClick = (item) => {
        if (!item) return;

        setEditData({ ...item }); // clone para safe
        setIsOpen(true);
    };

    // Open modal for create
    const handleOpen = () => {
        setEditData(null);
        setFormData(initialState);
        setIsOpen(true);
    };

    // Close modal & reset
    const closeModal = () => {
        setIsOpen(false);
        setEditData(null);
        setFormData(initialState);
    };

    // Submit handler (create or update)
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

            closeModal();
        } catch (err) {
            toast.error(err?.message || "Something went wrong");
        }
    };

    // Delete handler
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
        isOpen,
        formData,
        editData,
        handleChange,
        handleClick,
        handleOpen,
        handleSubmit,
        handleDelete,
        closeModal
    };
}

export default useForm;
