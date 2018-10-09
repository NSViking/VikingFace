import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { ProjectsRouter } from './router/projects.router';
import { ProjectsPresenter } from './presenter/projects.presenter';
import { ProjectsInteractor } from './interactor/projects.interactor';


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        CommonModule,
        RouterModule.forChild(ProjectsRouter.routes),
    ],
    declarations: [
        ProjectsPresenter
    ],
    providers: [
        ProjectsInteractor
    ]
})

export class ProjectsModule {}