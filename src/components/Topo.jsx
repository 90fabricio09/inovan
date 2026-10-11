import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { CONTATO, SERVICOS, wa } from '../data/site'
import Icone from './Icone'

export default function Topo() {
  const [aberto, setAberto] = useState(false)
  const [rolou, setRolou] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setAberto(false), [pathname])

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 30)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('menu-aberto', aberto)
  }, [aberto])

  return (
    <header className={`topo ${rolou ? 'topo--rolou' : ''}`}>
      <div className="topo__barra">
        <div className="caixa topo__barra-in">
          <span><Icone nome="clock" /> {CONTATO.horario}</span>
          <a href={`tel:${CONTATO.telefone}`}><Icone nome="telephone" /> {CONTATO.telefoneExibir}</a>
          <a href={`mailto:${CONTATO.email}`} className="so-desktop"><Icone nome="envelope" /> {CONTATO.email}</a>
        </div>
      </div>

      <div className="caixa topo__principal">
        <Link to="/" className="marca" aria-label="Inovan — início">
          <img src="/img/logo-inovan.webp" alt="Inovan" width="150" height="57" />
        </Link>

        <nav className={`menu ${aberto ? 'menu--aberto' : ''}`} aria-label="Principal">
          <div className="menu__grupo">
            <NavLink to="/servicos" className="menu__link">
              Serviços <Icone nome="chevron-down" className="so-desktop" />
            </NavLink>
            <div className="menu__sub">
              {SERVICOS.map((s) => (
                <Link key={s.slug} to={`/${s.slug}`}>
                  <Icone nome={s.icone} /> {s.titulo}
                </Link>
              ))}
            </div>
          </div>
          <NavLink to="/frota" className="menu__link">Frota</NavLink>
          <Link to="/#como-funciona" className="menu__link">Como funciona</Link>
          <Link to="/#duvidas" className="menu__link">Dúvidas</Link>
          <Link to="/#contato" className="menu__link">Contato</Link>
          <a className="botao botao--primario menu__cta" href={wa()} target="_blank" rel="noreferrer" data-local="topo">
            <Icone nome="whatsapp" /> Orçamento
          </a>
          <a className="menu__tel" href={`tel:${CONTATO.telefone}`}><Icone nome="telephone" /> {CONTATO.telefoneExibir}</a>
        </nav>

        <button
          className={`hamburguer ${aberto ? 'hamburguer--x' : ''}`}
          aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={aberto}
          onClick={() => setAberto((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </header>
  )
}
