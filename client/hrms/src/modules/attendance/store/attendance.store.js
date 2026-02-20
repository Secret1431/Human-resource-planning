import { create } from "zustand";
import {
  saveAttendance,
  updateCheckout,
  getTodayAttendance
} from "@/modules/attendance/services/attendance.service";

export const useAttendanceStore = create((set) => ({
  loading: false,

  handleAttendance: async (employeeId, branchId) => {
    try {
      set({ loading: true });

      const today = new Date().toISOString().split("T")[0];
      const now = new Date();

      const existing = await getTodayAttendance(employeeId, today);

      if (!existing) {
        await saveAttendance({
          employeeId: employeeId,
          branchId: branchId,
          date: today,
          timeIn: now,
          status: "Present"
        });

        alert("Checked In");
      } else {
        await updateCheckout(existing.attendanceId);
        alert("Checked Out");
      }

    } catch (err) {
      console.error(err);
      alert("Error");
    } finally {
      set({ loading: false });
    }
  }
}));