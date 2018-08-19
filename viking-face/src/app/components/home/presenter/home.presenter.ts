
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: '../view/home.component.html',
  styleUrls: ['../view/home.component.css', '../../../app.component.css']
})
export class HomePresenter implements OnInit {
  
    pageTitle: string = 'Home';
    error: any;

constructor(private router: Router) {}

ngOnInit(): void {}

}
