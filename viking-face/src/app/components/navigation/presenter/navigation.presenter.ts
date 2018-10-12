
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injector } from '@angular/core'

import 'rxjs/Rx';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'navigation',
  templateUrl: '../view/navigation.component.html',
  styleUrls: ['../view/navigation.component.css', '../../../app.component.css']
})
export class NavigationPresenter implements OnInit {

  constructor(private injector: Injector,
              private router: Router) {
    this.router = router;
  }

  ngOnInit(): void {

  }

  redirectToHome() {
    let link = ['/'];
    this.router.navigate(link);
  }
  redirectToPresentation() {
    let link = ['presentation'];
    this.router.navigate(link);
  }
  redirectToCarrer() {
    let link = ['carrer'];
    this.router.navigate(link);
  }
  redirectToSkills() {
    let link = ['skills'];
    this.router.navigate(link);
  }
  redirectToCollaborations() {
    let link = ['projects'];
    this.router.navigate(link);
  }
}
