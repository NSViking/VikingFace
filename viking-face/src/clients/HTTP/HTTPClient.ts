import { Injectable } from '@angular/core';
import {Headers, Http, Response, RequestOptions, RequestOptionsArgs} from '@angular/http';

import { HTTPClientContract } from './HTTPClientContract';


@Injectable()
export class HTTPClient implements HTTPClientContract {

  constructor(public http: Http) {
    this.http = http;
  }

  get(url: string, options: RequestOptionsArgs) {

    return this.http.get(url, options);
  }
}
