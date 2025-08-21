import estilos from './Produtos.module.css'

export default function Produtos() {
    return (
        <section id='produto' className={estilos.produtos}>
            <div className={estilos.titulos}>
                <h2>Nossos Produtos</h2>
                <p>
                    Aqui você encontra uma seleção dos nossos produtos mais populares. Navegue por categorias e descubra o que temos a oferecer!
                </p>
                <p>
                    Cada produto é escolhido com cuidado para garantir a melhor qualidade e satisfação. Explore nossa coleção e encontre o que mais combina com você!
                </p>

                <div className={estilos.produto_img}>
                    <div className={estilos.card_produto}>
                        <span className={estilos.selo}>Mais Vendidos</span>
                        <h3>Gabinete</h3>
                        <picture>
                            <img src='./gabinete.png' alt='Gabinete'></img>
                        </picture>
                        <p className={estilos.preco}>R$ 499,99</p>
                        <button className={estilos.botao}>Comprar</button>
                    </div>

                    <div className={estilos.card_produto}>
                        <span className={estilos.selo}>Mais Vendidos</span>
                        <h3>Headset</h3>
                        <picture>
                            <img src='./headset.png' alt='Headset'></img>
                        </picture>
                        <p className={estilos.preco}>R$ 299,99</p>
                        <button className={estilos.botao}>Comprar</button>
                    </div>

                    <div className={estilos.card_produto}>
                        <span className={estilos.selo}>Mais Vendidos</span>
                        <h3>Mouse</h3>
                        <picture>
                            <img src='./mouse2.png' alt='Mouse'></img>
                        </picture>
                        <p className={estilos.preco}>R$ 199,99</p>
                        <button className={estilos.botao}>Comprar</button>
                    </div>

                    <div className={estilos.card_produto}>
                        <span className={estilos.selo}>Mais Vendidos</span>
                        <h3>Teclado</h3>
                        <picture>
                            <img src='./teclado.png' alt='Teclado'></img>
                        </picture>
                        <p className={estilos.preco}>R$ 249,99</p>
                        <button className={estilos.botao}>Comprar</button>
                    </div>
                </div>                    
            </div>
        </section>
    )
}