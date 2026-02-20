import React from "react";

import AttendanceCamera from "./components/AttendanceForm";

import AppLayout from "@/shared/components/layout/appLayout";
import ModuleLayout from "@/shared/components/layout/moduleLayout";

function AttendancePage() {
  // Mock data for testing
  const employee = { id: 1 }; 
  const branch = { id: 1 };

  return (
    <AppLayout>
      <ModuleLayout
        form={<AttendanceCamera employeeId={employee.id} branchId={branch.id} />}
      ></ModuleLayout>
    </AppLayout>
  );
}

export default AttendancePage