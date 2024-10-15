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
        strong: "Front-end Especialista",
        p:"ZUP | Set 2020 - Present",
      },
      text: "<p>Desde setembro de 2020, atuo como Analista de Sistema Especialista na ZUP, destacando-me nas áreas Front-end, utilizando Html5, Css3, Javascript, Typescript, Angular 2+, Angular Material e NgRx, Back-end, onde o NodeJs é aplicado em Provas de conceito, caso necessário.</p>",
    },
    {
      summary: {
        strong: "Fullstack Developer",
        p:"ZUP | Set 2020 - Present",
      },
      text: "<p>Desde setembro de 2020, atuo como Analista de Sistema Especialista na ZUP, destacando-me nas áreas Front-end, utilizando Html5, Css3, Javascript, Typescript, Angular 2+, Angular Material e NgRx, Back-end, onde o NodeJs é aplicado em Provas de conceito, caso necessário.</p>",
    },
    {
      summary: {
        strong: "Consultor Web",
        p:"ZUP | Set 2020 - Present",
      },
      text: "<p>Desde setembro de 2020, atuo como Analista de Sistema Especialista na ZUP, destacando-me nas áreas Front-end, utilizando Html5, Css3, Javascript, Typescript, Angular 2+, Angular Material e NgRx, Back-end, onde o NodeJs é aplicado em Provas de conceito, caso necessário.</p>",
    },
    {
      summary: {
        strong: "Fullstack Developer",
        p:"ZUP | Set 2020 - Present",
      },
      text: "<p>Desde setembro de 2020, atuo como Analista de Sistema Especialista na ZUP, destacando-me nas áreas Front-end, utilizando Html5, Css3, Javascript, Typescript, Angular 2+, Angular Material e NgRx, Back-end, onde o NodeJs é aplicado em Provas de conceito, caso necessário.</p>",
    },
    {
      summary: {
        strong: "Decolar.com Front-end",
        p:"ZUP | Set 2020 - Present",
      },
      text: "<p>Desde setembro de 2020, atuo como Analista de Sistema Especialista na ZUP, destacando-me nas áreas Front-end, utilizando Html5, Css3, Javascript, Typescript, Angular 2+, Angular Material e NgRx, Back-end, onde o NodeJs é aplicado em Provas de conceito, caso necessário.</p>",
    },
    {
      summary: {
        strong: "EW21 Front-end",
        p:"ZUP | Set 2020 - Present",
      },
      text: "<p>Desde setembro de 2020, atuo como Analista de Sistema Especialista na ZUP, destacando-me nas áreas Front-end, utilizando Html5, Css3, Javascript, Typescript, Angular 2+, Angular Material e NgRx, Back-end, onde o NodeJs é aplicado em Provas de conceito, caso necessário.</p>",
    },
  ]);
}
