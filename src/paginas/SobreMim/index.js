import styles from "./SobreMim.module.css";
import PostModelo from "componentes/PostModelo";
import fotoCapa from "assets/sobre_mim_capa.png";
import fotoSobreMim from "assets/sobre_mim_foto.png";

export default function SobreMim() {
    return (
        <PostModelo
            fotoCapa={fotoCapa}
            titulo="Sobre mim"
        >
            <h3 className={styles.subtitulo}>
                Olá, eu sou o Rafael!
            </h3>
            <img
                src={fotoSobreMim}
                alt="Foto do Rafael Corrêa"
                className={styles.fotoSobreMim}
            />

            <p className={styles.paragrafo}>
                Oi, tudo bem? Eu sou desenvolvedor de Front-end e estou feliz de te ver por aqui.
            </p>
            <p className={styles.paragrafo}>
                Minha história com programação começou tardiamente, eu sempre gostei de tecnologia mas fiz escolhas conservadoras com relação ao mercado de trabalho. Com a vinda da pandemia eu tive um maior tempo livre e comecei a estudar aquilo que eu realmente gostava, a programação. Eu aprendi lógica de programação e o básico com HTML, CSS e Javascript e hoje estou aprendendo React. Minha ambição é trabalhar isso hoje.
            </p>
            <p className={styles.paragrafo}>
                No ensino superior, eu estudei arquitetura e me formei em direito na UNIFAMINAS. No mercado de advocacia eu aprendi a lidar com diversos problemas que os clientes me traziam e a ajuda-los da melhor forma possivel. Além disso, lidar com prazos e autoridade sempre fez parte dessa carreira também. Pretendo levar todos esses aprendizados para a área de programação.
            </p>
            <p className={styles.paragrafo}>
                Minha experiência como dev foi aprendendo os cursos da Alura e a fazer projetos, principalmente do Front-end mentor. Hoje eu sou um desenvolvedor freelance e utilizo principalmente a Workana para trabalhar. 
            </p>
            <p className={styles.paragrafo}>
                A área de Front-End para mim é o ideal, ela me lembra um pouco a época que eu estudava arquitetura. Eu sempre fui uma pessoa muito visual e o Front-End é sobre exatamente isso, acredito ter uma certa facilidade nessa área por conta disso.
            </p>
            <p className={styles.paragrafo}>
                Desde que resolvi entrar de cabeça na área de programação e abandonar o direito, tem sido dias de aprendizados atrás de aprendizados. Pretendo continuar evoluindo e aprendendo para no futuro conseguir migrar de carreira definitivamente.
            </p>
        </PostModelo>
    )
}