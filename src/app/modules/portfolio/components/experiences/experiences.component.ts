import { Component, signal } from '@angular/core';

//Interface
import { IExperiences } from '../../interface/IExperiences.interface';

@Component({
  selector: 'app-experiences',
  standalone: true,
  imports: [],
  templateUrl: './experiences.component.html',
  styleUrl: './experiences.component.scss'
})
export class ExperiencesComponent {
  public arrayExperiences = signal<IExperiences[]>([
    {
      summary: {
        strong: "Angular",
        p:"ZUP | Set 2022 - Present",
      },
      text: "<p>Em maio de 2023 realizei meu primeiro curso com a utilização do Angular framework, iniciando assim o conhecimento de diversas skills com o angular, formulários reativos, rotas, onde desenvolvi alguns projetos práticos como To-do-List, Pokedex, Dark-Theme, Auth-Front, Meu-Portfólio, onde sigo estudando e buscando conhecer as novidades da sua interface e tentando sempre me manter atualizado.</p>",
    },
    {
      summary: {
        strong: "GitHub",
        p:"ZUP | Ago 2024 - Present",
      },
      text: "<p>Realizei um curso de Git e GitHub, onde aprendi sobre armazenar e administrar o código, fazer o registro de todas as mudanças conforme o avanço de cada projeto, compartilhamento de projetos, e colaboração em projetos de outra pessoa, assim como seus comandos básicos, criação de novas branchs, pull requests e incorporação de mudanças.</p>",
    },
    {
      summary: {
        strong: "TypeScript",
        p:"ZUP | Abril 2023 - Set 2024",
      },
      text: "<p>Em abril de 2023 realizei um curso sobre Typscript na plataforma da Udemy conhecendo desde os conceitos básicos de criação da linguagem, tipagem de dados em variáveis, além dos recursos avançados de orientação a objeto e padrões em projetos, seus tipos, classes, interface e compilador. Em 2024 refiz uma revisão a respeito dos conhecimentos.</p>",
    },
    {
      summary: {
        strong: "JavaScript",
        p:"ZUP | Fev 2023 - Julh 2024",
      },
      text: "<p>Realizei um curso pela plataforma da Udemy onde iniciei o conhecimento sobre JAVASCRIPT, tipos primitivos, operadores aritméticos, variáveis, condições, funções, objetos rasos e profundos, array a fundo. Realizei também um curso de JavaScipt patrocinado pelo Google em julho de 2024 com diversas aulas desde fundamentos e realização de exercícios.</p>",
    },
    {
      summary: {
        strong: "Manipulando DOM",
        p:"ZUP | Abril 2023",
      },
      text: "<p>Aprendi sobre o conceito do DOM e seus elementos, diversas maneiras de selecionar elementos, manipular valores, manipular estilos, encontrar elementos (First Child e First Element Child), seus eventos em geral, adicionar e remover valores, delegar eventos, validar eventos, e por fim diversas maneiras de trabalhar com formulários, entrada e saída de dados nos formulários, manipulação de input e checkbox.</p>",
    },
    {
      summary: {
        strong: "Inicio na Programação Jornada Front-End HTML, CSS3, SASS, BOOTSTRAP",
        p:"ZUP | Dez 2022 - Fev 2023 ",
      },
      text: "<p>Iniciei na programação em dezembro de 2022, começando com o básico no Front-End, onde aprendi a base em HTML, após esse início realizei cursos e projetos práticos com CSS3, SASS, E BOOTSTRAP, aprendendo muitas maneiras de manipular toda estrutura de classes, cores e detalhes da página web.</p>",
    },
  ]);
}
