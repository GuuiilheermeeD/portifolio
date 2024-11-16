const tabs = document.querySelectorAll(".tab-btn");
const highlight = document.querySelector(".highlight");
const contentArea = document.querySelector("#caixa__texto"); // Seleciona o contêiner de conteúdo
const apresentacaoImagem = document.querySelector(".apresentacao__imagem");

// Funções que retornam o HTML para cada botão
function getPrincipalContent() {
  apresentacaoImagem.classList.remove("hidden")
  return `<h1>
          <p class="titulo"> Eleve seu negócio digital a outro nível,<strong
              class="titulo-destaque"> com um Front-end de
              qualidade! </strong></p>
        </h1>
        <p class="apresentacao__conteudo__texto">Olá! meu nome é <strong class="titulo-destaque"> Guilherme</strong>, e
          sou estudante em Front-end com especialidade em
          HTML, CSS, JavaScript, NODE.js e Ajudo
          pequenos negócios e designers a colocarem em prática boas ideias.</p>
      </div>


      <!-- trecho importado desse link https://uiverse.io/elisapi/wise-stingray-29-->
      <div class="card">
        <a class="socialContainer containerOne" href="https://www.instagram.com/_guuiilheermee_/">
          <svg viewBox="0 0 16 16" class="socialSvg instagramSvg">
            <path
              d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z">
            </path>
          </svg>
        </a>

        <a class="socialContainer containerThree" href="https://www.linkedin.com/in/guuiilheermee/">
          <svg viewBox="0 0 448 512" class="socialSvg linkdinSvg">
            <path
              d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z">
            </path>
          </svg>
        </a>

        <a class="socialContainer containerFour"
          href="https://wa.me/5511970349880?text=Ol%C3%A1%20Guilherme!%20vim%20pelo%20seu%20portfolio%F0%9F%98%81%20">
          <svg viewBox="0 0 16 16" class="socialSvg whatsappSvg">
            <path
              d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z">
            </path>
          </svg>
        </a>`
}

