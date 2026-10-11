import { Link } from 'react-router-dom'
import { wa } from '../data/site'
import { useSeo } from '../lib/seo'
import Icone from '../components/Icone'

/* 404 como página própria e fora do índice: URL errada não vira cópia da home no Google. */
export default function NaoEncontrada() {
  useSeo({ titulo: 'Página não encontrada | Inovan', descricao: 'Esta página não existe.', caminho: '/404', noindex: true })
  return (
    <main className="secao secao--topo nao-encontrada">
      <div className="caixa caixa--estreita">
        <span className="selo">Erro 404</span>
        <h1>Essa rota não existe.</h1>
        <p>O endereço pode ter mudado. Volte ao início ou fale com a gente.</p>
        <div className="nao-encontrada__acoes">
          <Link className="botao botao--primario" to="/">Voltar ao início</Link>
          <a className="botao botao--linha" href={wa()} target="_blank" rel="noreferrer" data-local="404"><Icone nome="whatsapp" /> WhatsApp</a>
        </div>
      </div>
    </main>
  )
}
