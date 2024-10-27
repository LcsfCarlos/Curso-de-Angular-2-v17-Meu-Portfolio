import { Component, inject, signal } from '@angular/core';

// 
import { IProjects } from '../../interface/IProjects.interface';

// Material
import {MatDialog, MatDialogModule} from '@angular/material/dialog';

// Enum
import { EDialogPanelClass } from '../../enum/EDialogPanelClass.enum';

// Dialog
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [MatDialogModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {
    #dialog = inject(MatDialog);

    public arrayProjects = signal<IProjects[]>([
      {
        src: "assets/img/projects/vfull.png",
        alt: "Projeto Meu Primeiro Site",
        title: "Meu Primeiro Site",
        width: "100px",
        height: "51px",
        description: "<p>Esse foi meu primeiro projeto desenvolvido, simples, utilizando os conhecimentos estudados HTML, CSS3, SASS e FLEXBOX.</p>",
        links: [
          {
              name: "GH-Pages",
              href: "https://lcsfcarlos.github.io/hands-on-curso-front-end-1"
          },
        ],
      },
      {
        src: "assets/img/projects/vfull.png",
        alt: "Site Loja Virtual",
        title: "Site Loja Virtual",
        width: "100px",
        height: "51px",
        description: "<p>Loja Virtual de roupas, desenvolvida utilizando os conhecimentos estudados, HTML, CSS3 E SASS e FLEXBOX. </p>",
        links: [
          {
              name: "GH-Pages",
              href: "https://lcsfcarlos.github.io/hands-on-curso-front-end-2/"
          },
        ],
      },
      {
        src: "assets/img/projects/vfull.png",
        alt: "Lista de Tarefas",
        title: "Lista de Tarefas",
        width: "100px",
        height: "51px",
        description: "<p>Lista de taferas desenvolvida onde é possivel adcionar novas tarefas, excluir, e salvar novas tarefas, projeto simples utilizando os conhecimentos estudados, TYPESCRIPT, CSS, SASS, HTML, FLEXBOX.</p>",
        links: [
          {
              name: "GH-Pages",
              href: "https://lcsfcarlos.github.io/Curso-Angular-To-do-List/"
          },
        ],
      },
      {
        src: "assets/img/projects/vfull.png",
        alt: "Dark-Theme",
        title: "Dark-Theme",
        width: "100px",
        height: "51px",
        description: "<p>Projeto desenvolvido onde o tema muda de acordo com o horário e tambem o tema e a imagem, utilizando os conhecimentos estudados TYPESCRIPT, CSS, SASS, FLEXBOX</p>",
        links: [
          {
              name: "GH-Pages",
              href: "https://lcsfcarlos.github.io/Curso-angular-dark-theme/"
          },
        ],
      },
      {
        src: "assets/img/projects/vfull.png",
        alt: "Projeto Meu Portfólio",
        title: "Projeto Meu Portfólio",
        width: "100px",
        height: "51px",
        description: "<p>Projeto meu portfólio, desenvolvido com os conhecimentos estudados utilizando o ANGULAR, HTML, CSS, SASS, TYPESCRIPT E FLEXBOX, onde apresento dados pessoais para contato e tambem um pouco do meu estudo e trabalhos desenvolvidos, onde sigo na jornada de aprendizado buscando me atualizar e sempre aprender coisas novas.</p>",
        links: [
          {
              name: "GitHub",
              href: "https://github.com/LcsfCarlos"
          },
        ],
      },
    ]);

    public openDialog(data: IProjects){
      this.#dialog.open(DialogProjectsComponent, {
        data,
        panelClass: EDialogPanelClass.PROJECTS
      })
    }
  }
