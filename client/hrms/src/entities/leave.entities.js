export const LeaveDefault = {
    leaveId: null,
    employeeId: null,
    leaveType: '',
    startDate: '',
    endDate: '',
    totalDays: 0,
    status: ''
};

export const LeaveFields = (employees = []) => [
    {
        type: 'select',
        name: 'employeeId',
        label: 'Employee',
        options: employees.map(e => ({
            label: e.firstname,
            value: e.employeeId
        }))
    },
    { type: 'text', name: 'leaveType', label: 'Leave Type' },
    { type: 'date', name: 'startDate', label: 'Start Date' },
    { type: 'date', name: 'endDate', label: 'End Date' },
    { type: 'number', name: 'totalDays', label: 'Total Days' },
    {
        type: 'select',
        name: 'status',
        label: 'Status',
        options: [
            { label: '--select--', value: '' },
            { label: 'Pending', value: 'Pending' },
            { label: 'Approved', value: 'Approved' }
        ]
    }
]