import { useEffect, useRef } from 'react'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import { wa } from './data/site'
import { ScrollTrigger } from './lib/movimento'
import { registrarPagina } from './lib/rastreamento'
import Topo from './components/Topo'
import Rodape from './components/Rodape'
import Icone from './components/Icone'
import Home from './pages/Home'
import Servico from './pages/Servico'
import Veiculo from './pages/Veiculo'
import { PaginaFrota, PaginaServicos } from './pages/Listas'
import NaoEncontrada from './pages/NaoEncontrada'

function AoTrocarDePagina() {
  const { pathname, hash } = useLocation()
  const primeira = useRef(true)

  useEffect(() => {
    if (primeira.current) primeira.current = false
    else registrarPagina(pathname)
  }, [pathname])

  useEffect(() => {
    const t = setTimeout(() => ScrollTrigger.refresh(), 150)
    if (hash) {
      const alvo = document.getElementById(hash.slice(1))
      if (alvo) {
        setTimeout(() => alvo.scrollIntoView({ behavior: 'smooth' }), 60)
        return () => clearTimeout(t)
      }
    }
    window.scrollTo(0, 0)
    return () => clearTimeout(t)
  }, [pathname, hash])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <AoTrocarDePagina />
      <Topo />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servicos" element={<PaginaServicos />} />
        <Route path="/frota" element={<PaginaFrota />} />
        {/* mesmos endereços do site atual: /transfer-aeroporto-sp, /veiculos/van-de-15-lugares... */}
        <Route path="/veiculos/:slug" element={<Veiculo />} />
        <Route path="/:slug" element={<Servico />} />
        <Route path="*" element={<NaoEncontrada />} />
      </Routes>
      <Rodape />
      <a className="whats-flutuante" href={wa()} target="_blank" rel="noreferrer" aria-label="Falar no WhatsApp" data-local="flutuante">
        <Icone nome="whatsapp" />
      </a>
    </BrowserRouter>
  )
}
