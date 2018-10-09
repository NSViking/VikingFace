import { Component, OnInit } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { SkillsPresenter } from '../presenter/skills.presenter';

export class SkillsRouter {
    public static routes: Routes = [
        { path: 'skills', component: SkillsPresenter }
    ];
}
