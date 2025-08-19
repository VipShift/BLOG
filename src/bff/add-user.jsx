import { generateDate } from "./generate-date";

export const addUser = (login, password) =>
  fetch("http://localhost:3004/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      login,
      password,
      registered_at: generateDate,
      role_id: 3,
    }),
  });
