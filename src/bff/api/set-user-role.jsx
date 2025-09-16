// src/bff/api/set-user-role.jsx
export const setUserRole = (userId, roleId) =>
  fetch(`http://localhost:3004/users/${userId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      role_id: roleId,
    }),
  })
