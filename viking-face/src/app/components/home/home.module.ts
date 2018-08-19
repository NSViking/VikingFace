import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { HomeRouter } from './router/home.router';
import { HomePresenter } from './presenter/home.presenter';
import { HomeInteractor } from './interactor/home.interactor';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(HomeRouter.routes),
  ],
  declarations: [
    HomePresenter
    ],
  providers: [
    HomeInteractor
    ]
})
export class HomeModule {}
