import { supabase } from "@/lib/supabase/supabaseClient";

export const saveAttendance = async (data) => {
  const { error } = await supabase
    .from("attendances")
    .insert(data);

  if (error) throw error;
};

export const updateCheckout = async (attendanceId) => {
  const { error } = await supabase
    .from("attendances")
    .update({ timeOut: new Date() })
    .eq("attendanceId", Number(attendanceId)); // use PK

  if (error) throw error;
};

export const getTodayAttendance = async (employeeId, today) => {
  const { data, error } = await supabase
    .from("attendances")
    .select("*")
    .eq("employeeId", Number(employeeId)) // make sure number
    .eq("date", today)
    .maybeSingle();

  if (error) throw error;
  return data;
};