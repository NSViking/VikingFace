import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { PresentationRouter } from './router/presentation.router';
import { PresentationPresenter } from './presenter/presentation.presenter';
import { PresentationInteractor } from './interactor/presentation.interactor';


@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        CommonModule,
        RouterModule.forChild(PresentationRouter.routes),
    ],
    declarations: [
        PresentationPresenter
    ],
    providers: [
        PresentationInteractor
    ]
})

export class PresentationModule {}