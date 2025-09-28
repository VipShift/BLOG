import styled from "styled-components";
import { Icon } from "../../../../components";
import { TableRow } from "../table-row/table-row";
import { useState } from "react";
import { useServerRequest } from "../../../../hooks";

const UserRowContainer = ({
    className,
    id,
    login,
    registeredAt,
    roleId: userRoleId,
    roles,
    onUserRemove,
}) => {
    const requestServer = useServerRequest();

    const [initialRoleId, setInitialRoleId] = useState(userRoleId);
    const [selectedRoleId, setSelectedRoleId] = useState(userRoleId);

    const onSaveUserRole = (userId, newUserRoleId) => {
        requestServer("updateUserRole", userId, newUserRoleId).then(() => {
            setInitialRoleId(newUserRoleId);
        });
    };

    const onRoleChange = (e) => setSelectedRoleId(Number(e.target.value));

    return (
        <div className={className}>
            <TableRow border={true} shadow={true}>
                <div className="login-column">{login}</div>
                <div className="register-at-column">{registeredAt}</div>
                <div className="role-column">
                    <select value={selectedRoleId} onChange={onRoleChange}>
                        {roles.map(({ id: roleId, name: roleName }) => (
                            <option key={roleId} value={roleId}>
                                {roleName}
                            </option>
                        ))}
                    </select>

                    <Icon
                        disabled={selectedRoleId === initialRoleId}
                        className={"save-icon"}
                        id="fa-floppy-o"
                        margin_r="0 0 0 10px"
                        onClick={() => onSaveUserRole(id, selectedRoleId)}
                    />
                </div>
            </TableRow>

            <Icon
                className={"delete-icon"}
                id="fa-trash-o"
                margin_r="0 0 0 10px"
                onClick={onUserRemove}
            />
        </div>
    );
};

export const UserRow = styled(UserRowContainer)`
    display: flex;
    margin-bottom: 10px;

    & .save-icon {
        padding: 0 10px;
    }

    & .delete-icon {
        padding: 0 5px;
    }

    & select {
        padding: 0 5px;
        font-size: 16px;
    }
`;
