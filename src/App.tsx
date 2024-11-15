import './App.css'
import { Etapas } from './components/home/etapas'
import Faq from './components/home/faq'
import { Formulario } from './components/home/formulario'
import { Servicos } from './components/home/servicos'
import { SubBanner } from './components/home/subbanner'

function App() {

  return (
    <div>
      <Etapas />
      <SubBanner />
      <Servicos />
      <Formulario />
      <Faq />
    </div>
  )
}

export default App
