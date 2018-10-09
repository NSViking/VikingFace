import { Component, OnInit } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { ProjectsPresenter } from '../presenter/projects.presenter';

export class ProjectsRouter {
    public static routes: Routes = [
        { path: 'projects', component: ProjectsPresenter }
    ];
}
