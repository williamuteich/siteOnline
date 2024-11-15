import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Header } from './components/header/index.tsx'
import { Banners } from './components/banners/index.tsx'
import { Footer } from './components/footer/index.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Header />
    <Banners />
    <App />
    <Footer />
  </StrictMode>,
)
