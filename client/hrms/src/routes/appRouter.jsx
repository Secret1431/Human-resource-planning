import { BrowserRouter, Routes, Route } from "react-router-dom";
// import BranchPage from "@/modules/branch/BranchPage";
import AttendancePage from "@/modules/attendance/AttendancePage";
// import DepartmentPage from "@/modules/department/DepartmentPage";
// import EmployeePage from "@/modules/employee/employee-page";
// import DocumentPage from "@/modules/documents/DocumentPage";

function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AttendancePage />} />
                {/* <Route path="/" element={<EmployeePage />} />
                <Route path="/" element={<DepartmentPage />} />
                <Route path="/" element={<DocumentPage />} /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute