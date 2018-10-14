
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injector } from '@angular/core'

import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
    selector: 'projects',
    templateUrl: '../view/projects.component.html',
    styleUrls: ['../view/projects.component.css', '../../../app.component.css']
})
export class ProjectsPresenter implements OnInit {

    pageTitle: string = 'Projects';
    error: any;

    safeURL: any;

    constructor(private injector: Injector,
                private router: Router,
                private _sanitizer: DomSanitizer) {
        this.router = router;
        this.safeURL = this._sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/KTBlpkoneJM");
    }

    ngOnInit(): void {
    }
}
