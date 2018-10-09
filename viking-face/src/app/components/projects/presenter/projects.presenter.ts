
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injector } from '@angular/core'

import 'rxjs/Rx';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'projects',
    templateUrl: '../view/projects.component.html',
    styleUrls: ['../view/projects.component.css', '../../../app.component.css']
})
export class ProjectsPresenter implements OnInit {

    pageTitle: string = 'Projects';
    error: any;

    constructor(private injector: Injector,
                private router: Router) {
        this.router = router;
    }

    ngOnInit(): void {
    }
}
