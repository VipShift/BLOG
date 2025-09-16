import { setUserRole } from '../api'
import { sessions } from '../sessions'
import { ROLE } from '../constants'
//

export const updateUserRole = async (userSession, userId, selectedRoleId) => {
  const accessRoles = [ROLE.ADMIN]

  if (!sessions.access(userSession, accessRoles)) {
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
