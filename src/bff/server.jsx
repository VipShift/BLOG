import { addUser } from './add-user'
// import { createSession } from './create-session'
import { getUser } from './get-user'
import { sessions } from './sessions'

export const server = {
  //*=========================================== */

  async logout(session) {
    session.remove(session)
  },

  //*=========================================== */

  async authorize(authLogin, authPassword) {
    const user = await getUser(authLogin)

    if (!user) {
      return {
        error: 'Такой пользователь не найден',
        res: null,
      }
    }

    if (authPassword !== user.password) {
      return {
        error: 'Неверный пароль',
        res: null,
      }
    }

    return {
      error: null,
      res: {
        id: user.id,
        login: user.login,
        roleId: user.role_id,
        session: sessions.create(user),
      },
    }
  },

  //*=========================================== */

  async register(regLogin, regPassword) {
    const existingUser = await getUser(regLogin)

    if (existingUser) {
      return {
        error: 'Такой логин занят',
        res: null,
      }
    }

    const user = await addUser(regLogin, regPassword)
    console.log(user)
    return {
      error: null,
      res: {
        id: user.id,
        login: user.login,
        roleId: user.role_id,
        session: sessions.create(user),
      },
    }
  },
}
