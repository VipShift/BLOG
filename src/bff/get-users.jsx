export const getUsers = (loginToFind) =>
  fetch('http://localhost:3004/users').then((loadedUsers) => loadedUsers.json())
