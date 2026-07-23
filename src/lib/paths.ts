// Resolves a root-relative path (e.g. "/data/foo.png") against Vite's base URL,
// so it keeps working when the app is deployed under a subpath like /test/.
export const withBase = (path: string): string => {
  if (/^https?:\/\//i.test(path)) return path;
  return encodeURI(`${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`);
};
