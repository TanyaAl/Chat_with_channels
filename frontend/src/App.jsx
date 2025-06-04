import MainPage from './pages/MainPage'
import NotFoundPage from './pages/NotFoundPage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StrictMode } from 'react'


function App() {
  return (
    <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />}/>
          <Route path="*" element={<NotFoundPage />}/>
        </Routes> 
      </BrowserRouter>
    </StrictMode>
  )
}

export default App