function getCurriculoContent() {
  apresentacaoImagem.classList.add("hidden");
  return `  <div class="apresentacao__curriculo">
                <h1 class="titulo">Currículo</h1>
                <p class="apresentacao__conteudo">
                    Sou jovem um entusiasta do desenvolvimento web. Atualmente, estou focado em front-end,
                    aprimorando minhas habilidades em HTML, CSS e JavaScript, com planos de expandir para o back-end no
                    futuro. Sou apaixonado por aprender e vejo a programação como uma forma de arte, utilizando as
                    ferramentas de front-end para criar experiências digitais únicas. Estou determinado a construir uma
                    carreira sólida na área, buscando constantemente desafios estimulantes que me impulsionem a crescer
                    e a evoluir como desenvolvedor.
                </p>
            </div>

            <h2 class="titulo">Projetos</h2>
            <div class="apresentacao__conteudo__projetos">
                <a href="https://streaming-plus-azure.vercel.app/ " class="projetos"> Streaming plus </a>
                <a href="https://alura-book-sigma-gilt.vercel.app/ " class="projetos"> Alura book </a>
                <a href="https://jogo-do-numero-secreto-logica2.vercel.app/ " class="projetos"> Jogo do numero secreto</a>
                <a href="https://receitas-colinarias.vercel.app/" class="projetos"> Receitas culinárias </a>
                <a href="https://fokus-woad.vercel.app/" class="projetos"> Fokus </a>
                <a href="https://culturama-lilac.vercel.app/" class="projetos"> Culturama</a>
            </div>

            <h2 class="titulo">Cursos Alura</h2>

            <a class="certificado_link certificado_link_pc"
                href="https://cursos.alura.com.br/user/duarteguilherme295/fullCertificate/b65b03214a17f16aec9de1e522a173b2">
                <h4 class="titulo link_externo">Certificado Completo</h4>
            </a>

            <h4 class="titulo">Front-end</h4>
            <div>
                <ul>
                    <li class="lista">HTML e CSS: ambientes de desenvolvimento, estrutura de arquivos e tags
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/bc04afe2-07d6-42f7-acf7-99d0288c4c6f?lang=pt_BR">Com
                            Certificado </a>
                    </li>
                    <li class="lista">HTML e CSS: Classes, posicionamento e Flexbox
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/4c87425c-714d-498f-b205-6899ed2f2487?lang=pt_BR">Com
                            Certificado </a>
                    </li>
                    <li class="lista">HTML e CSS: cabeçalho, footer e variáveis CSS
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/d2d896d5-8b6f-4683-a0b0-3c0c79937643?lang=pt_BR">Com
                            Certificado</a>
                    </li>
                    <li class="lista">HTML e CSS: trabalhando com responsividade e publicação de projetos
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/45ddcb1a-a4f6-490d-9ab5-520fb7956ea5?lang=pt_BR">Com
                            Certificado</a>
                    </li>
                    <li class="lista">HTML E CSS: Praticando HTML/CSS
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/c71ecc55-a3c0-4f63-8252-84eb1b6ab6e6?lang=pt_BR">Com
                            Certificado</a>
                    </li>
                    <li class="lista">HTML e CSS: responsividade com mobile-first
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/3c844c58-09ef-4a48-8ddc-a44a47258e5a?lang=pt_BR">Com
                            Certificado</a>
                    </li>

                    <li class="lista">Praticando CSS: Grid e Flexbox
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/f5d2a439-9de6-4d5f-bd02-c44b0e64a587?lang=pt_BR">Com
                            Certificado</a>
                    </li>
                    <li class="lista">Lógica de programação: mergulhe em programação com JavaScript
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/03fd0e43-af9e-4f90-a725-db3b12f71cf9?lang=pt_BR">Com
                            Certificado</a>
                    </li>
                    <li class="lista">Lógica de programação: explore funções e listas
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/38ebe3e4-e72d-4db6-b624-e659e81150d3?lang=pt_BR">Com
                            Certificado</a>
                    </li>
                    <li class="lista">JavaScript: utilizando tipos, variáveis e funções
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/ec783fb8-6c9e-4a1c-8b17-3697434ed7f8?lang=pt_BR">Com
                            Certificado</a>
                    </li>
                    </li>
                    <li class="lista">JavaScript: conhecendo arrays
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/13f4dc75-45a4-4cb4-b74d-5dcc0b4e1f0d?lang=pt_BR">Com
                            Certificado</a>
                    </li>
                    <li class="lista">JavaScript: conhecendo objetos
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/4b733ab4-964c-4e70-ad4d-fff46f0945d6?lang=pt_BR">Com
                            Certificado</a>
                    </li>
                    <li class="lista">JavaScript para Web: Crie páginas dinâmicas
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/aa71841d-d414-411d-8ba6-3ad7c96ad007?lang=pt_BR">Com
                            Certificado</a>
                    </li>
                    <li class="lista">JavaScript: programação orientada a objetos
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/51b5b2e5-8065-456f-8033-4e75ccd2ff84?lang=pt_BR">Com
                            Certificado</a>
                    </li>
                    <li class="lista">JavaScript: manipulando elementos no DOM
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/751ae55c-df96-4eea-9b6d-ae221511a2d8?lang=pt_BR">Com
                            Certificado</a>
                    </li>
                    <li class="lista">JavaScript: explorando a manipulação de elementos e da localStorage
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/b8de0b44-95f7-45ed-9e8a-80cad019b01b?lang=pt_BR">Com
                            Certificado</a>
                    </li>
                    <li class="lista">JavaScript: validações e reconhecimento de voz
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/601101b0-ab73-494c-80dd-adca5f4442c0?lang=pt_BR">Com
                            Certificado</a>
                    </li>
                    <li class="lista">JavaScript: consumindo e tratando dados de uma API
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/ac769eec-cd04-49ff-80c8-4d0a7c8b87b2?lang=pt_BR">Com
                            Certificado</a>
                    </li>
                    <li class="lista">JavaScript: métodos de array
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/6649708f-8502-402d-b7fb-f1712ec90908?lang=pt_BR">Com
                            Certificado</a>
                    </li>
                    <li class="lista">JavaScript: criando requisições
                        <a class="certificado_link_cursando"
                            href="https://cursos.alura.com.br/course/javascript-criando-requisicoes">Cursando</a>
                    </li>
                    <li class="lista">JavaScript: validando formulários
                        <a class="certificado_link_cursando"
                            href="https://cursos.alura.com.br/course/javascript-validando-formularios">Cursando</a>
                    </li>

                    <br>
                    <h4 class="titulo">
                        Back-end</h4>

                    <li class="lista">Terminal: aprenda comandos para executar tarefas
                        <a class="certificado_link_cursando"
                            href="https://cursos.alura.com.br/course/terminal-comandos-executar-tarefas">planejado</a>
                    </li>
                    <li class="lista">Git e GitHub: compartilhando e colaborando em projetos
                        <a class="certificado_link_cursando"
                            href="https://cursos.alura.com.br/course/git-github-compartilhando-colaborando-projetos">planejado</a>
                    </li>
                    <li class="lista">Java: criando a sua primeira aplicação
                        <a class="certificado_link_cursando"
                            href="https://cursos.alura.com.br/course/java-criando-primeira-aplicacao">planejado</a>
                    </li>
                    <li class="lista">Java: aplicando a Orientação a Objetos
                        <a class="certificado_link_cursando"
                            href="https://cursos.alura.com.br/course/java-aplicando-orientacao-objetos">planejado</a>
                    </li>
                    <li class="lista">Java: trabalhando com listas e coleções de dados
                        <a class="certificado_link_cursando"
                            href="https://cursos.alura.com.br/course/java-listas-colecoes-dados">planejado</a>
                    </li>
                    <li class="lista">Java: consumindo API, gravando arquivos e lidando com erros
                        <a class="certificado_link_cursando"
                            href="https://cursos.alura.com.br/course/java-consumindo-api-gravando-arquivos-lidando-erros">planejado</a>
                    </li>
                    <li class="lista">GPT e Java: integre uma aplicação com a OpenAI
                        <a class="certificado_link_cursando"
                            href="https://cursos.alura.com.br/course/gpt-java-integre-aplicacao-openai">planejado</a>
                    </li>
                    <li class="lista">GPT e Java: desenvolva um Chatbot com IA
                        <a class="certificado_link_cursando"
                            href="https://cursos.alura.com.br/course/gpt-java-desenvolva-chatbot-ia">planejado</a>
                    </li>
                    <p>.......</p>`;
}

