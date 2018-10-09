import { Component, OnInit } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { HomePresenter } from '../presenter/home.presenter';

export class HomeRouter {
    public static routes: Routes = [
        { path: 'home', component: HomePresenter },
        { path: '', pathMatch: 'full', redirectTo: 'first' }
      ];
}