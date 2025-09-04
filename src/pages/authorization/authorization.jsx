import { yupResolver } from '@hookform/resolvers/yup'
import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useStore } from 'react-redux'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import * as yup from 'yup'
import { setUser } from '../../actions'
import { server } from '../../bff'
import { Button, H2, Input } from '../../components'
import { useNavigate } from 'react-router-dom'

//

const authFormSchema = yup.object({
  login: yup
    .string()
    .required('Заполните Логин')
    .matches(
      /^[A-Za-z0-9@._-]+$/,
      'Логин должен состоять из латинских букв, цифр и символов . _ - @',
    )
    .min(3, 'Логин должен быть не менее 3 символов')
    .max(30, 'Логин должен быть не более 30 символов'),
  password: yup
    .string()
    .required('Заполните Пароль')
    .matches(
      /^[A-Za-z0-9#%_]+$/,
      'Пароль должен состоять из латинских букв, цифр или символов # % _',
    )
    .min(6, 'Пароль должен быть не менее 6 символов')
    .max(30, 'Пароль должен быть не более 30 символов'),
})

const StyledLink = styled(Link)`
  text-align: center;
  margin: 20px;
  text-decoration: underline;
  color: #fff;

  &:hover {
    cursor: pointer;
  }
`

const ErrorMessage = styled.div`
  color: #fafafa;
  background-color: #ff8888;
  margin: 10px 0;
  padding: 10px;
  border-radius: 10px;
  font-size: 16px;
`

export function AuthorizationContainer({ className }) {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
    },
    resolver: yupResolver(authFormSchema),
  })

  const [serverError, setServerError] = useState(null)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const store = useStore()

  useEffect(() => {
    let currentWasLogout = store.getState().app.wasLogout

    return store.subscribe(() => {
      let previousWasLogout = currentWasLogout

      currentWasLogout = store.getState().app.wasLogout

      if (currentWasLogout !== previousWasLogout) {
        reset()
      }
    })
  }, [reset, store])

  const onSubmit = ({ login, password }) => {
    server.authorize(login, password).then(({ error, res }) => {
      if (error) {
        setServerError(`Ошибка запроса: ${error}`)
        return
      }
      dispatch(setUser(res))
      navigate('/')
    })
  }

  const formError = errors?.login?.message || errors?.password?.message

  const errorMassage = formError || serverError

  return (
    <div className={className}>
      <H2>Авторизация</H2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input
          type="text"
          placeholder="Логин"
          {...register('login', { onChange: () => setServerError(null) })}
        />
        <Input
          type="password"
          placeholder="Пароль"
          {...register('password', { onChange: () => setServerError(null) })}
        />
        <Button type="submit" height="40px" disabled={!!formError}>
          Авторизация
        </Button>
        {errorMassage && <ErrorMessage>{errorMassage}</ErrorMessage>}
        <StyledLink to="/register">Регистрация</StyledLink>
      </form>
    </div>
  )
}

export const Authorization = styled(AuthorizationContainer)`
  display: flex;
  align-items: center;
  flex-direction: column;

  & > form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 300px;
  }
`
