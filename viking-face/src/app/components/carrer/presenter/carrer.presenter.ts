
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Injector } from '@angular/core'

import 'rxjs/Rx';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'carrer',
  templateUrl: '../view/carrer.component.html',
  styleUrls: ['../view/carrer.component.css', '../../../app.component.css']
})
export class CarrerPresenter implements OnInit {

  pageTitle: string = 'Carrer';
  error: any;


  constructor(private injector: Injector,
              private router: Router) {
    this.router = router;
  }

  ngOnInit(): void {
  }

}
