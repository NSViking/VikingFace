import { Component, OnInit } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { PresentationPresenter } from '../presenter/presentation.presenter';

export class PresentationRouter {
    public static routes: Routes = [
        { path: 'presentation', component: PresentationPresenter }
    ];
}
