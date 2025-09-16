// src/bff/api/delete-user.jsx
export const deleteUser = (userId) =>
  fetch(`http://localhost:3004/users/${userId}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      id: userId,
    }),
  })
