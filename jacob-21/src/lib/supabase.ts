const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;

export const storageUrl = (path: string) =>
  `${supabaseUrl}/storage/v1/object/public/jacob-photos/${path}`;
