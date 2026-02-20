export const DepartmentDefault = {
    departmentId: null,
    branchId: null,
    departmentName: ''
};

export const DepartmentFields = (branches = []) => [
    {
        type: 'select',
        name: 'branchId',
        label: 'Branch',
        options: branches.map(b => ({
            label: b.branchName,
            value: b.branchId
        }))
    }
];