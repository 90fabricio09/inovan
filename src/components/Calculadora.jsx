import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { veiculoPara, wa } from '../data/site'
import { gsap, useGSAP, SEM_MOVIMENTO } from '../lib/movimento'
import Icone from './Icone'

/* A ideia forte da home: o visitante diz quantas pessoas vão e o site indica o veículo e já
   abre o WhatsApp com o pedido montado. Para tráfego pago é o atalho mais curto entre o
   clique no anúncio e um orçamento com dados úteis. */
export default function Calculadora() {
  const [pessoas, setPessoas] = useState(16)
  const raiz = useRef(null)
  const veiculo = veiculoPara(pessoas)

  // A troca de veículo anima a foto; o número muda direto (setState só quando o valor muda).
  useGSAP(
    () => {
      if (SEM_MOVIMENTO) return
      gsap.fromTo('.calc__foto img', { autoAlpha: 0, x: 40 }, { autoAlpha: 1, x: 0, duration: 0.6, ease: 'power3.out' })
    },
    { scope: raiz, dependencies: [veiculo?.slug] },
  )

  const mensagem = veiculo
    ? `Olá! Vim pelo site da Inovan. Somos ${pessoas} pessoas e queremos um orçamento para ${veiculo.nome.toLowerCase()}.`
    : `Olá! Vim pelo site da Inovan. Somos ${pessoas} pessoas e precisamos de mais de um veículo. Podem me ajudar com um orçamento?`

  return (
    <section className="calc" ref={raiz} aria-labelledby="calc-titulo">
      <div className="caixa calc__grade">
        <div className="calc__texto">
          <span className="selo" data-sobe>Monte em 10 segundos</span>
          <h2 id="calc-titulo" data-sobe>Quantas pessoas vão viajar?</h2>
          <p data-sobe>Arraste e veja o veículo indicado para o seu grupo. O pedido já vai pronto para o WhatsApp.</p>

          <div className="calc__controle" data-sobe>
            <label htmlFor="pessoas" className="calc__numero">
              <strong>{pessoas}</strong> {pessoas === 1 ? 'pessoa' : 'pessoas'}
            </label>
            <input
              id="pessoas"
              type="range"
              min="1"
              max="60"
              value={pessoas}
              onChange={(e) => setPessoas(Number(e.target.value))}
              style={{ '--p': `${((pessoas - 1) / 59) * 100}%` }}
            />
            {/* cada marca na posição real da régua (1 a 60), não espaçadas por igual */}
            <div className="calc__marcas" aria-hidden="true">
              {[1, 15, 30, 46, 60].map((n) => (
                <span key={n} style={{ left: `${((n - 1) / 59) * 100}%` }}>{n}</span>
              ))}
            </div>
          </div>
        </div>

        <div className="calc__resultado" aria-live="polite">
          <div className="calc__foto">
            <img key={veiculo?.slug || 'varios'} src={veiculo ? veiculo.imagens[0] : '/img/frota-ilustra.webp'} alt={veiculo ? veiculo.nome : 'Frota Inovan'} loading="lazy" />
          </div>
          <div className="calc__info">
            <span className="calc__rotulo">Indicado para o seu grupo</span>
            <h3>{veiculo ? veiculo.nome : 'Mais de um veículo'}</h3>
            <p>
              {veiculo
                ? `${veiculo.modelo} · até ${veiculo.lugares} passageiros`
                : 'Combinamos vans, micro-ônibus e ônibus para grupos acima de 46 pessoas.'}
            </p>
            <div className="calc__acoes">
              <a className="botao botao--primario" href={wa(mensagem)} target="_blank" rel="noreferrer" data-local="calculadora">
                <Icone nome="whatsapp" /> Pedir orçamento
              </a>
              {veiculo && (
                <Link className="botao botao--linha" to={`/veiculos/${veiculo.slug}`}>
                  Ver veículo <Icone nome="arrow-right" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
