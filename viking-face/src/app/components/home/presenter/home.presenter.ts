
import { Component, OnInit } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';
import { Router } from '@angular/router';
import { Injectable,Injector } from '@angular/core'

import 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/catch';
import { map } from "rxjs/operators";
import {HomeInteractorContract} from "../interactor/HomeInteractorContract";
import {HomeInteractor} from "../interactor/home.interactor";
import {UserRepository} from "../../../../repositories/UserRepository/UserRepository";
import {HTTPClient} from "../../../../Clients/HTTPClient";

@Component({
  selector: 'home',
  templateUrl: '../view/home.component.html',
  styleUrls: ['../view/home.component.css', '../../../app.component.css'],
  providers: [{ provide:HomeInteractorContract, useClass: HomeInteractor}]
})
export class HomePresenter implements OnInit {

    pageTitle: string = 'Home';
    error: any;

    interactor: HomeInteractorContract

constructor(private injector:Injector,
            private router: Router) {

      let client = new HTTPClient(this.injector.get(Http));
      let userRepository = new UserRepository(client);
      this.interactor = new HomeInteractor(userRepository);
}

ngOnInit(): void {}

downloadCV() {
      return this.interactor.getCV()
        .subscribe(res => {
          console.log('start download:',res);
          var url = window.URL.createObjectURL(res.data);
          var a = document.createElement('a');
          document.body.appendChild(a);
          a.setAttribute('style', 'display: none');
          a.href = url;
          a.download = res.filename;
          a.click();
          window.URL.revokeObjectURL(url);
          a.remove(); // remove the element
        }, error => {
          console.log('download error:', JSON.stringify(error));
        }, () => {
          console.log('Completed file download.')
        });
}

    redirectToPresentation() {
      let link = ['presentation'];
      this.router.navigate(link);
    }

    redirectToCollaborations() {
      let link = ['collaborations'];
      this.router.navigate(link);
    }

    redirectToSkills() {
      let link = ['skills'];
      this.router.navigate(link);
    }

    redirectToCarrer() {
      let link = ['carrer'];
      this.router.navigate(link);
    }
}
