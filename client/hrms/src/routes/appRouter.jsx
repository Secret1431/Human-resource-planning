import { BrowserRouter, Routes, Route } from "react-router-dom";
import DocumentPage from "@/modules/documents/DocumentPage";

function AppRoute() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<DocumentPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoute