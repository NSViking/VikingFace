import { Component, OnInit } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { CarrerPresenter } from '../presenter/carrer.presenter';

export class CarrerRouter {
  public static routes: Routes = [
    { path: 'carrer', component: CarrerPresenter }
  ];
}