function getCertificadoContent() {
  apresentacaoImagem.classList.add("hidden");
  return ` <div class="carrosel">
                    <div class="card">
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/bc04afe2-07d6-42f7-acf7-99d0288c4c6f?lang=pt_BR">
                            <img src="assets/Certificados/HTML e CSS ambientes de desenvolvimento, estrutura de arquivos e tags.png"
                                alt="">
                        </a>
                    </div>
                    <div class="card">
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/4c87425c-714d-498f-b205-6899ed2f2487?lang=pt_BR">
                            <img src="assets/Certificados/HTML e CSS Classes, posicionamento e Flexbox.png" alt="">
                        </a>
                    </div>
                    <div class="card">
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/d2d896d5-8b6f-4683-a0b0-3c0c79937643?lang=pt_BR">
                            <img src="assets/Certificados/HTML e CSS cabeçalho, footer e variáveis CSS.png" alt="">
                        </a>
                    </div>
                    <div class="card">
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/c71ecc55-a3c0-4f63-8252-84eb1b6ab6e6?lang=pt_BR">
                            <img src="assets/Certificados/HTML e CSS praticando HTMLCSS.png" alt="">
                        </a>
                    </div>
                    <div class="card">
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/3c844c58-09ef-4a48-8ddc-a44a47258e5a?lang=pt_BR">
                            <img src="assets/Certificados/HTML e CSS responsividade com mobile-first.png" alt="">
                        </a>
                    </div>
                    <div class="card">
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/45ddcb1a-a4f6-490d-9ab5-520fb7956ea5?lang=pt_BR">
                            <img src="assets/Certificados/HTML e CSS trabalhando com responsividade e publicação de projetos.png"
                                alt="">
                        </a>
                    </div>
                    <div class="card">
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/f5d2a439-9de6-4d5f-bd02-c44b0e64a587?lang=pt_BR">
                            <img src="assets/Certificados/Praticando CSS Grid e Flexbox.png" alt="">
                        </a>
                    </div>
                    <div class="card">
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/b8de0b44-95f7-45ed-9e8a-80cad019b01b?lang=pt_BR">
                            <img src="assets/Certificados/JavaScript explorando a manipulação de elementos e da localStorage.png"
                                alt="">
                        </a>
                    </div>
                    <div class="card">
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/751ae55c-df96-4eea-9b6d-ae221511a2d8?lang=pt_BR">
                            <img src="assets/Certificados/JavaScript manipulando elementos no DOM.png" alt="">
                        </a>
                    </div>
                    <div class="card">
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/aa71841d-d414-411d-8ba6-3ad7c96ad007?lang=pt_BR">
                            <img src="assets/Certificados/JavaScript para Web Crie páginas dinâmicas.png" alt="">
                        </a>
                    </div>
                    <div class="card">
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/601101b0-ab73-494c-80dd-adca5f4442c0?lang=pt_BR">
                            <img src="assets/Certificados/JavaScript validações e reconhecimento de voz.png" alt="">
                        </a>
                    </div>
                    <div class="card">
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/4b733ab4-964c-4e70-ad4d-fff46f0945d6?lang=pt_BR">
                            <img src="assets/Certificados/JavaScript conhecendo objetos.png" alt="">
                        </a>
                    </div>
                    <div class="card">
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/13f4dc75-45a4-4cb4-b74d-5dcc0b4e1f0d?lang=pt_BR">
                            <img src="assets/Certificados/JavaScript conhecendo arrays.png" alt="">
                        </a>
                    </div>
                    <div class="card">
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/51b5b2e5-8065-456f-8033-4e75ccd2ff84?lang=pt_BR">
                            <img src="assets/Certificados/JavaScript programação orientada a objetos.png" alt="">
                        </a>
                    </div>
                    <div class="card">
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/ec783fb8-6c9e-4a1c-8b17-3697434ed7f8?lang=pt_BR">
                            <img src="assets/Certificados/JavaScript utilizando tipos, variáveis e funções.png" alt="">
                        </a>
                    </div>
                    <div class="card">
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/38ebe3e4-e72d-4db6-b624-e659e81150d3?lang=pt_BR">
                            <img src="assets/Certificados/Lógica de programação explore funções e listas.png" alt="">
                        </a>
                    </div>
                    <div class="card">
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/03fd0e43-af9e-4f90-a725-db3b12f71cf9?lang=pt_BR">
                            <img src="assets/Certificados/Lógica de programação mergulhe em programação com JavaScript.png"
                                alt="">
                        </a>
                    </div>
                    <div class="card">
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/ac769eec-cd04-49ff-80c8-4d0a7c8b87b2?lang=pt_BR">
                            <img src="assets/Certificados/JavaScript consumindo e tratando dados de uma API.png" alt="">
                        </a>
                    </div>
                    <div class="card">
                        <a class="certificado_link"
                            href="https://cursos.alura.com.br/certificate/6649708f-8502-402d-b7fb-f1712ec90908?lang=pt_BR">
                            <img src="assets/Certificados/JavaScript métodos de array.png" alt="">
                        </a>
                    </div>
                </div>`;
}

