import { useRef } from 'react'
import { useEntradas } from '../lib/movimento'
import { useSeo } from '../lib/seo'
import { Contato, GradeFrota, GradeServicos } from '../components/Blocos'
import Calculadora from '../components/Calculadora'

export function PaginaServicos() {
  const raiz = useRef(null)
  useSeo({
    titulo: 'Serviços de Transporte com Motorista em SP | Inovan',
    descricao: 'Transporte corporativo, transfer para aeroportos e Porto de Santos, eventos, city tour e excursões com vans, micro-ônibus e ônibus com motorista.',
    caminho: '/servicos',
  })
  useEntradas(raiz)
  return (
    <main ref={raiz}>
      <section className="secao secao--topo">
        <div className="caixa">
          <div className="cabeca">
            <span className="selo" data-sobe>Serviços</span>
            <h1 data-sobe>Transporte com motorista para cada ocasião</h1>
          </div>
          <GradeServicos />
        </div>
      </section>
      <Contato />
    </main>
  )
}

export function PaginaFrota() {
  const raiz = useRef(null)
  useSeo({
    titulo: 'Frota: Vans, Micro-ônibus e Ônibus com Motorista | Inovan',
    descricao: 'Vans de 15, 18 e 20 lugares, micro-ônibus de 30 e ônibus executivo de 46 lugares, todos com motorista profissional.',
    caminho: '/frota',
  })
  useEntradas(raiz)
  return (
    <main ref={raiz}>
      <section className="secao secao--topo">
        <div className="caixa">
          <div className="cabeca">
            <span className="selo" data-sobe>Frota própria</span>
            <h1 data-sobe>Vans, micro-ônibus e ônibus</h1>
          </div>
          <GradeFrota />
        </div>
      </section>
      <Calculadora />
      <Contato />
    </main>
  )
}
