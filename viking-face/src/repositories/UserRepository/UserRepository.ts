import {Injectable, Optional} from '@angular/core';
import {HTTPClientContract} from "../../clients/HTTPClientContract";
import {UserRepositoryContract} from "./UserRepositoryContract";
import {ResponseContentType} from "@angular/http";
import {Observable} from "rxjs/Rx";

import {CurriculumData} from "../DataModels/CurriculumData";

@Injectable()
export class UserRepository implements UserRepositoryContract{

  client: HTTPClientContract

  constructor(@Optional() client: HTTPClientContract) {
    this.client = client;
  }

  getCV(): Observable<CurriculumData> {
    return this.client
      .get('https://res.cloudinary.com/aka7/image/upload/v1538855786/Victor/CVV%C3%ADctor.ai', {
        responseType: ResponseContentType.Blob
      })
      .map(res => {
        return  new CurriculumData( 'VictorVicenteSanchez.pdf', res.blob());
      })
  }
}
