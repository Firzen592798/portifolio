class Globals{
  static inicializarCompetencias(){
    class Competencia {
      constructor(nome, descricao) {
        this.nome = nome;
        this.descricao = descricao;
      }
    }
    class GrupoCompetencia {
      constructor(nome, competencias) {
        this.nome = nome;
        this.competencias = competencias;
      }
    }
    let competencias = [];
    let gruposCompetencia = [];
    competencias.push(new Competencia("Java", "Utilizado constantemente no trabalho atual e na faculdade"));
    competencias.push(new Competencia("HTML/CSS/Javascript", "Possuo um sólido conhecimento apesar de front end não ser meu forte"));
    competencias.push(new Competencia("PHP", "Conhecimentos básicos, utilizei para criar backend no meu TCC e em um projeto pessoal"));
    competencias.push(new Competencia("Dart", "Utilizado junto com o Flutter Framework"))
    competencias.push(new Competencia("C e C++", "Alguns projetos desenvolvidos na faculdade"))

    gruposCompetencia.push(new GrupoCompetencia("Linguagens", competencias));

    competencias = [];
    competencias.push(new Competencia("Spring Boot", "Meu principal framework no momento"));
    competencias.push(new Competencia("JSF", "Utilizei muito em projetos de faculdade e nos primeiros anos de trabalho. Ainda utilizado para eventuais manutenções"));
    competencias.push(new Competencia("Flutter", "Utilizado em um projeto de trabalho e um pessoal"));
    competencias.push(new Competencia("Ionic", "Framework que foi desenvolvido meu projeto pessoal Coleção de Mangás"));
    competencias.push(new Competencia("Bootstrap/Jquery", "Muito tempo de convivência com as duas por causa do trabalho"));
    competencias.push(new Competencia("Vue", "Conhecimentos elementares"));
    competencias.push(new Competencia("React", "Aprendendo no momento"));

    gruposCompetencia.push(new GrupoCompetencia("Frameworks", competencias));

    competencias.push(new Competencia("Postgres", "Utilizado amplament no trabalho"));
    competencias.push(new Competencia("MySQL", "Utilizado em trabalhos de faculdade e projetos pessoais"));

    gruposCompetencia.push(new GrupoCompetencia("Banco de Dados", competencias));
    return gruposCompetencia;
  }

  static inicializarRedesSociais(){
    class RedeSocial {
      constructor(nome, url, icone) {
        this.nome = nome;
        this.url = url;
        this.icone = icone;
      }
    }

    let lista = [];
    lista.push(new RedeSocial("Github", "https://github.com/Firzen592798", "devicon-github-original"));
    lista.push(new RedeSocial("Linkedin", "https://www.linkedin.com/in/augusto-dantas-57145425b/", "devicon-linkedin-plain"));
    return lista;
  }

  static inicializarProjetos(){
    class Projeto {
      constructor(nome, descricao, imagem, url) {
        this.nome = nome;
        this.descricao = descricao;
        this.imagem = imagem;
        this.url = url;
      }
    }

    let lista = [];
    lista.push(new Projeto("Caça-Cápsulas", "Projeto desenvolvido com o intuito de capturar as melhores promoções de cápsulas de café do site da Dolce Gusto e notificar os usuários de promoções por meio de um bot no telegram", "https://user-images.githubusercontent.com/1834518/210185979-f8de8e3d-0b1c-4189-8443-af68ac768acd.png", "https://github.com/Firzen592798/caca-capsula"));
    lista.push(new Projeto("Campeonato de dados", "Projeto front end feito em Vue.js com um intuito de rolar um campeoanto de 8 participantes usando um dado de 6 faces para representar os jogos. Projeto feito exclusivamente para praticar aspectos de reatividade e composição na tecnologia vue.js enquanto coloca em prática um antigo hobby. Utiliza bastante o grid system do css e media query para permitir o funcionamento em dispositivos móveis, e um pouco de javascript para executar a lógica do campeonato e as animações do dado", "https://user-images.githubusercontent.com/1834518/210160151-3b23c789-e15a-4a37-8eb9-78bf643e2947.png", "https://github.com/Firzen592798/CampeonatoDeDados"));
    lista.push(new Projeto("Coleção de Mangás", "O aplicativo permite gerenciar seus mangás comprados de modo que você terá sempre o controle dos itens que estão presentes e os que estão faltando na sua coleção. É possível também gerenciar os mangás lidos e especificar os volumes de mangás que ainda não foram comprados", "https://user-images.githubusercontent.com/1834518/208948824-187c63d8-321b-4a11-accd-5bc407e96131.png", "https://github.com/Firzen592798/colecao-de-mangas"));
    return lista;
  }
}

export default Globals;