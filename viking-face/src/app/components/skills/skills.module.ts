import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { SkillsRouter } from './router/skills.router';
import { SkillsPresenter } from './presenter/skills.presenter';
import { SkillsInteractor } from './interactor/skills.interactor';

import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        CommonModule,
        NavigationModule,
        RouterModule.forChild(SkillsRouter.routes),
    ],
    declarations: [
        SkillsPresenter
    ],
    providers: [
        SkillsInteractor
    ]
})

export class SkillsModule {}
