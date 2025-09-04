import { server } from '../bff'
import { sessions } from '../bff/sessions'
import { ACTION_TYPE } from './action-type'

export const logout = () => {
  server.logout(sessions)
  return {
    type: ACTION_TYPE.LOGOUT,
  }
}
