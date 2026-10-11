import { useState } from 'react'
import { SERVICOS, CONTATO, wa } from '../data/site'
import Icone from './Icone'

/* Sem servidor: o formulário monta a mensagem e abre o WhatsApp. Pede só o que a Inovan
   precisa para cotar (o mesmo que o formulário atual pede), em menos campos. */
export default function FormOrcamento({ servicoInicial = '' }) {
  const [f, setF] = useState({ nome: '', servico: servicoInicial, data: '', pessoas: '', trajeto: '', obs: '' })
  const [erro, setErro] = useState('')
  const set = (k) => (e) => setF((v) => ({ ...v, [k]: e.target.value }))

  const enviar = (e) => {
    e.preventDefault()
    if (!f.nome.trim() || !f.trajeto.trim()) {
      setErro('Preencha seu nome e o trajeto, por favor.')
      return
    }
    setErro('')
    const linhas = [
      `Olá! Sou ${f.nome.trim()} e quero um orçamento.`,
      f.servico && `Serviço: ${f.servico}`,
      f.data && `Data: ${f.data.split('-').reverse().join('/')}`,
      f.pessoas && `Passageiros: ${f.pessoas}`,
      `Trajeto: ${f.trajeto.trim()}`,
      f.obs.trim() && `Detalhes: ${f.obs.trim()}`,
    ].filter(Boolean)
    window.dataLayer = window.dataLayer || []
    window.dataLayer.push({ event: 'clique_whatsapp', local: 'formulario', pagina: location.pathname })
    window.open(wa(linhas.join('\n')), '_blank', 'noopener')
  }

  return (
    <form className="form" onSubmit={enviar} noValidate>
      <div className="form__linha">
        <label>
          Seu nome *
          <input value={f.nome} onChange={set('nome')} autoComplete="name" placeholder="Nome completo" />
        </label>
        <label>
          Serviço
          <select value={f.servico} onChange={set('servico')}>
            <option value="">Escolha o serviço</option>
            {SERVICOS.map((s) => <option key={s.slug}>{s.titulo}</option>)}
          </select>
        </label>
      </div>
      <div className="form__linha">
        <label>
          Data da saída
          <input type="date" value={f.data} onChange={set('data')} />
        </label>
        <label>
          Passageiros
          <input type="number" min="1" inputMode="numeric" value={f.pessoas} onChange={set('pessoas')} placeholder="Ex.: 18" />
        </label>
      </div>
      <label>
        Trajeto *
        <input value={f.trajeto} onChange={set('trajeto')} placeholder="Ex.: Hotel na Paulista → Aeroporto de Guarulhos" />
      </label>
      <label>
        Detalhes
        <textarea rows="3" value={f.obs} onChange={set('obs')} placeholder="Horários, volta, malas, nota fiscal…" />
      </label>
      {erro && <p className="form__erro" role="alert">{erro}</p>}
      <button type="submit" className="botao botao--primario botao--cheio">
        <Icone nome="whatsapp" /> Enviar pelo WhatsApp
      </button>
      <p className="form__nota">Resposta pelo WhatsApp {CONTATO.whatsappExibir}.</p>
    </form>
  )
}
