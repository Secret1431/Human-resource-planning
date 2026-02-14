export const ROLES = {
    ADMIN: 'Admin',
    HR: 'Hr',
    MANAGER: 'Manager',
    EMPLOYEE: 'Employee'
}

export const PERMISSION = {
    EMPLOYEE: {
        EDIT: [ROLES.HR, ROLES.MANAGER],
        DELETE: [ROLES.HR, ROLES.MANAGER],
        VIEW: [ROLES.ADMIN, ROLES.HR, ROLES.MANAGER]
    },
    ATTENDANCE: {
        EDIT: [ROLES.EMPLOYEE, ROLES.HR, ROLES.MANAGER],
        DELETE: [ROLES.MANAGER],
        VIEW: [ROLES.ADMIN, ROLES.EMPLOYEE, ROLES.HR, ROLES.MANAGER]
    }
}