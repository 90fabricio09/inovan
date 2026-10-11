import { useRef } from 'react'
import { Link } from 'react-router-dom'
import { ANOS, DIFERENCIAIS, REGIOES, SITE, wa } from '../data/site'
import { gsap, useGSAP, useEntradas, SEM_MOVIMENTO } from '../lib/movimento'
import { useSeo } from '../lib/seo'
import Calculadora from '../components/Calculadora'
import { Contato, Duvidas, GradeFrota, GradeServicos } from '../components/Blocos'
import Icone from '../components/Icone'

const PASSOS = [
  { icone: 'map', titulo: 'Conte o roteiro', texto: 'Datas, horários, endereços e quantas pessoas vão. Pelo formulário ou direto no WhatsApp.' },
  { icone: 'receipt', titulo: 'Receba o orçamento', texto: 'Indicamos o veículo certo para o grupo e enviamos a proposta.' },
  { icone: 'bus-front', titulo: 'Embarque', texto: 'Motorista uniformizado, veículo revisado e pontualidade do começo ao fim.' },
]

export default function Home() {
  const raiz = useRef(null)
  useSeo({
    titulo: 'Aluguel de Vans, Micro-ônibus e Ônibus com Motorista em SP | Inovan',
    descricao: `Locação de vans, micro-ônibus e ônibus com motorista em São Paulo desde ${SITE.desde}. Transfer para aeroportos, Porto de Santos, eventos, city tour e transporte corporativo.`,
    caminho: '/',
  })
  useEntradas(raiz)

  useGSAP(
    () => {
      if (SEM_MOVIMENTO) return
      gsap.timeline({ defaults: { ease: 'power3.out' } })
        .from('.hero__selo', { y: 20, autoAlpha: 0, duration: 0.6 })
        .from('.hero h1 .linha > span', { yPercent: 110, duration: 0.9, stagger: 0.08 }, '-=0.3')
        .from(['.hero__texto > p', '.hero__acoes > *', '.hero__fatos li'], { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.07 }, '-=0.5')
        .from('.hero__frota img', { xPercent: 30, autoAlpha: 0, duration: 1.1, stagger: 0.12, ease: 'expo.out' }, 0.2)
        .from('.hero__circulo', { scale: 0.6, autoAlpha: 0, duration: 1.2, ease: 'expo.out' }, 0.1)
    },
    { scope: raiz },
  )

  return (
    <main ref={raiz}>
      <section className="hero">
        <div className="caixa hero__grade">
          <div className="hero__texto">
            <span className="selo hero__selo">Desde {SITE.desde} · São Paulo</span>
            <h1>
              <span className="linha"><span>Vans, micro-ônibus</span></span>
              <span className="linha"><span>e ônibus</span></span>
              <span className="linha"><span><em>com motorista.</em></span></span>
            </h1>
            <p>
              Transfer para aeroportos e Porto de Santos, eventos, city tour, viagens e transporte corporativo — com frota
              própria revisada e motoristas uniformizados.
            </p>
            <div className="hero__acoes">
              <a className="botao botao--primario botao--grande" href={wa()} target="_blank" rel="noreferrer" data-local="hero">
                <Icone nome="whatsapp" /> Pedir orçamento
              </a>
              <Link className="botao botao--linha botao--grande" to="/frota">Conhecer a frota</Link>
            </div>
            <ul className="hero__fatos">
              <li><strong><span data-conta={ANOS}>{ANOS}</span> anos</strong><span>no transporte de passageiros</span></li>
              <li><strong>15 a 46</strong><span>lugares por veículo</span></li>
              <li><strong>8h às 22h</strong><span>atendimento todos os dias</span></li>
            </ul>
          </div>

          <div className="hero__visual" aria-hidden="true">
            <div className="hero__circulo" />
            <div className="hero__frota">
              <img className="hero__onibus" src="/img/recorte-onibus.webp" alt="" width="1000" height="504" fetchPriority="high" />
              <img className="hero__micro" src="/img/recorte-micro.webp" alt="" width="1000" height="575" />
              <img className="hero__van" src="/img/recorte-van.webp" alt="" width="977" height="683" />
            </div>
          </div>
        </div>
      </section>

      <div className="faixa-regioes" aria-label="Onde atendemos">
        <div className="caixa faixa-regioes__in">
          <span className="faixa-regioes__titulo"><Icone nome="pin-map" /> Atendemos</span>
          {REGIOES.map((r) => <span key={r}>{r}</span>)}
        </div>
      </div>

      <Calculadora />

      <section className="secao" id="servicos">
        <div className="caixa">
          <div className="cabeca">
            <span className="selo" data-sobe>Serviços</span>
            <h2 data-sobe>Um veículo com motorista para cada tipo de viagem</h2>
          </div>
          <GradeServicos />
        </div>
      </section>

      <section className="secao secao--suave" id="frota">
        <div className="caixa">
          <div className="cabeca cabeca--linha">
            <div>
              <span className="selo" data-sobe>Frota própria</span>
              <h2 data-sobe>De 15 a 46 lugares</h2>
            </div>
            <Link className="botao botao--linha" to="/frota" data-sobe>Ver frota completa <Icone nome="arrow-right" /></Link>
          </div>
          <GradeFrota />
        </div>
      </section>

      <section className="secao" id="como-funciona">
        <div className="caixa">
          <div className="cabeca cabeca--centro">
            <span className="selo" data-sobe>Como funciona</span>
            <h2 data-sobe>Do pedido ao embarque em 3 passos</h2>
          </div>
          <ol className="passos" data-cascata>
            {PASSOS.map((p, i) => (
              <li key={p.titulo}>
                <span className="passos__num">0{i + 1}</span>
                <span className="passos__icone"><Icone nome={p.icone} /></span>
                <h3>{p.titulo}</h3>
                <p>{p.texto}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="secao secao--suave" id="sobre">
        <div className="caixa sobre">
          <div className="sobre__foto" data-sobe>
            <img src="/img/micro-entrada.webp" srcSet="/img/micro-entrada-720.webp 720w, /img/micro-entrada.webp 1199w" sizes="(max-width: 900px) 100vw, 50vw" alt="Micro-ônibus da Inovan" loading="lazy" />
          </div>
          <div className="sobre__texto">
            <span className="selo" data-sobe>Sobre a Inovan</span>
            <h2 data-sobe>Pontualidade, cortesia e discrição desde {SITE.desde}</h2>
            <p data-sobe>
              A Inovan aluga vans, micro-ônibus e ônibus com motorista. Nossa frota própria tem veículos novos, revisados e
              seguros, e nossos motoristas, sempre uniformizados, são profissionais capacitados.
            </p>
            <div className="diferenciais" data-cascata>
              {DIFERENCIAIS.map((d) => (
                <div key={d.titulo} className="diferencial">
                  <span><Icone nome={d.icone} /></span>
                  <div><h3>{d.titulo}</h3><p>{d.texto}</p></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Duvidas />
      <Contato />
    </main>
  )
}
