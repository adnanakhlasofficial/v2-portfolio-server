export const createSlug = (input: string): string => {
  const baseSlug = input
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, "-")
    .replace(/^-+|-+$/g, "");

  const timestamp = Date.now().toString(36); // base36 timestamp
  const randomId = Math.random().toString(36).substring(2, 8); // 6-char random string

  return `${baseSlug}-${timestamp}-${randomId}`;
};
