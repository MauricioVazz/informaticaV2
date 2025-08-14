import estilos from './Capa.module.css';

export default function Capa() {
    return (
        <section className={estilos.secao_capa}>
            <div className={estilos.capa}>
                <div className={estilos.texto}>
                    <h2>DESPERTE O SAMURAI GAMER</h2>
                    <h1>EM VOCÊ</h1>
                </div>
            </div>
        </section>
    )
}