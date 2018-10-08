import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { CarrerRouter } from './router/carrer.router';
import { CarrerPresenter } from './presenter/carrer.presenter';
import { CarrerInteractor } from './interactor/carrer.interactor';


@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    CommonModule,
    RouterModule.forChild(CarrerRouter.routes),
  ],
  declarations: [
    CarrerPresenter
  ],
  providers: [
    CarrerInteractor
  ]
})
export class CarrerModule {}
