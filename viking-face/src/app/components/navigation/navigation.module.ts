import { NgModule }  from '@angular/core';
import { CommonModule } from '@angular/common';

import { NavigationPresenter } from './presenter/navigation.presenter';

@NgModule({
  imports: [CommonModule],
  exports : [
    NavigationPresenter
  ],
  declarations: [
    NavigationPresenter
  ]
})
export class NavigationModule { }
