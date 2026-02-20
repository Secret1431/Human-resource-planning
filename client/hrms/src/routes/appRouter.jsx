import { BrowserRouter, Routes, Route } from "react-router-dom";
import BranchPage from "@/modules/branch/BranchPage";
// import AttendancePage from "@/modules/attendance/AttendancePage";
import AuthPage from "@/modules/auth/AuthPage";
import DepartmentPage from "@/modules/department/DepartmentPage";
import EmployeePage from "@/modules/employee/employee-page";
// import DocumentPage from "@/modules/documents/DocumentPage";

function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/branch" element={<BranchPage />} />
                <Route path="/" element={<AuthPage />} />
                <Route path="/department" element={<DepartmentPage />} />
                <Route path="/employee" element={<EmployeePage />} /> 
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute