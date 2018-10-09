
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injector } from '@angular/core'

import 'rxjs/Rx';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'skills',
    templateUrl: '../view/skills.component.html',
    styleUrls: ['../view/skills.component.css', '../../../app.component.css']
})
export class SkillsPresenter implements OnInit {

    pageTitle: string = 'Skills';
    error: any;

    constructor(private injector: Injector,
                private router: Router) {
        this.router = router;
    }

    ngOnInit(): void {
    }
}
