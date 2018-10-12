import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';

import { CarrerRouter } from './router/carrer.router';
import { CarrerPresenter } from './presenter/carrer.presenter';
import { CarrerInteractor } from './interactor/carrer.interactor';

import { NavigationModule } from '../navigation/navigation.module';

@NgModule({
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    CommonModule,
    NavigationModule,
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
