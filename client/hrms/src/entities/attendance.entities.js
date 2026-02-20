export const AttendanceDefault = {
    attendanceId: null,
    employeeId: null,
    branchId: null,
    date: '',
    checkIn: '',
    checkOut: '',
    status: ''
};

export const AttendanceFields = (employees = [], branches = []) => [
    {
        type: 'select',
        name: 'employeeId',
        label: 'Employee',
        options: employees.map(e => ({
            label: e.firstname,
            value: e.employeeId
        }))
    },
    {
        type: 'select',
        name: 'brancheId',
        label: 'Branch',
        options: branches.map(b => ({
            label: b.firstname,
            value: b.employeeId
        }))
    },
    { type: 'date', name: 'date', label: 'Date' },
    { type: 'time', name: 'timeIn', label: 'Time In' },
    { type: 'date', name: 'timeOut', label: 'Time Out' },
    {
        type: 'select',
        name: 'status',
        label: 'Status',
        options: [
            { label: '--select--', value: '' },
            { label: 'Present', value: 'Present' },
            { label: 'Absent', value: 'Absent' },
            { label: 'Leave', value: 'Leave' },
            { label: 'Half Day', value: 'Half Day' },
        ]
    }
]