import { BrowserRouter, Routes, Route } from "react-router-dom";
import BranchPage from "@/features/branch/pages/brand-page";

function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<BranchPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute