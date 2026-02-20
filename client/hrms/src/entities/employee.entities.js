export const EmployeeDefault = {
    employeeId: null,
    branchId: null,
    departmentrId: null,
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    dob: '',
    doj: '',
    employmentStatus: ''
};

export const EmployeeFields = (branches = [], departments = []) => [
    {
        type: 'select',
        name: 'branchId',
        label: 'Branch',
        options: branches.map(b => ({
            label: b.branchName,
            value: b.branchId
        }))
    },
    {
        type: 'select',
        name: 'departmentId',
        label: 'Department',
        options: departments.map(d => ({
            label: d.departmentName,
            value: d.departmentId
        }))
    },
    { type: 'text', name: 'firstname', label: 'First Name' },
    { type: 'text', name: 'lastname', label: 'Last Name' },
    { type: 'email', name: 'email', label: 'Email' },
    { type: 'text', name: 'phone', label: 'Phone' },
    { type: 'text', name: 'dob', label: 'Date Of Birth' },
    { type: 'text', name: 'doj', label: 'Date Of Joining' },
    {
        type: 'select',
        name: 'employmentStatus',
        label: 'Employment Status',
        options: [
            { label: '--select--', value: '' },
            { label: 'Active', value: 'Active' },
            { label: 'Resigned', value: 'resigned' },
            { label: 'Terminated', value: 'Terminated' },
            { label: 'On Leave', value: 'On Leave' },
        ]
    },
]