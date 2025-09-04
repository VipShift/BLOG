import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import { Footer, Header } from './components'
import { Authorization, Registration } from './pages'

const AppColum = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 1000px;
  min-height: 100%;
  margin: 0 auto;
  background-color: #171717;
  color: #fff;
  @media (max-width: 1020px) {
    width: 100%;
  }
  @media (max-width: 600px) {
    font-size: 14px;
  }
  @media (max-width: 400px) {
    font-size: 12px;
  }
  @media (max-width: 300px) {
    font-size: 10px;
  }
`

const Content = styled.div`
  padding: 120px 0 40 px 0;
  flex-grow: 1;
  margin: 20px;
  @media (max-width: 600px) {
    padding: 140px 10px 60px 10px;
  }
  @media (max-width: 400px) {
    padding: 160px 10px 40px 10px;
  }
  @media (max-width: 300px) {
    padding: 180px 10px 20px 10px;
  }
`

export function Blog() {
  return (
    <AppColum>
      <Header />
      <Content>
        <Routes>
          <Route path="/" element={<div>Главная</div>} />
          <Route path="/login" element={<Authorization />} />
          <Route path="/register" element={<Registration />} />
          <Route path="/users" element={<div>Пользователи</div>} />
          <Route path="/post" element={<div>Новая статья</div>} />
          <Route path="/post/:postId" element={<div>Статья</div>} />
          <Route path="*" element={<div>Ошибка</div>} />
        </Routes>
      </Content>
      <Footer />
    </AppColum>
  )
}
