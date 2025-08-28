import estilos from './Sobre.module.css'

export default function Sobre() {
    return (
        <section id={estilos.sobre} className={estilos.sobre}>
            <div className={estilos.center}>
                <h2>Quem Somos</h2>
                <p>Desde 2025, a Ronin Tec oferece setups e periféricos gamer de alto desempenho, combinando tecnologia de ponta, design arrojado e atendimento dedicado.Aqui, cada jogador encontra o equipamento ideal para elevar sua performance e estilo.</p>

                <div className={estilos.elementos_sobre}>
                    <picture>
                        <img src='loja.png' alt='Nossa Loja'/>
                    </picture>                          

                    <div className={estilos.sobre_elementos}>
                        <h4>Nossas Filiais</h4>
                        <p>Com unidades em diferentes regiões do Brasil, nossas filiais garantem atendimento especializado e entrega rápida, perto de você.</p>
                    </div>

                    <div className={estilos.sobre_elementos}>
                        <h4>Atendimento individual</h4>
                        <p>Equipe apaixonada por games, pronta para orientar cada cliente e montar o setup perfeito, com atenção total a cada detalhe.</p>
                    </div>

                    <picture>
                        <img src='loja.png' alt='Atendimento'/>
                    </picture>
                </div>  
            </div>
        </section>
    )
}