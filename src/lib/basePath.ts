const BASE_PATH = '/hydromotor-v2.bg';

export function withBasePath(path: string) {
  return `${BASE_PATH}${path.startsWith('/') ? path : `/${path}`}`;
}
