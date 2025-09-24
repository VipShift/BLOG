// src/bff/fetch-users.jsx
import { getUsers } from "../api";
import { ROLE } from "../constants";
import { sessions } from "../sessions";

export const fetchUsers = async (hash) => {
    const accessRoles = [ROLE.ADMIN];

    const hasAccess = await sessions.access(hash, accessRoles);

    if (!hasAccess) {
        return {
            error: "Доступ запрещен",
            res: null,
        };
    }

    const users = await getUsers();

    return {
        error: null,
        res: users,
    };
};
