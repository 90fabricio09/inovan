import { useRef } from 'react'
import { useParams } from 'react-router-dom'
import { SERVICOS, wa } from '../data/site'
import { gsap, useGSAP, useEntradas, SEM_MOVIMENTO } from '../lib/movimento'
import { useSeo } from '../lib/seo'
import { Contato, GradeFrota, GradeServicos } from '../components/Blocos'
import Icone from '../components/Icone'
import NaoEncontrada from './NaoEncontrada'

/* Página de destino por serviço: é para onde cada anúncio aponta. Primeira tela com o
   serviço pesquisado e o WhatsApp já com o assunto na mensagem. */
export default function Servico() {
  const { slug } = useParams()
  const s = SERVICOS.find((x) => x.slug === slug)
  if (!s) return <NaoEncontrada />
  return <PaginaServico s={s} />
}

function PaginaServico({ s }) {
  const raiz = useRef(null)
  useSeo({ titulo: `${s.titulo} em São Paulo | Inovan`, descricao: s.seo, caminho: `/${s.slug}` })
  useEntradas(raiz, [s.slug])

  useGSAP(
    () => {
      if (SEM_MOVIMENTO) return
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.pagina-hero__foto img', { scale: 1.12, duration: 1.4, ease: 'expo.out' })
        .from('.pagina-hero__texto > *', { y: 28, autoAlpha: 0, duration: 0.8, stagger: 0.08 }, 0.1)
    },
    { scope: raiz, dependencies: [s.slug], revertOnUpdate: true },
  )

  const mensagem = `Olá! Vim pelo site da Inovan e quero um orçamento de ${s.titulo.toLowerCase()}.`

  return (
    <main ref={raiz}>
      <section className="pagina-hero">
        <div className="pagina-hero__foto">
          <img
            src={s.imagem}
            srcSet={s.imagemCelular ? `${s.imagemCelular} 720w, ${s.imagem} 1400w` : undefined}
            sizes="100vw"
            alt=""
            fetchPriority="high"
          />
        </div>
        <div className="caixa pagina-hero__texto">
          <span className="selo selo--claro"><Icone nome={s.icone} /> Serviço</span>
          <h1>{s.titulo}</h1>
          <p>{s.curto}</p>
          <a className="botao botao--primario botao--grande" href={wa(mensagem)} target="_blank" rel="noreferrer" data-local="servico-hero">
            <Icone nome="whatsapp" /> Pedir orçamento
          </a>
        </div>
      </section>

      <section className="secao">
        <div className="caixa servico">
          <div className="servico__texto">
            {s.texto.map((p, i) => <p key={i} data-sobe>{p}</p>)}
          </div>
          <aside className="servico__destaques" data-sobe="0.1">
            <h2>Neste serviço</h2>
            <ul>
              {s.destaques.map((d) => <li key={d}><Icone nome="check2" /> {d}</li>)}
            </ul>
            <a className="botao botao--primario botao--cheio" href={wa(mensagem)} target="_blank" rel="noreferrer" data-local="servico-lateral">
              <Icone nome="whatsapp" /> Falar no WhatsApp
            </a>
          </aside>
        </div>
      </section>

      <section className="secao secao--suave">
        <div className="caixa">
          <div className="cabeca">
            <span className="selo" data-sobe>Frota</span>
            <h2 data-sobe>Escolha o tamanho do grupo</h2>
          </div>
          <GradeFrota />
        </div>
      </section>

      <Contato servicoInicial={s.titulo} />

      <section className="secao">
        <div className="caixa">
          <div className="cabeca">
            <span className="selo" data-sobe>Outros serviços</span>
            <h2 data-sobe>A Inovan também faz</h2>
          </div>
          <GradeServicos excluir={s.slug} />
        </div>
      </section>
    </main>
  )
}
