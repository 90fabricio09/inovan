import { Link } from 'react-router-dom'
import { CONTATO, FAQ, FROTA, SERVICOS, wa } from '../data/site'
import FormOrcamento from './FormOrcamento'
import Icone from './Icone'

/* Seções usadas em mais de uma página. */

export function GradeServicos({ excluir }) {
  return (
    <div className="servicos" data-cascata>
      {SERVICOS.filter((s) => s.slug !== excluir).map((s) => (
        <Link key={s.slug} to={`/${s.slug}`} className="cartao-servico">
          <div className="cartao-servico__foto">
            <img src={s.imagemCelular || s.imagem} alt="" loading="lazy" />
          </div>
          <div className="cartao-servico__corpo">
            <span className="cartao-servico__icone"><Icone nome={s.icone} /></span>
            <h3>{s.titulo}</h3>
            <p>{s.curto}</p>
            <span className="cartao-servico__mais">Saiba mais <Icone nome="arrow-right" /></span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export function GradeFrota({ excluir }) {
  return (
    <div className="frota" data-cascata>
      {FROTA.filter((v) => v.slug !== excluir).map((v) => (
        <Link key={v.slug} to={`/veiculos/${v.slug}`} className="cartao-veiculo">
          <div className="cartao-veiculo__foto">
            <img src={v.imagens[0]} alt={v.nome} loading="lazy" />
          </div>
          <div className="cartao-veiculo__corpo">
            <div>
              <h3>{v.nome}</h3>
              <p>{v.modelo}</p>
            </div>
            <span className="cartao-veiculo__lugares"><Icone nome="people" /> {v.lugares}</span>
          </div>
        </Link>
      ))}
    </div>
  )
}

export function Duvidas() {
  return (
    <section className="secao" id="duvidas">
      <div className="caixa caixa--estreita">
        <div className="cabeca cabeca--centro">
          <span className="selo" data-sobe>Dúvidas frequentes</span>
          <h2 data-sobe>Antes de reservar</h2>
        </div>
        <div className="faq" data-cascata>
          {FAQ.map((item) => (
            <details key={item.p}>
              <summary>{item.p}<Icone nome="chevron-down" /></summary>
              <p>{item.r}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export function Contato({ servicoInicial }) {
  return (
    <section className="secao secao--escura" id="contato">
      <div className="caixa contato">
        <div className="contato__texto">
          <span className="selo selo--claro" data-sobe>Orçamento sem compromisso</span>
          <h2 data-sobe>Conte o roteiro. A gente cuida do resto.</h2>
          <p data-sobe>Preencha em menos de um minuto: o pedido segue pronto para o nosso WhatsApp.</p>
          <ul className="contato__lista" data-cascata>
            <li><Icone nome="whatsapp" /><a href={wa()} target="_blank" rel="noreferrer" data-local="contato">{CONTATO.whatsappExibir}</a></li>
            <li><Icone nome="telephone" /><a href={`tel:${CONTATO.telefone}`}>{CONTATO.telefoneExibir}</a></li>
            <li><Icone nome="envelope" /><a href={`mailto:${CONTATO.email}`}>{CONTATO.email}</a></li>
            <li><Icone nome="geo-alt" /><a href={CONTATO.mapa} target="_blank" rel="noreferrer">{CONTATO.endereco} · {CONTATO.cidade}</a></li>
            <li><Icone nome="clock" /><span>{CONTATO.horario} · {CONTATO.horarioObs}</span></li>
          </ul>
        </div>
        <div className="contato__form" data-sobe="0.1">
          <FormOrcamento servicoInicial={servicoInicial} />
        </div>
      </div>
    </section>
  )
}
