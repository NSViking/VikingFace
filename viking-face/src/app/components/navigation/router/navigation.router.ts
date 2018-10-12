import { Component, OnInit } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { NavigationPresenter } from '../presenter/navigation.presenter';

export class SkillsRouter {
  public static routes: Routes = [
    { path: 'skills', component: NavigationPresenter }
  ];
}
