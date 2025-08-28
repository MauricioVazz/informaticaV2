import estilos from "./Contato.module.css";

export default function Contato() {
  return (
    <section id={estilos.contato}>
      <div className={estilos.contato}>
        <h2>Fale Conosco</h2>
        <p>
          Nao perca tempo, venha conhecer uma de nossas loja ous entre em
          contato através das nossas redes sociais ou da central de atendimento.
        </p>

        <div className={estilos.central_redes}>
          <div className={estilos.bloco_contato}>
            <h4>Contato</h4>
            <ul>
              <li>
                <picture>
                  <img src="./pin.png" alt="localização" />
                </picture>
                Caraguatatuba - SP
              </li>

              <li>
                <picture>
                  <img src="./phone.png" alt="telefone" />
                </picture>
                (12) 99999-9999
              </li>

              <li>
                <picture>
                  <img src="./mail.png" alt="email" />
                </picture>
                roninstore@gmail.com
              </li>
            </ul>
          </div>

          <div className={estilos.bloco_contato}>
            <h4>Redes Sociais</h4>
            <ul>
              <li>
                <picture>
                  <img src="./instagram.png" alt="instagram" />
                </picture>
                @roninstore
              </li>

              <li>
                <picture>
                  <img src="youtube.png" alt="youtube" />
                </picture>
                www.youtube.com/roninstore
              </li>

              <li>
                <picture>
                  <img src="tik-tok.png" alt="tik tok" />
                </picture>
                @roninstore
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
