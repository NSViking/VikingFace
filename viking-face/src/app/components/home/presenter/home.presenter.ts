
import { Component, OnInit } from '@angular/core';
import { Http, ResponseContentType } from '@angular/http';
import { Router } from '@angular/router';

import 'rxjs/Rx';
// Import RxJs required methods
import 'rxjs/add/operator/catch';
import { map } from "rxjs/operators";

@Component({
  selector: 'home',
  templateUrl: '../view/home.component.html',
  styleUrls: ['../view/home.component.css', '../../../app.component.css']
})
export class HomePresenter implements OnInit {
  
    pageTitle: string = 'Home';
    error: any;

constructor(private router: Router, private http: Http) {}

ngOnInit(): void {}

downloadCV() {
  return this.http
    .get('https://res.cloudinary.com/aka7/image/upload/v1538855786/Victor/CVV%C3%ADctor.ai', {
      responseType: ResponseContentType.Blob
    })
    .map(res => {
      return {
        filename: 'VictorVicenteSanchez.pdf',
        data: res.blob()
      };
    })
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