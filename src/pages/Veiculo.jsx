import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { FROTA, wa } from '../data/site'
import { gsap, useGSAP, useEntradas, SEM_MOVIMENTO } from '../lib/movimento'
import { useSeo } from '../lib/seo'
import { Contato, GradeFrota } from '../components/Blocos'
import Icone from '../components/Icone'
import NaoEncontrada from './NaoEncontrada'

export default function Veiculo() {
  const { slug } = useParams()
  const v = FROTA.find((x) => x.slug === slug)
  if (!v) return <NaoEncontrada />
  return <PaginaVeiculo v={v} />
}

function PaginaVeiculo({ v }) {
  const raiz = useRef(null)
  useSeo({
    titulo: `Aluguel de ${v.nome} com Motorista em SP | Inovan`,
    descricao: `${v.nome} com motorista em São Paulo: ${v.modelo}, até ${v.lugares} passageiros. ${v.texto}`,
    caminho: `/veiculos/${v.slug}`,
  })
  useEntradas(raiz, [v.slug])

  useGSAP(
    () => {
      if (SEM_MOVIMENTO) return
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.veiculo__fotos img', { y: 40, autoAlpha: 0, duration: 0.9, stagger: 0.12 })
        .from('.veiculo__info > *', { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.07 }, 0.15)
    },
    { scope: raiz, dependencies: [v.slug], revertOnUpdate: true },
  )

  const mensagem = `Olá! Vim pelo site da Inovan e quero um orçamento de ${v.nome.toLowerCase()} (até ${v.lugares} passageiros).`

  return (
    <main ref={raiz}>
      <section className="secao veiculo-topo">
        <div className="caixa veiculo">
          <div className="veiculo__fotos">
            {v.imagens.map((src, i) => <img key={src} src={src} alt={`${v.nome} da Inovan${i ? ' — detalhe' : ''}`} fetchPriority={i ? 'auto' : 'high'} />)}
          </div>
          <div className="veiculo__info">
            <span className="selo">Frota Inovan</span>
            <h1>{v.nome}</h1>
            <p className="veiculo__modelo">{v.modelo} · {v.ano}</p>
            <div className="veiculo__lugares"><Icone nome="people" /> Até <strong>{v.lugares}</strong> passageiros</div>
            <p>{v.texto}</p>
            <ul className="veiculo__itens">
              {v.itens.map((i) => <li key={i}><Icone nome="check2" /> {i}</li>)}
            </ul>
            <a className="botao botao--primario botao--grande" href={wa(mensagem)} target="_blank" rel="noreferrer" data-local="veiculo">
              <Icone nome="whatsapp" /> Orçar este veículo
            </a>
          </div>
        </div>
      </section>

      <section className="secao secao--suave">
        <div className="caixa">
          <div className="cabeca">
            <span className="selo" data-sobe>Outros tamanhos</span>
            <h2 data-sobe>Veja também</h2>
          </div>
          <GradeFrota excluir={v.slug} />
        </div>
      </section>

      <Contato />
    </main>
  )
}
