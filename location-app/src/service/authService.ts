 import API from "./api";
export const fetchMe= () => API.get("/auth/me").then((r) => r.data);
export const logout = () => API.post("/logout").then((r) => r.data);