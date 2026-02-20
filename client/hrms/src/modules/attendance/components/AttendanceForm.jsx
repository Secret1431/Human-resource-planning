import React, { useRef } from "react";
import Webcam from "react-webcam";
import { useAttendanceStore } from "@/modules/attendance/store/attendance.store";

function AttendanceCamera({ employeeId, branchId }) {
  const webcamRef = useRef(null);
  const { handleAttendance, loading } = useAttendanceStore();

  const capture = async () => {
    const imageSrc = webcamRef.current.getScreenshot();
    console.log(imageSrc); // pang beginner, display mo muna

    await handleAttendance(employeeId, branchId);
  };

  return (
    <div>
      <Webcam
        ref={webcamRef}
        screenshotFormat="image/jpeg"
      />

      <button onClick={capture} disabled={loading}>
        {loading ? "Processing..." : "Check In / Out"}
      </button>
    </div>
  );
}

export default AttendanceCamera