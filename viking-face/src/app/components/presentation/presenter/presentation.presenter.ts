
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injector } from '@angular/core'

import 'rxjs/Rx';
import 'rxjs/add/operator/catch';

@Component({
    selector: 'presentation',
    templateUrl: '../view/presentation.component.html',
    styleUrls: ['../view/presentation.component.css', '../../../app.component.css']
})
export class PresentationPresenter implements OnInit {

    pageTitle: string = 'Presentation';
    error: any;

    constructor(private injector: Injector,
                private router: Router) {
        this.router = router;
    }

    ngOnInit(): void {
    }
}
