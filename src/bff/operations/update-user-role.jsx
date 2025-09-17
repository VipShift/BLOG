import { setUserRole } from '../api'
import { sessions } from '../sessions'
import { ROLE } from '../constants'
//

export const updateUserRole = async (hash, userId, selectedRoleId) => {
  const accessRoles = [ROLE.ADMIN]

  const access = await sessions.access(hash, accessRoles)
  if (!access) {
    return {
      error: ' Доступ запрещен',
      res: null,
    }
  }
  setUserRole(userId, selectedRoleId)
  return {
    error: null,
    res: true,
  }
}