// Função para atualizar o conteúdo com base no botão clicado
function updateContent(index) {
  switch (index) {
    case "principal":
      contentArea.innerHTML = getPrincipalContent();
      break;
    case "currículo":
      contentArea.innerHTML = getCurriculoContent();
      break;
    case "certificado":
      contentArea.innerHTML = getCertificadoContent();
      break;
    default:
      contentArea.innerHTML = `<p>Conteúdo não encontrado.</p>`;
  }
}

// Adiciona os eventos de clique
tabs.forEach((tab, index) => {
  tab.addEventListener("click", () => {
    // Remove a classe ativa de todos os botões
    tabs.forEach((t) => t.classList.remove("active"));
    // Adiciona a classe ativa ao botão clicado
    tab.classList.add("active");
    // Move o destaque
    highlight.style.transform = `translateX(${index * 100}%)`;
    // Atualiza o conteúdo
    updateContent(tab.getAttribute("data-index"));
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Define a aba inicial como "Principal"
  const defaultTab = tabs[0]; // Primeiro botão (Principal)
  defaultTab.classList.add("active");
  
  // Posiciona o destaque no botão "Principal"
  highlight.style.transform = `translateX(0%)`;
  
  // Atualiza o conteúdo com base no índice da aba inicial
  updateContent(defaultTab.getAttribute("data-index"));
});

