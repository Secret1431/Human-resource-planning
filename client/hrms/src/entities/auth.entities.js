export const AuthDefault = {
    email: '',
    username: '',
    password: '',
    role: ''
};

export const AuthFields = [
    { type: 'text', name: 'email', label: 'Email' },
    { type: 'text', name: 'username', label: 'Username' },
    { type: 'text', name: 'password', label: 'Password' },
    {
        type: 'select',
        name: 'status',
        label: 'Status',
        options: [
            { label: '--select--', value: '' },
            { label: 'Employee', value: 'Employee' }
        ]
    }
]