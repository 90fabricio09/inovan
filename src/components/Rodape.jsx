import { Link } from 'react-router-dom'
import { CONTATO, FROTA, SERVICOS, SITE, wa } from '../data/site'
import Icone from './Icone'

const ANO = new Date().getFullYear()

export default function Rodape() {
  return (
    <footer className="rodape">
      <div className="caixa rodape__grade">
        <div className="rodape__marca">
          <img src="/img/logo-inovan-claro.webp" alt="Inovan" width="150" height="57" loading="lazy" />
          <p>Locação de vans, micro-ônibus e ônibus com motorista em São Paulo desde {SITE.desde}.</p>
          <div className="rodape__redes">
            <a href={CONTATO.instagram} target="_blank" rel="noreferrer" aria-label="Instagram"><Icone nome="instagram" /></a>
            <a href={CONTATO.facebook} target="_blank" rel="noreferrer" aria-label="Facebook"><Icone nome="facebook" /></a>
            <a href={wa()} target="_blank" rel="noreferrer" aria-label="WhatsApp" data-local="rodape"><Icone nome="whatsapp" /></a>
          </div>
        </div>

        <div>
          <h4>Serviços</h4>
          <ul>
            {SERVICOS.map((s) => <li key={s.slug}><Link to={`/${s.slug}`}>{s.titulo}</Link></li>)}
          </ul>
        </div>

        <div>
          <h4>Frota</h4>
          <ul>
            {FROTA.map((v) => <li key={v.slug}><Link to={`/veiculos/${v.slug}`}>{v.nome}</Link></li>)}
          </ul>
        </div>

        <div>
          <h4>Contato</h4>
          <ul className="rodape__contato">
            <li><a href={wa()} target="_blank" rel="noreferrer" data-local="rodape"><Icone nome="whatsapp" /> {CONTATO.whatsappExibir}</a></li>
            <li><a href={`tel:${CONTATO.telefone}`}><Icone nome="telephone" /> {CONTATO.telefoneExibir}</a></li>
            <li><a href={`mailto:${CONTATO.email}`}><Icone nome="envelope" /> {CONTATO.email}</a></li>
            <li><a href={CONTATO.mapa} target="_blank" rel="noreferrer"><Icone nome="geo-alt" /> {CONTATO.endereco}</a></li>
            <li><span><Icone nome="clock" /> {CONTATO.horario}</span></li>
          </ul>
        </div>
      </div>

      <div className="rodape-base">
        <p>© {ANO} Inovan Locadora de Veículos. Todos os direitos reservados.</p>
        <span className="rodape-divisor" aria-hidden="true">|</span>
        <a
          href="https://bettaagency.com.br/?utm_source=inovan.com.br&utm_medium=rodape&utm_campaign=assinatura"
          target="_blank"
          rel="noopener noreferrer"
          className="rodape-betta"
        >
          Desenvolvido por <strong>Betta Agency</strong>
        </a>
      </div>
    </footer>
  )
}
