import { useMutation } from "@tanstack/react-query";
import { supabase } from "../../lib/supabase";
export interface RSVPData {
  full_name: string;
  attending: string;
  guests: number | null;
  paw_patrol_character: string | null;
  message: string | null;
}

async function submitRSVP(data: RSVPData) {
  const { error } = await supabase.from("rsvps").insert(data);

  if (error) throw new Error(error.message);
}

export function useSubmitRSVP() {
  return useMutation({
    mutationFn: submitRSVP,
  });
}
